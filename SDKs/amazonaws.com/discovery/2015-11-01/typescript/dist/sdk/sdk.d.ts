import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://discovery.{region}.amazonaws.com", "https://discovery.{region}.amazonaws.com", "http://discovery.{region}.amazonaws.com.cn", "https://discovery.{region}.amazonaws.com.cn"];
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
     * associateConfigurationItemsToApplication - Associates one or more configuration items with an application.
    **/
    associateConfigurationItemsToApplication(req: operations.AssociateConfigurationItemsToApplicationRequest, config?: AxiosRequestConfig): Promise<operations.AssociateConfigurationItemsToApplicationResponse>;
    /**
     * batchDeleteImportData - <p>Deletes one or more import tasks, each identified by their import ID. Each import task has a number of records that can identify servers or applications. </p> <p>AWS Application Discovery Service has built-in matching logic that will identify when discovered servers match existing entries that you've previously discovered, the information for the already-existing discovered server is updated. When you delete an import task that contains records that were used to match, the information in those matched records that comes from the deleted records will also be deleted.</p>
    **/
    batchDeleteImportData(req: operations.BatchDeleteImportDataRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteImportDataResponse>;
    /**
     * createApplication - Creates an application with the given name and description.
    **/
    createApplication(req: operations.CreateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.CreateApplicationResponse>;
    /**
     * createTags - Creates one or more tags for configuration items. Tags are metadata that help you categorize IT assets. This API accepts a list of multiple configuration items.
    **/
    createTags(req: operations.CreateTagsRequest, config?: AxiosRequestConfig): Promise<operations.CreateTagsResponse>;
    /**
     * deleteApplications - Deletes a list of applications and their associations with configuration items.
    **/
    deleteApplications(req: operations.DeleteApplicationsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteApplicationsResponse>;
    /**
     * deleteTags - Deletes the association between configuration items and one or more tags. This API accepts a list of multiple configuration items.
    **/
    deleteTags(req: operations.DeleteTagsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTagsResponse>;
    /**
     * describeAgents - Lists agents or connectors as specified by ID or other filters. All agents/connectors associated with your user account can be listed if you call <code>DescribeAgents</code> as is without passing any parameters.
    **/
    describeAgents(req: operations.DescribeAgentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAgentsResponse>;
    /**
     * describeConfigurations - <p>Retrieves attributes for a list of configuration item IDs.</p> <note> <p>All of the supplied IDs must be for the same asset type from one of the following:</p> <ul> <li> <p>server</p> </li> <li> <p>application</p> </li> <li> <p>process</p> </li> <li> <p>connection</p> </li> </ul> <p>Output fields are specific to the asset type specified. For example, the output for a <i>server</i> configuration item includes a list of attributes about the server, such as host name, operating system, number of network cards, etc.</p> <p>For a complete list of outputs for each asset type, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-api-queries.html#DescribeConfigurations">Using the DescribeConfigurations Action</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
    **/
    describeConfigurations(req: operations.DescribeConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConfigurationsResponse>;
    /**
     * describeContinuousExports - Lists exports as specified by ID. All continuous exports associated with your user account can be listed if you call <code>DescribeContinuousExports</code> as is without passing any parameters.
    **/
    describeContinuousExports(req: operations.DescribeContinuousExportsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeContinuousExportsResponse>;
    /**
     * describeExportConfigurations -  <code>DescribeExportConfigurations</code> is deprecated. Use <a href="https://docs.aws.amazon.com/application-discovery/latest/APIReference/API_DescribeExportTasks.html">DescribeImportTasks</a>, instead.
    **/
    describeExportConfigurations(req: operations.DescribeExportConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExportConfigurationsResponse>;
    /**
     * describeExportTasks - Retrieve status of one or more export tasks. You can retrieve the status of up to 100 export tasks.
    **/
    describeExportTasks(req: operations.DescribeExportTasksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeExportTasksResponse>;
    /**
     * describeImportTasks - Returns an array of import tasks for your account, including status information, times, IDs, the Amazon S3 Object URL for the import file, and more.
    **/
    describeImportTasks(req: operations.DescribeImportTasksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImportTasksResponse>;
    /**
     * describeTags - <p>Retrieves a list of configuration items that have tags as specified by the key-value pairs, name and value, passed to the optional parameter <code>filters</code>.</p> <p>There are three valid tag filter names:</p> <ul> <li> <p>tagKey</p> </li> <li> <p>tagValue</p> </li> <li> <p>configurationId</p> </li> </ul> <p>Also, all configuration items associated with your user account that have tags can be listed if you call <code>DescribeTags</code> as is without passing any parameters.</p>
    **/
    describeTags(req: operations.DescribeTagsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTagsResponse>;
    /**
     * disassociateConfigurationItemsFromApplication - Disassociates one or more configuration items from an application.
    **/
    disassociateConfigurationItemsFromApplication(req: operations.DisassociateConfigurationItemsFromApplicationRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateConfigurationItemsFromApplicationResponse>;
    /**
     * exportConfigurations - <p>Deprecated. Use <code>StartExportTask</code> instead.</p> <p>Exports all discovered configuration data to an Amazon S3 bucket or an application that enables you to view and evaluate the data. Data includes tags and tag associations, processes, connections, servers, and system performance. This API returns an export ID that you can query using the <i>DescribeExportConfigurations</i> API. The system imposes a limit of two configuration exports in six hours.</p>
    **/
    exportConfigurations(req: operations.ExportConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ExportConfigurationsResponse>;
    /**
     * getDiscoverySummary - <p>Retrieves a short summary of discovered assets.</p> <p>This API operation takes no request parameters and is called as is at the command prompt as shown in the example.</p>
    **/
    getDiscoverySummary(req: operations.GetDiscoverySummaryRequest, config?: AxiosRequestConfig): Promise<operations.GetDiscoverySummaryResponse>;
    /**
     * listConfigurations - Retrieves a list of configuration items as specified by the value passed to the required parameter <code>configurationType</code>. Optional filtering may be applied to refine search results.
    **/
    listConfigurations(req: operations.ListConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListConfigurationsResponse>;
    /**
     * listServerNeighbors - Retrieves a list of servers that are one network hop away from a specified server.
    **/
    listServerNeighbors(req: operations.ListServerNeighborsRequest, config?: AxiosRequestConfig): Promise<operations.ListServerNeighborsResponse>;
    /**
     * startContinuousExport - Start the continuous flow of agent's discovered data into Amazon Athena.
    **/
    startContinuousExport(req: operations.StartContinuousExportRequest, config?: AxiosRequestConfig): Promise<operations.StartContinuousExportResponse>;
    /**
     * startDataCollectionByAgentIds - Instructs the specified agents or connectors to start collecting data.
    **/
    startDataCollectionByAgentIds(req: operations.StartDataCollectionByAgentIdsRequest, config?: AxiosRequestConfig): Promise<operations.StartDataCollectionByAgentIdsResponse>;
    /**
     * startExportTask - <p> Begins the export of discovered data to an S3 bucket.</p> <p> If you specify <code>agentIds</code> in a filter, the task exports up to 72 hours of detailed data collected by the identified Application Discovery Agent, including network, process, and performance details. A time range for exported agent data may be set by using <code>startTime</code> and <code>endTime</code>. Export of detailed agent data is limited to five concurrently running exports. </p> <p> If you do not include an <code>agentIds</code> filter, summary data is exported that includes both AWS Agentless Discovery Connector data and summary data from AWS Discovery Agents. Export of summary data is limited to two exports per day. </p>
    **/
    startExportTask(req: operations.StartExportTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartExportTaskResponse>;
    /**
     * startImportTask - <p>Starts an import task, which allows you to import details of your on-premises environment directly into AWS Migration Hub without having to use the Application Discovery Service (ADS) tools such as the Discovery Connector or Discovery Agent. This gives you the option to perform migration assessment and planning directly from your imported data, including the ability to group your devices as applications and track their migration status.</p> <p>To start an import request, do this:</p> <ol> <li> <p>Download the specially formatted comma separated value (CSV) import template, which you can find here: <a href="https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv">https://s3-us-west-2.amazonaws.com/templates-7cffcf56-bd96-4b1c-b45b-a5b42f282e46/import_template.csv</a>.</p> </li> <li> <p>Fill out the template with your server and application data.</p> </li> <li> <p>Upload your import file to an Amazon S3 bucket, and make a note of it's Object URL. Your import file must be in the CSV format.</p> </li> <li> <p>Use the console or the <code>StartImportTask</code> command with the AWS CLI or one of the AWS SDKs to import the records from your file.</p> </li> </ol> <p>For more information, including step-by-step procedures, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/discovery-import.html">Migration Hub Import</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> <note> <p>There are limits to the number of import tasks you can create (and delete) in an AWS account. For more information, see <a href="https://docs.aws.amazon.com/application-discovery/latest/userguide/ads_service_limits.html">AWS Application Discovery Service Limits</a> in the <i>AWS Application Discovery Service User Guide</i>.</p> </note>
    **/
    startImportTask(req: operations.StartImportTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartImportTaskResponse>;
    /**
     * stopContinuousExport - Stop the continuous flow of agent's discovered data into Amazon Athena.
    **/
    stopContinuousExport(req: operations.StopContinuousExportRequest, config?: AxiosRequestConfig): Promise<operations.StopContinuousExportResponse>;
    /**
     * stopDataCollectionByAgentIds - Instructs the specified agents or connectors to stop collecting data.
    **/
    stopDataCollectionByAgentIds(req: operations.StopDataCollectionByAgentIdsRequest, config?: AxiosRequestConfig): Promise<operations.StopDataCollectionByAgentIdsResponse>;
    /**
     * updateApplication - Updates metadata about an application.
    **/
    updateApplication(req: operations.UpdateApplicationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateApplicationResponse>;
}
export {};
