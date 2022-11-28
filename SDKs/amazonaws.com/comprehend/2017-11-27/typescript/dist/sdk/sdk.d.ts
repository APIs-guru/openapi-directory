import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://comprehend.{region}.amazonaws.com", "https://comprehend.{region}.amazonaws.com", "http://comprehend.{region}.amazonaws.com.cn", "https://comprehend.{region}.amazonaws.com.cn"];
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _security?: Security;
    _serverURL: string;
    private _language;
    private _sdkVersion;
    private _genVersion;
    constructor(...opts: OptsFunc[]);
    /**
     * batchDetectDominantLanguage - Determines the dominant language of the input text for a batch of documents. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
    **/
    batchDetectDominantLanguage(req: operations.BatchDetectDominantLanguageRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectDominantLanguageResponse>;
    /**
     * batchDetectEntities - Inspects the text of a batch of documents for named entities and returns information about them. For more information about named entities, see <a>how-entities</a>
    **/
    batchDetectEntities(req: operations.BatchDetectEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectEntitiesResponse>;
    /**
     * batchDetectKeyPhrases - Detects the key noun phrases found in a batch of documents.
    **/
    batchDetectKeyPhrases(req: operations.BatchDetectKeyPhrasesRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectKeyPhrasesResponse>;
    /**
     * batchDetectSentiment - Inspects a batch of documents and returns an inference of the prevailing sentiment, <code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>, in each one.
    **/
    batchDetectSentiment(req: operations.BatchDetectSentimentRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectSentimentResponse>;
    /**
     * batchDetectSyntax - Inspects the text of a batch of documents for the syntax and part of speech of the words in the document and returns information about them. For more information, see <a>how-syntax</a>.
    **/
    batchDetectSyntax(req: operations.BatchDetectSyntaxRequest, config?: AxiosRequestConfig): Promise<operations.BatchDetectSyntaxResponse>;
    /**
     * classifyDocument - Creates a new document classification request to analyze a single document in real-time, using a previously created and trained custom model and an endpoint.
    **/
    classifyDocument(req: operations.ClassifyDocumentRequest, config?: AxiosRequestConfig): Promise<operations.ClassifyDocumentResponse>;
    /**
     * containsPiiEntities - Analyzes input text for the presence of personally identifiable information (PII) and returns the labels of identified PII entity types such as name, address, bank account number, or phone number.
    **/
    containsPiiEntities(req: operations.ContainsPiiEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.ContainsPiiEntitiesResponse>;
    /**
     * createDocumentClassifier - Creates a new document classifier that you can use to categorize documents. To create a classifier, you provide a set of training documents that labeled with the categories that you want to use. After the classifier is trained you can use it to categorize a set of labeled documents into the categories. For more information, see <a>how-document-classification</a>.
    **/
    createDocumentClassifier(req: operations.CreateDocumentClassifierRequest, config?: AxiosRequestConfig): Promise<operations.CreateDocumentClassifierResponse>;
    /**
     * createEndpoint - Creates a model-specific endpoint for synchronous inference for a previously trained custom model
    **/
    createEndpoint(req: operations.CreateEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndpointResponse>;
    /**
     * createEntityRecognizer - Creates an entity recognizer using submitted files. After your <code>CreateEntityRecognizer</code> request is submitted, you can check job status using the API.
    **/
    createEntityRecognizer(req: operations.CreateEntityRecognizerRequest, config?: AxiosRequestConfig): Promise<operations.CreateEntityRecognizerResponse>;
    /**
     * deleteDocumentClassifier - <p>Deletes a previously created document classifier</p> <p>Only those classifiers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the classifier into a DELETING state, and it is then removed by a background job. Once removed, the classifier disappears from your account and is no longer available for use. </p>
    **/
    deleteDocumentClassifier(req: operations.DeleteDocumentClassifierRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDocumentClassifierResponse>;
    /**
     * deleteEndpoint - Deletes a model-specific endpoint for a previously-trained custom model. All endpoints must be deleted in order for the model to be deleted.
    **/
    deleteEndpoint(req: operations.DeleteEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointResponse>;
    /**
     * deleteEntityRecognizer - <p>Deletes an entity recognizer.</p> <p>Only those recognizers that are in terminated states (IN_ERROR, TRAINED) will be deleted. If an active inference job is using the model, a <code>ResourceInUseException</code> will be returned.</p> <p>This is an asynchronous action that puts the recognizer into a DELETING state, and it is then removed by a background job. Once removed, the recognizer disappears from your account and is no longer available for use. </p>
    **/
    deleteEntityRecognizer(req: operations.DeleteEntityRecognizerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEntityRecognizerResponse>;
    /**
     * describeDocumentClassificationJob - Gets the properties associated with a document classification job. Use this operation to get the status of a classification job.
    **/
    describeDocumentClassificationJob(req: operations.DescribeDocumentClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDocumentClassificationJobResponse>;
    /**
     * describeDocumentClassifier - Gets the properties associated with a document classifier.
    **/
    describeDocumentClassifier(req: operations.DescribeDocumentClassifierRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDocumentClassifierResponse>;
    /**
     * describeDominantLanguageDetectionJob - Gets the properties associated with a dominant language detection job. Use this operation to get the status of a detection job.
    **/
    describeDominantLanguageDetectionJob(req: operations.DescribeDominantLanguageDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDominantLanguageDetectionJobResponse>;
    /**
     * describeEndpoint - Gets the properties associated with a specific endpoint. Use this operation to get the status of an endpoint.
    **/
    describeEndpoint(req: operations.DescribeEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointResponse>;
    /**
     * describeEntitiesDetectionJob - Gets the properties associated with an entities detection job. Use this operation to get the status of a detection job.
    **/
    describeEntitiesDetectionJob(req: operations.DescribeEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntitiesDetectionJobResponse>;
    /**
     * describeEntityRecognizer - Provides details about an entity recognizer including status, S3 buckets containing training data, recognizer metadata, metrics, and so on.
    **/
    describeEntityRecognizer(req: operations.DescribeEntityRecognizerRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEntityRecognizerResponse>;
    /**
     * describeEventsDetectionJob - Gets the status and details of an events detection job.
    **/
    describeEventsDetectionJob(req: operations.DescribeEventsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventsDetectionJobResponse>;
    /**
     * describeKeyPhrasesDetectionJob - Gets the properties associated with a key phrases detection job. Use this operation to get the status of a detection job.
    **/
    describeKeyPhrasesDetectionJob(req: operations.DescribeKeyPhrasesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeKeyPhrasesDetectionJobResponse>;
    /**
     * describePiiEntitiesDetectionJob - Gets the properties associated with a PII entities detection job. For example, you can use this operation to get the job status.
    **/
    describePiiEntitiesDetectionJob(req: operations.DescribePiiEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribePiiEntitiesDetectionJobResponse>;
    /**
     * describeSentimentDetectionJob - Gets the properties associated with a sentiment detection job. Use this operation to get the status of a detection job.
    **/
    describeSentimentDetectionJob(req: operations.DescribeSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSentimentDetectionJobResponse>;
    /**
     * describeTopicsDetectionJob - Gets the properties associated with a topic detection job. Use this operation to get the status of a detection job.
    **/
    describeTopicsDetectionJob(req: operations.DescribeTopicsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTopicsDetectionJobResponse>;
    /**
     * detectDominantLanguage - Determines the dominant language of the input text. For a list of languages that Amazon Comprehend can detect, see <a href="https://docs.aws.amazon.com/comprehend/latest/dg/how-languages.html">Amazon Comprehend Supported Languages</a>.
    **/
    detectDominantLanguage(req: operations.DetectDominantLanguageRequest, config?: AxiosRequestConfig): Promise<operations.DetectDominantLanguageResponse>;
    /**
     * detectEntities - Inspects text for named entities, and returns information about them. For more information, about named entities, see <a>how-entities</a>.
    **/
    detectEntities(req: operations.DetectEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DetectEntitiesResponse>;
    /**
     * detectKeyPhrases - Detects the key noun phrases found in the text.
    **/
    detectKeyPhrases(req: operations.DetectKeyPhrasesRequest, config?: AxiosRequestConfig): Promise<operations.DetectKeyPhrasesResponse>;
    /**
     * detectPiiEntities - Inspects the input text for entities that contain personally identifiable information (PII) and returns information about them.
    **/
    detectPiiEntities(req: operations.DetectPiiEntitiesRequest, config?: AxiosRequestConfig): Promise<operations.DetectPiiEntitiesResponse>;
    /**
     * detectSentiment - Inspects text and returns an inference of the prevailing sentiment (<code>POSITIVE</code>, <code>NEUTRAL</code>, <code>MIXED</code>, or <code>NEGATIVE</code>).
    **/
    detectSentiment(req: operations.DetectSentimentRequest, config?: AxiosRequestConfig): Promise<operations.DetectSentimentResponse>;
    /**
     * detectSyntax - Inspects text for syntax and the part of speech of words in the document. For more information, <a>how-syntax</a>.
    **/
    detectSyntax(req: operations.DetectSyntaxRequest, config?: AxiosRequestConfig): Promise<operations.DetectSyntaxResponse>;
    /**
     * listDocumentClassificationJobs - Gets a list of the documentation classification jobs that you have submitted.
    **/
    listDocumentClassificationJobs(req: operations.ListDocumentClassificationJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentClassificationJobsResponse>;
    /**
     * listDocumentClassifiers - Gets a list of the document classifiers that you have created.
    **/
    listDocumentClassifiers(req: operations.ListDocumentClassifiersRequest, config?: AxiosRequestConfig): Promise<operations.ListDocumentClassifiersResponse>;
    /**
     * listDominantLanguageDetectionJobs - Gets a list of the dominant language detection jobs that you have submitted.
    **/
    listDominantLanguageDetectionJobs(req: operations.ListDominantLanguageDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListDominantLanguageDetectionJobsResponse>;
    /**
     * listEndpoints - Gets a list of all existing endpoints that you've created.
    **/
    listEndpoints(req: operations.ListEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListEndpointsResponse>;
    /**
     * listEntitiesDetectionJobs - Gets a list of the entity detection jobs that you have submitted.
    **/
    listEntitiesDetectionJobs(req: operations.ListEntitiesDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListEntitiesDetectionJobsResponse>;
    /**
     * listEntityRecognizers - <p>Gets a list of the properties of all entity recognizers that you created, including recognizers currently in training. Allows you to filter the list of recognizers based on criteria such as status and submission time. This call returns up to 500 entity recognizers in the list, with a default number of 100 recognizers in the list.</p> <p>The results of this list are not in any particular order. Please get the list and sort locally if needed.</p>
    **/
    listEntityRecognizers(req: operations.ListEntityRecognizersRequest, config?: AxiosRequestConfig): Promise<operations.ListEntityRecognizersResponse>;
    /**
     * listEventsDetectionJobs - Gets a list of the events detection jobs that you have submitted.
    **/
    listEventsDetectionJobs(req: operations.ListEventsDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListEventsDetectionJobsResponse>;
    /**
     * listKeyPhrasesDetectionJobs - Get a list of key phrase detection jobs that you have submitted.
    **/
    listKeyPhrasesDetectionJobs(req: operations.ListKeyPhrasesDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListKeyPhrasesDetectionJobsResponse>;
    /**
     * listPiiEntitiesDetectionJobs - Gets a list of the PII entity detection jobs that you have submitted.
    **/
    listPiiEntitiesDetectionJobs(req: operations.ListPiiEntitiesDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListPiiEntitiesDetectionJobsResponse>;
    /**
     * listSentimentDetectionJobs - Gets a list of sentiment detection jobs that you have submitted.
    **/
    listSentimentDetectionJobs(req: operations.ListSentimentDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListSentimentDetectionJobsResponse>;
    /**
     * listTagsForResource - Lists all tags associated with a given Amazon Comprehend resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTopicsDetectionJobs - Gets a list of the topic detection jobs that you have submitted.
    **/
    listTopicsDetectionJobs(req: operations.ListTopicsDetectionJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListTopicsDetectionJobsResponse>;
    /**
     * startDocumentClassificationJob - Starts an asynchronous document classification job. Use the operation to track the progress of the job.
    **/
    startDocumentClassificationJob(req: operations.StartDocumentClassificationJobRequest, config?: AxiosRequestConfig): Promise<operations.StartDocumentClassificationJobResponse>;
    /**
     * startDominantLanguageDetectionJob - Starts an asynchronous dominant language detection job for a collection of documents. Use the operation to track the status of a job.
    **/
    startDominantLanguageDetectionJob(req: operations.StartDominantLanguageDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartDominantLanguageDetectionJobResponse>;
    /**
     * startEntitiesDetectionJob - <p>Starts an asynchronous entity detection job for a collection of documents. Use the operation to track the status of a job.</p> <p>This API can be used for either standard entity detection or custom entity recognition. In order to be used for custom entity recognition, the optional <code>EntityRecognizerArn</code> must be used in order to provide access to the recognizer being used to detect the custom entity.</p>
    **/
    startEntitiesDetectionJob(req: operations.StartEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartEntitiesDetectionJobResponse>;
    /**
     * startEventsDetectionJob - Starts an asynchronous event detection job for a collection of documents.
    **/
    startEventsDetectionJob(req: operations.StartEventsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartEventsDetectionJobResponse>;
    /**
     * startKeyPhrasesDetectionJob - Starts an asynchronous key phrase detection job for a collection of documents. Use the operation to track the status of a job.
    **/
    startKeyPhrasesDetectionJob(req: operations.StartKeyPhrasesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartKeyPhrasesDetectionJobResponse>;
    /**
     * startPiiEntitiesDetectionJob - Starts an asynchronous PII entity detection job for a collection of documents.
    **/
    startPiiEntitiesDetectionJob(req: operations.StartPiiEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartPiiEntitiesDetectionJobResponse>;
    /**
     * startSentimentDetectionJob - Starts an asynchronous sentiment detection job for a collection of documents. use the operation to track the status of a job.
    **/
    startSentimentDetectionJob(req: operations.StartSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartSentimentDetectionJobResponse>;
    /**
     * startTopicsDetectionJob - Starts an asynchronous topic detection job. Use the <code>DescribeTopicDetectionJob</code> operation to track the status of a job.
    **/
    startTopicsDetectionJob(req: operations.StartTopicsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StartTopicsDetectionJobResponse>;
    /**
     * stopDominantLanguageDetectionJob - <p>Stops a dominant language detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
    **/
    stopDominantLanguageDetectionJob(req: operations.StopDominantLanguageDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopDominantLanguageDetectionJobResponse>;
    /**
     * stopEntitiesDetectionJob - <p>Stops an entities detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
    **/
    stopEntitiesDetectionJob(req: operations.StopEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopEntitiesDetectionJobResponse>;
    /**
     * stopEventsDetectionJob - Stops an events detection job in progress.
    **/
    stopEventsDetectionJob(req: operations.StopEventsDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopEventsDetectionJobResponse>;
    /**
     * stopKeyPhrasesDetectionJob - <p>Stops a key phrases detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
    **/
    stopKeyPhrasesDetectionJob(req: operations.StopKeyPhrasesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopKeyPhrasesDetectionJobResponse>;
    /**
     * stopPiiEntitiesDetectionJob - Stops a PII entities detection job in progress.
    **/
    stopPiiEntitiesDetectionJob(req: operations.StopPiiEntitiesDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopPiiEntitiesDetectionJobResponse>;
    /**
     * stopSentimentDetectionJob - <p>Stops a sentiment detection job in progress.</p> <p>If the job state is <code>IN_PROGRESS</code> the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the job completes before it can be stopped, it is put into the <code>COMPLETED</code> state; otherwise the job is be stopped and put into the <code>STOPPED</code> state.</p> <p>If the job is in the <code>COMPLETED</code> or <code>FAILED</code> state when you call the <code>StopDominantLanguageDetectionJob</code> operation, the operation returns a 400 Internal Request Exception. </p> <p>When a job is stopped, any documents already processed are written to the output location.</p>
    **/
    stopSentimentDetectionJob(req: operations.StopSentimentDetectionJobRequest, config?: AxiosRequestConfig): Promise<operations.StopSentimentDetectionJobResponse>;
    /**
     * stopTrainingDocumentClassifier - <p>Stops a document classifier training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and put into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body. </p>
    **/
    stopTrainingDocumentClassifier(req: operations.StopTrainingDocumentClassifierRequest, config?: AxiosRequestConfig): Promise<operations.StopTrainingDocumentClassifierResponse>;
    /**
     * stopTrainingEntityRecognizer - <p>Stops an entity recognizer training job while in progress.</p> <p>If the training job state is <code>TRAINING</code>, the job is marked for termination and put into the <code>STOP_REQUESTED</code> state. If the training job completes before it can be stopped, it is put into the <code>TRAINED</code>; otherwise the training job is stopped and putted into the <code>STOPPED</code> state and the service sends back an HTTP 200 response with an empty HTTP body.</p>
    **/
    stopTrainingEntityRecognizer(req: operations.StopTrainingEntityRecognizerRequest, config?: AxiosRequestConfig): Promise<operations.StopTrainingEntityRecognizerResponse>;
    /**
     * tagResource - Associates a specific tag with an Amazon Comprehend resource. A tag is a key-value pair that adds as a metadata to a resource used by Amazon Comprehend. For example, a tag with "Sales" as the key might be added to a resource to indicate its use by the sales department.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes a specific tag associated with an Amazon Comprehend resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateEndpoint - Updates information about the specified endpoint.
    **/
    updateEndpoint(req: operations.UpdateEndpointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateEndpointResponse>;
}
export {};
