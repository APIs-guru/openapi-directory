import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://iotanalytics.{region}.amazonaws.com", "https://iotanalytics.{region}.amazonaws.com", "http://iotanalytics.{region}.amazonaws.com.cn", "https://iotanalytics.{region}.amazonaws.com.cn"];
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
     * batchPutMessage - Sends messages to a channel.
    **/
    batchPutMessage(req: operations.BatchPutMessageRequest, config?: AxiosRequestConfig): Promise<operations.BatchPutMessageResponse>;
    /**
     * cancelPipelineReprocessing - Cancels the reprocessing of data through the pipeline.
    **/
    cancelPipelineReprocessing(req: operations.CancelPipelineReprocessingRequest, config?: AxiosRequestConfig): Promise<operations.CancelPipelineReprocessingResponse>;
    /**
     * createChannel - Used to create a channel. A channel collects data from an MQTT topic and archives the raw, unprocessed messages before publishing the data to a pipeline.
    **/
    createChannel(req: operations.CreateChannelRequest, config?: AxiosRequestConfig): Promise<operations.CreateChannelResponse>;
    /**
     * createDataset - Used to create a dataset. A dataset stores data retrieved from a data store by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application). This operation creates the skeleton of a dataset. The dataset can be populated manually by calling <code>CreateDatasetContent</code> or automatically according to a trigger you specify.
    **/
    createDataset(req: operations.CreateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetResponse>;
    /**
     * createDatasetContent - Creates the content of a dataset by applying a <code>queryAction</code> (a SQL query) or a <code>containerAction</code> (executing a containerized application).
    **/
    createDatasetContent(req: operations.CreateDatasetContentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatasetContentResponse>;
    /**
     * createDatastore - Creates a data store, which is a repository for messages.
    **/
    createDatastore(req: operations.CreateDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatastoreResponse>;
    /**
     * createPipeline - Creates a pipeline. A pipeline consumes messages from a channel and allows you to process the messages before storing them in a data store. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
    **/
    createPipeline(req: operations.CreatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.CreatePipelineResponse>;
    /**
     * deleteChannel - Deletes the specified channel.
    **/
    deleteChannel(req: operations.DeleteChannelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteChannelResponse>;
    /**
     * deleteDataset - <p>Deletes the specified dataset.</p> <p>You do not have to delete the content of the dataset before you perform this operation.</p>
    **/
    deleteDataset(req: operations.DeleteDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetResponse>;
    /**
     * deleteDatasetContent - Deletes the content of the specified dataset.
    **/
    deleteDatasetContent(req: operations.DeleteDatasetContentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatasetContentResponse>;
    /**
     * deleteDatastore - Deletes the specified data store.
    **/
    deleteDatastore(req: operations.DeleteDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatastoreResponse>;
    /**
     * deletePipeline - Deletes the specified pipeline.
    **/
    deletePipeline(req: operations.DeletePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeletePipelineResponse>;
    /**
     * describeChannel - Retrieves information about a channel.
    **/
    describeChannel(req: operations.DescribeChannelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeChannelResponse>;
    /**
     * describeDataset - Retrieves information about a dataset.
    **/
    describeDataset(req: operations.DescribeDatasetRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatasetResponse>;
    /**
     * describeDatastore - Retrieves information about a data store.
    **/
    describeDatastore(req: operations.DescribeDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDatastoreResponse>;
    /**
     * describeLoggingOptions - Retrieves the current settings of the IoT Analytics logging options.
    **/
    describeLoggingOptions(req: operations.DescribeLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoggingOptionsResponse>;
    /**
     * describePipeline - Retrieves information about a pipeline.
    **/
    describePipeline(req: operations.DescribePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DescribePipelineResponse>;
    /**
     * getDatasetContent - Retrieves the contents of a dataset as presigned URIs.
    **/
    getDatasetContent(req: operations.GetDatasetContentRequest, config?: AxiosRequestConfig): Promise<operations.GetDatasetContentResponse>;
    /**
     * listChannels - Retrieves a list of channels.
    **/
    listChannels(req: operations.ListChannelsRequest, config?: AxiosRequestConfig): Promise<operations.ListChannelsResponse>;
    /**
     * listDatasetContents - Lists information about dataset contents that have been created.
    **/
    listDatasetContents(req: operations.ListDatasetContentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetContentsResponse>;
    /**
     * listDatasets - Retrieves information about datasets.
    **/
    listDatasets(req: operations.ListDatasetsRequest, config?: AxiosRequestConfig): Promise<operations.ListDatasetsResponse>;
    /**
     * listDatastores - Retrieves a list of data stores.
    **/
    listDatastores(req: operations.ListDatastoresRequest, config?: AxiosRequestConfig): Promise<operations.ListDatastoresResponse>;
    /**
     * listPipelines - Retrieves a list of pipelines.
    **/
    listPipelines(req: operations.ListPipelinesRequest, config?: AxiosRequestConfig): Promise<operations.ListPipelinesResponse>;
    /**
     * listTagsForResource - Lists the tags (metadata) that you have assigned to the resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putLoggingOptions - <p>Sets or updates the IoT Analytics logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. Also, if you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect. </p>
    **/
    putLoggingOptions(req: operations.PutLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutLoggingOptionsResponse>;
    /**
     * runPipelineActivity - Simulates the results of running a pipeline activity on a message payload.
    **/
    runPipelineActivity(req: operations.RunPipelineActivityRequest, config?: AxiosRequestConfig): Promise<operations.RunPipelineActivityResponse>;
    /**
     * sampleChannelData - Retrieves a sample of messages from the specified channel ingested during the specified timeframe. Up to 10 messages can be retrieved.
    **/
    sampleChannelData(req: operations.SampleChannelDataRequest, config?: AxiosRequestConfig): Promise<operations.SampleChannelDataResponse>;
    /**
     * startPipelineReprocessing - Starts the reprocessing of raw message data through the pipeline.
    **/
    startPipelineReprocessing(req: operations.StartPipelineReprocessingRequest, config?: AxiosRequestConfig): Promise<operations.StartPipelineReprocessingResponse>;
    /**
     * tagResource - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the given tags (metadata) from the resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateChannel - Used to update the settings of a channel.
    **/
    updateChannel(req: operations.UpdateChannelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateChannelResponse>;
    /**
     * updateDataset - Updates the settings of a dataset.
    **/
    updateDataset(req: operations.UpdateDatasetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatasetResponse>;
    /**
     * updateDatastore - Used to update the settings of a data store.
    **/
    updateDatastore(req: operations.UpdateDatastoreRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatastoreResponse>;
    /**
     * updatePipeline - Updates the settings of a pipeline. You must specify both a <code>channel</code> and a <code>datastore</code> activity and, optionally, as many as 23 additional activities in the <code>pipelineActivities</code> array.
    **/
    updatePipeline(req: operations.UpdatePipelineRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePipelineResponse>;
}
export {};
