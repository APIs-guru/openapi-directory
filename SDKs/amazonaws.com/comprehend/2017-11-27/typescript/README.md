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
import { BatchDetectDominantLanguageRequest, BatchDetectDominantLanguageResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchDetectDominantLanguageRequest = {
  headers: {
    xAmzAlgorithm: "et",
    xAmzContentSha256: "eum",
    xAmzCredential: "vero",
    xAmzDate: "totam",
    xAmzSecurityToken: "odio",
    xAmzSignature: "veritatis",
    xAmzSignedHeaders: "fuga",
    xAmzTarget: "Comprehend_20171127.BatchDetectDominantLanguage",
  },
  request: {
    textList: [
      "consequatur",
      "qui",
      "numquam",
    ],
  },
};

sdk.sdk.batchDetectDominantLanguage(req).then((res: BatchDetectDominantLanguageResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchDetectDominantLanguage` - Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 
* `batchDetectEntities` - Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a>how-entities</a> 
* `batchDetectKeyPhrases` - Detects the key noun phrases found in a batch of documents.
* `batchDetectSentiment` - Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
* `batchDetectSyntax` - Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a>how-syntax</a>.
* `classifyDocument` - Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.
* `containsPiiEntities` - Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
* `createDocumentClassifier` - Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that labeled with the categories that you want to use. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see <a>how-document-classification</a>.
* `createEndpoint` - Creates a model-specific endpoint for synchronous inference for a previously trained custom model 
* `createEntityRecognizer` - Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the API. 
* `deleteDocumentClassifier` - <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
* `deleteEndpoint` - Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted.
* `deleteEntityRecognizer` - <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
* `describeDocumentClassificationJob` - Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
* `describeDocumentClassifier` - Gets the properties associated with a document classifier.
* `describeDominantLanguageDetectionJob` - Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
* `describeEndpoint` - Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
* `describeEntitiesDetectionJob` - Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
* `describeEntityRecognizer` - Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
* `describeEventsDetectionJob` - Gets the status and details of an events detection job.
* `describeKeyPhrasesDetectionJob` - Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
* `describePiiEntitiesDetectionJob` - Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.
* `describeSentimentDetectionJob` - Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
* `describeTopicsDetectionJob` - Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
* `detectDominantLanguage` - Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>. 
* `detectEntities` - Inspects text for named entities, and returns information about them. For more information, about named entities, see <a>how-entities</a>. 
* `detectKeyPhrases` - Detects the key noun phrases found in the text. 
* `detectPiiEntities` - Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
* `detectSentiment` - Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>). 
* `detectSyntax` - Inspects text for syntax and the part of speech of words in the document. For more information, <a>how-syntax</a>.
* `listDocumentClassificationJobs` - Gets a list of the documentation classification jobs that you have submitted.
* `listDocumentClassifiers` - Gets a list of the document classifiers that you have created.
* `listDominantLanguageDetectionJobs` - Gets a list of the dominant language detection jobs that you have submitted.
* `listEndpoints` - Gets a list of all existing endpoints that you've created.
* `listEntitiesDetectionJobs` - Gets a list of the entity detection jobs that you have submitted.
* `listEntityRecognizers` - <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
* `listEventsDetectionJobs` - Gets a list of the events detection jobs that you have submitted.
* `listKeyPhrasesDetectionJobs` - Get a list of key phrase detection jobs that you have submitted.
* `listPiiEntitiesDetectionJobs` - Gets a list of the PII entity detection jobs that you have submitted.
* `listSentimentDetectionJobs` - Gets a list of sentiment detection jobs that you have submitted.
* `listTagsForResource` - Lists all tags associated with a given Amazon Comprehend resource. 
* `listTopicsDetectionJobs` - Gets a list of the topic detection jobs that you have submitted.
* `startDocumentClassificationJob` - Starts an asynchronous document classification job. Use the operation to track the progress of the job.
* `startDominantLanguageDetectionJob` - Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
* `startEntitiesDetectionJob` - <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
* `startEventsDetectionJob` - Starts an asynchronous event detection job for a collection of documents.
* `startKeyPhrasesDetectionJob` - Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
* `startPiiEntitiesDetectionJob` - Starts an asynchronous PII entity detection job for a collection of documents.
* `startSentimentDetectionJob` - Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.
* `startTopicsDetectionJob` - Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
* `stopDominantLanguageDetectionJob` - <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* `stopEntitiesDetectionJob` - <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* `stopEventsDetectionJob` - Stops an events detection job in progress.
* `stopKeyPhrasesDetectionJob` - <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* `stopPiiEntitiesDetectionJob` - Stops a PII entities detection job in progress.
* `stopSentimentDetectionJob` - <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
* `stopTrainingDocumentClassifier` - <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
* `stopTrainingEntityRecognizer` - <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
* `tagResource` - Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department. 
* `untagResource` - Removes a specific tag associated with an Amazon Comprehend resource. 
* `updateEndpoint` - Updates information about the specified endpoint.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
