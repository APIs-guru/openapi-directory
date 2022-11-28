# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.DescribeEntitiesDetectionV2JobRequest(
    headers=operations.DescribeEntitiesDetectionV2JobHeaders(
        x_amz_algorithm="et",
        x_amz_content_sha256="ut",
        x_amz_credential="soluta",
        x_amz_date="minima",
        x_amz_security_token="fugit",
        x_amz_signature="accusamus",
        x_amz_signed_headers="et",
        x_amz_target="ComprehendMedical_20181030.DescribeEntitiesDetectionV2Job",
    ),
    request=shared.DescribeEntitiesDetectionV2JobRequest(
        job_id="quod",
    ),
)
    
res = s.sdk.describe_entities_detection_v2_job(req)

if res.describe_entities_detection_v2_job_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `describe_entities_detection_v2_job` - Gets the properties associated with a medical entities detection job. Use this operation to get the status of a detection job.
* `describe_icd10_cm_inference_job` - Gets the properties associated with an InferICD10CM job. Use this operation to get the status of an inference job.
* `describe_phi_detection_job` - Gets the properties associated with a protected health information (PHI) detection job. Use this operation to get the status of a detection job.
* `describe_rx_norm_inference_job` - Gets the properties associated with an InferRxNorm job. Use this operation to get the status of an inference job.
* `detect_entities` - <p>The <code>DetectEntities</code> operation is deprecated. You should use the <a>DetectEntitiesV2</a> operation instead.</p> <p> Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information .</p>
* `detect_entities_v2` - <p>Inspects the clinical text for a variety of medical entities and returns specific information about them such as entity category, location, and confidence score on that information. Amazon Comprehend Medical only detects medical entities in English language texts.</p> <p>The <code>DetectEntitiesV2</code> operation replaces the <a>DetectEntities</a> operation. This new action uses a different model for determining the entities in your medical text and changes the way that some entities are returned in the output. You should use the <code>DetectEntitiesV2</code> operation in all new applications.</p> <p>The <code>DetectEntitiesV2</code> operation returns the <code>Acuity</code> and <code>Direction</code> entities as attributes instead of types. </p>
* `detect_phi` -  Inspects the clinical text for protected health information (PHI) entities and returns the entity category, location, and confidence score for each entity. Amazon Comprehend Medical only detects entities in English language texts.
* `infer_icd10_cm` - InferICD10CM detects medical conditions as entities listed in a patient record and links those entities to normalized concept identifiers in the ICD-10-CM knowledge base from the Centers for Disease Control. Amazon Comprehend Medical only detects medical entities in English language texts. 
* `infer_rx_norm` - InferRxNorm detects medications as entities listed in a patient record and links to the normalized concept identifiers in the RxNorm database from the National Library of Medicine. Amazon Comprehend Medical only detects medical entities in English language texts. 
* `list_entities_detection_v2_jobs` - Gets a list of medical entity detection jobs that you have submitted.
* `list_icd10_cm_inference_jobs` - Gets a list of InferICD10CM jobs that you have submitted.
* `list_phi_detection_jobs` - Gets a list of protected health information (PHI) detection jobs that you have submitted.
* `list_rx_norm_inference_jobs` - Gets a list of InferRxNorm jobs that you have submitted.
* `start_entities_detection_v2_job` - Starts an asynchronous medical entity detection job for a collection of documents. Use the <code>DescribeEntitiesDetectionV2Job</code> operation to track the status of a job.
* `start_icd10_cm_inference_job` - Starts an asynchronous job to detect medical conditions and link them to the ICD-10-CM ontology. Use the <code>DescribeICD10CMInferenceJob</code> operation to track the status of a job.
* `start_phi_detection_job` - Starts an asynchronous job to detect protected health information (PHI). Use the <code>DescribePHIDetectionJob</code> operation to track the status of a job.
* `start_rx_norm_inference_job` - Starts an asynchronous job to detect medication entities and link them to the RxNorm ontology. Use the <code>DescribeRxNormInferenceJob</code> operation to track the status of a job.
* `stop_entities_detection_v2_job` - Stops a medical entities detection job in progress.
* `stop_icd10_cm_inference_job` - Stops an InferICD10CM inference job in progress.
* `stop_phi_detection_job` - Stops a protected health information (PHI) detection job in progress.
* `stop_rx_norm_inference_job` - Stops an InferRxNorm inference job in progress.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
