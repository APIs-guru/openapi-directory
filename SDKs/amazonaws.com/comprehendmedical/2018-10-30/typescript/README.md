# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { DescribeEntitiesDetectionV2JobRequest, DescribeEntitiesDetectionV2JobResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: DescribeEntitiesDetectionV2JobRequest = {
  headers: {
    xAmzAlgorithm: "et",
    xAmzContentSha256: "ut",
    xAmzCredential: "soluta",
    xAmzDate: "minima",
    xAmzSecurityToken: "fugit",
    xAmzSignature: "accusamus",
    xAmzSignedHeaders: "et",
    xAmzTarget: "ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
  },
  request: {
    jobId: "quod",
  },
};

sdk.sdk.describeEntitiesDetectionV2Job(req).then((res: DescribeEntitiesDetectionV2JobResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `describeEntitiesDetectionV2Job` - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
* `describeIcd10CmInferenceJob` - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
* `describePhiDetectionJob` - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
* `describeRxNormInferenceJob` - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
* `detectEntities` - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
* `detectEntitiesV2` - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
* `detectPhi` -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
* `inferIcd10Cm` - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 
* `inferRxNorm` - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 
* `listEntitiesDetectionV2Jobs` - Gets a list of medical entity detection jobs that you have submitted.
* `listIcd10CmInferenceJobs` - Gets a list of InferICD10CM jobs that you have submitted.
* `listPhiDetectionJobs` - Gets a list of protected health information (PHI) detection jobs that you have submitted.
* `listRxNormInferenceJobs` - Gets a list of InferRxNorm jobs that you have submitted.
* `startEntitiesDetectionV2Job` - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
* `startIcd10CmInferenceJob` - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
* `startPhiDetectionJob` - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
* `startRxNormInferenceJob` - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
* `stopEntitiesDetectionV2Job` - Stops a medical entities detection job in progress.
* `stopIcd10CmInferenceJob` - Stops an InferICD10CM inference job in progress.
* `stopPhiDetectionJob` - Stops a protected health information (PHI) detection job in progress.
* `stopRxNormInferenceJob` - Stops an InferRxNorm inference job in progress.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
