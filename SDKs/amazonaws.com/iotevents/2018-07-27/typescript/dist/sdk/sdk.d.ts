import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://iotevents.{region}.amazonaws.com", "https://iotevents.{region}.amazonaws.com", "http://iotevents.{region}.amazonaws.com.cn", "https://iotevents.{region}.amazonaws.com.cn"];
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
     * createAlarmModel - Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.
    **/
    createAlarmModel(req: operations.CreateAlarmModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateAlarmModelResponse>;
    /**
     * createDetectorModel - Creates a detector model.
    **/
    createDetectorModel(req: operations.CreateDetectorModelRequest, config?: AxiosRequestConfig): Promise<operations.CreateDetectorModelResponse>;
    /**
     * createInput - Creates an input.
    **/
    createInput(req: operations.CreateInputRequest, config?: AxiosRequestConfig): Promise<operations.CreateInputResponse>;
    /**
     * deleteAlarmModel - Deletes an alarm model. Any alarm instances that were created based on this alarm model are also deleted. This action can't be undone.
    **/
    deleteAlarmModel(req: operations.DeleteAlarmModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteAlarmModelResponse>;
    /**
     * deleteDetectorModel - Deletes a detector model. Any active instances of the detector model are also deleted.
    **/
    deleteDetectorModel(req: operations.DeleteDetectorModelRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDetectorModelResponse>;
    /**
     * deleteInput - Deletes an input.
    **/
    deleteInput(req: operations.DeleteInputRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInputResponse>;
    /**
     * describeAlarmModel - Retrieves information about an alarm model. If you don't specify a value for the <code>alarmModelVersion</code> parameter, the latest version is returned.
    **/
    describeAlarmModel(req: operations.DescribeAlarmModelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAlarmModelResponse>;
    /**
     * describeDetectorModel - Describes a detector model. If the <code>version</code> parameter is not specified, information about the latest version is returned.
    **/
    describeDetectorModel(req: operations.DescribeDetectorModelRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDetectorModelResponse>;
    /**
     * describeDetectorModelAnalysis - <p>Retrieves runtime information about a detector model analysis.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
    **/
    describeDetectorModelAnalysis(req: operations.DescribeDetectorModelAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.DescribeDetectorModelAnalysisResponse>;
    /**
     * describeInput - Describes an input.
    **/
    describeInput(req: operations.DescribeInputRequest, config?: AxiosRequestConfig): Promise<operations.DescribeInputResponse>;
    /**
     * describeLoggingOptions - Retrieves the current settings of the AWS IoT Events logging options.
    **/
    describeLoggingOptions(req: operations.DescribeLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeLoggingOptionsResponse>;
    /**
     * getDetectorModelAnalysisResults - <p>Retrieves one or more analysis results of the detector model.</p> <note> <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p> </note>
    **/
    getDetectorModelAnalysisResults(req: operations.GetDetectorModelAnalysisResultsRequest, config?: AxiosRequestConfig): Promise<operations.GetDetectorModelAnalysisResultsResponse>;
    /**
     * listAlarmModelVersions - Lists all the versions of an alarm model. The operation returns only the metadata associated with each alarm model version.
    **/
    listAlarmModelVersions(req: operations.ListAlarmModelVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlarmModelVersionsResponse>;
    /**
     * listAlarmModels - Lists the alarm models that you created. The operation returns only the metadata associated with each alarm model.
    **/
    listAlarmModels(req: operations.ListAlarmModelsRequest, config?: AxiosRequestConfig): Promise<operations.ListAlarmModelsResponse>;
    /**
     * listDetectorModelVersions - Lists all the versions of a detector model. Only the metadata associated with each detector model version is returned.
    **/
    listDetectorModelVersions(req: operations.ListDetectorModelVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDetectorModelVersionsResponse>;
    /**
     * listDetectorModels - Lists the detector models you have created. Only the metadata associated with each detector model is returned.
    **/
    listDetectorModels(req: operations.ListDetectorModelsRequest, config?: AxiosRequestConfig): Promise<operations.ListDetectorModelsResponse>;
    /**
     * listInputRoutings -  Lists one or more input routings.
    **/
    listInputRoutings(req: operations.ListInputRoutingsRequest, config?: AxiosRequestConfig): Promise<operations.ListInputRoutingsResponse>;
    /**
     * listInputs - Lists the inputs you have created.
    **/
    listInputs(req: operations.ListInputsRequest, config?: AxiosRequestConfig): Promise<operations.ListInputsResponse>;
    /**
     * listTagsForResource - Lists the tags (metadata) you have assigned to the resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putLoggingOptions - <p>Sets or updates the AWS IoT Events logging options.</p> <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one minute for the change to take effect. If you change the policy attached to the role you specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it takes up to five minutes for that change to take effect.</p>
    **/
    putLoggingOptions(req: operations.PutLoggingOptionsRequest, config?: AxiosRequestConfig): Promise<operations.PutLoggingOptionsResponse>;
    /**
     * startDetectorModelAnalysis - Performs an analysis of your detector model. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a> in the <i>AWS IoT Events Developer Guide</i>.
    **/
    startDetectorModelAnalysis(req: operations.StartDetectorModelAnalysisRequest, config?: AxiosRequestConfig): Promise<operations.StartDetectorModelAnalysisResponse>;
    /**
     * tagResource - Adds to or modifies the tags of the given resource. Tags are metadata that can be used to manage a resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes the given tags (metadata) from the resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateAlarmModel - Updates an alarm model. Any alarms that were created based on the previous version are deleted and then created again as new data arrives.
    **/
    updateAlarmModel(req: operations.UpdateAlarmModelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateAlarmModelResponse>;
    /**
     * updateDetectorModel - Updates a detector model. Detectors (instances) spawned by the previous version are deleted and then re-created as new inputs arrive.
    **/
    updateDetectorModel(req: operations.UpdateDetectorModelRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDetectorModelResponse>;
    /**
     * updateInput - Updates an input.
    **/
    updateInput(req: operations.UpdateInputRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInputResponse>;
}
export {};
