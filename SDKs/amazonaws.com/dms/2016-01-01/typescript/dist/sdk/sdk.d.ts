import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://dms.{region}.amazonaws.com", "https://dms.{region}.amazonaws.com", "http://dms.{region}.amazonaws.com.cn", "https://dms.{region}.amazonaws.com.cn"];
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
     * addTagsToResource - Adds metadata tags to an DMS resource, including replication instance, endpoint, security group, and migration task. These tags can also be used with cost allocation reporting to track cost associated with DMS resources, or used in a Condition statement in an IAM policy for DMS. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
    **/
    addTagsToResource(req: operations.AddTagsToResourceRequest, config?: AxiosRequestConfig): Promise<operations.AddTagsToResourceResponse>;
    /**
     * applyPendingMaintenanceAction - Applies a pending maintenance action to a resource (for example, to a replication instance).
    **/
    applyPendingMaintenanceAction(req: operations.ApplyPendingMaintenanceActionRequest, config?: AxiosRequestConfig): Promise<operations.ApplyPendingMaintenanceActionResponse>;
    /**
     * cancelReplicationTaskAssessmentRun - <p>Cancels a single premigration assessment run.</p> <p>This operation prevents any individual assessments from running if they haven't started running. It also attempts to cancel any individual assessments that are currently running.</p>
    **/
    cancelReplicationTaskAssessmentRun(req: operations.CancelReplicationTaskAssessmentRunRequest, config?: AxiosRequestConfig): Promise<operations.CancelReplicationTaskAssessmentRunResponse>;
    /**
     * createEndpoint - <p>Creates an endpoint using the provided settings.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>CreateEndpoint</code> API call. Specifying <code>DatabaseName</code> when you create a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
    **/
    createEndpoint(req: operations.CreateEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateEndpointResponse>;
    /**
     * createEventSubscription - <p> Creates an DMS event notification subscription. </p> <p>You can specify the type of source (<code>SourceType</code>) you want to be notified of, provide a list of DMS source IDs (<code>SourceIds</code>) that triggers the events, and provide a list of event categories (<code>EventCategories</code>) for events you want to be notified of. If you specify both the <code>SourceType</code> and <code>SourceIds</code>, such as <code>SourceType = replication-instance</code> and <code>SourceIdentifier = my-replinstance</code>, you will be notified of all the replication instance events for the specified source. If you specify a <code>SourceType</code> but don't specify a <code>SourceIdentifier</code>, you receive notice of the events for that source type for all your DMS sources. If you don't specify either <code>SourceType</code> nor <code>SourceIdentifier</code>, you will be notified of events generated from all DMS sources belonging to your customer account.</p> <p>For more information about DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i> </p>
    **/
    createEventSubscription(req: operations.CreateEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.CreateEventSubscriptionResponse>;
    /**
     * createReplicationInstance - <p>Creates the replication instance using the specified parameters.</p> <p>DMS requires that your account have certain roles with appropriate permissions before you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM Permissions Needed to Use DMS</a>.</p>
    **/
    createReplicationInstance(req: operations.CreateReplicationInstanceRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationInstanceResponse>;
    /**
     * createReplicationSubnetGroup - <p>Creates a replication subnet group given a list of the subnet IDs in a VPC.</p> <p>The VPC needs to have at least one subnet in at least two availability zones in the Amazon Web Services Region, otherwise the service will throw a <code>ReplicationSubnetGroupDoesNotCoverEnoughAZs</code> exception.</p>
    **/
    createReplicationSubnetGroup(req: operations.CreateReplicationSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationSubnetGroupResponse>;
    /**
     * createReplicationTask - Creates a replication task using the specified parameters.
    **/
    createReplicationTask(req: operations.CreateReplicationTaskRequest, config?: AxiosRequestConfig): Promise<operations.CreateReplicationTaskResponse>;
    /**
     * deleteCertificate - Deletes the specified certificate.
    **/
    deleteCertificate(req: operations.DeleteCertificateRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCertificateResponse>;
    /**
     * deleteConnection - Deletes the connection between a replication instance and an endpoint.
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * deleteEndpoint - <p>Deletes the specified endpoint.</p> <note> <p>All tasks associated with the endpoint must be deleted before you can delete the endpoint.</p> </note> <p/>
    **/
    deleteEndpoint(req: operations.DeleteEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEndpointResponse>;
    /**
     * deleteEventSubscription -  Deletes an DMS event subscription.
    **/
    deleteEventSubscription(req: operations.DeleteEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteEventSubscriptionResponse>;
    /**
     * deleteReplicationInstance - <p>Deletes the specified replication instance.</p> <note> <p>You must delete any migration tasks that are associated with the replication instance before you can delete it.</p> </note> <p/>
    **/
    deleteReplicationInstance(req: operations.DeleteReplicationInstanceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationInstanceResponse>;
    /**
     * deleteReplicationSubnetGroup - Deletes a subnet group.
    **/
    deleteReplicationSubnetGroup(req: operations.DeleteReplicationSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationSubnetGroupResponse>;
    /**
     * deleteReplicationTask - Deletes the specified replication task.
    **/
    deleteReplicationTask(req: operations.DeleteReplicationTaskRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationTaskResponse>;
    /**
     * deleteReplicationTaskAssessmentRun - <p>Deletes the record of a single premigration assessment run.</p> <p>This operation removes all metadata that DMS maintains about this assessment run. However, the operation leaves untouched all information about this assessment run that is stored in your Amazon S3 bucket.</p>
    **/
    deleteReplicationTaskAssessmentRun(req: operations.DeleteReplicationTaskAssessmentRunRequest, config?: AxiosRequestConfig): Promise<operations.DeleteReplicationTaskAssessmentRunResponse>;
    /**
     * describeAccountAttributes - <p>Lists all of the DMS attributes for a customer account. These attributes include DMS quotas for the account and a unique account identifier in a particular DMS region. DMS quotas include a list of resource quotas supported by the account, such as the number of replication instances allowed. The description for each resource quota, includes the quota name, current usage toward that quota, and the quota's maximum value. DMS uses the unique account identifier to name each artifact used by DMS in the given region.</p> <p>This command does not take any parameters.</p>
    **/
    describeAccountAttributes(req: operations.DescribeAccountAttributesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeAccountAttributesResponse>;
    /**
     * describeApplicableIndividualAssessments - <p>Provides a list of individual assessments that you can specify for a new premigration assessment run, given one or more parameters.</p> <p>If you specify an existing migration task, this operation provides the default individual assessments you can specify for that task. Otherwise, the specified parameters model elements of a possible migration task on which to base a premigration assessment run.</p> <p>To use these migration task modeling parameters, you must specify an existing replication instance, a source database engine, a target database engine, and a migration type. This combination of parameters potentially limits the default individual assessments available for an assessment run created for a corresponding migration task.</p> <p>If you specify no parameters, this operation provides a list of all possible individual assessments that you can specify for an assessment run. If you specify any one of the task modeling parameters, you must specify all of them or the operation cannot provide a list of individual assessments. The only parameter that you can specify alone is for an existing migration task. The specified task definition then determines the default list of individual assessments that you can specify in an assessment run for the task.</p>
    **/
    describeApplicableIndividualAssessments(req: operations.DescribeApplicableIndividualAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeApplicableIndividualAssessmentsResponse>;
    /**
     * describeCertificates - Provides a description of the certificate.
    **/
    describeCertificates(req: operations.DescribeCertificatesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeCertificatesResponse>;
    /**
     * describeConnections - Describes the status of the connections that have been made between the replication instance and an endpoint. Connections are created when you test an endpoint.
    **/
    describeConnections(req: operations.DescribeConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeConnectionsResponse>;
    /**
     * describeEndpointSettings - Returns information about the possible endpoint settings available when you create an endpoint for a specific database engine.
    **/
    describeEndpointSettings(req: operations.DescribeEndpointSettingsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointSettingsResponse>;
    /**
     * describeEndpointTypes - Returns information about the type of endpoints available.
    **/
    describeEndpointTypes(req: operations.DescribeEndpointTypesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointTypesResponse>;
    /**
     * describeEndpoints - Returns information about the endpoints for your account in the current region.
    **/
    describeEndpoints(req: operations.DescribeEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEndpointsResponse>;
    /**
     * describeEventCategories - Lists categories for all event source types, or, if specified, for a specified source type. You can see a list of the event categories and source types in <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i>
    **/
    describeEventCategories(req: operations.DescribeEventCategoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventCategoriesResponse>;
    /**
     * describeEventSubscriptions - <p>Lists all the event subscriptions for a customer account. The description of a subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>. </p> <p>If you specify <code>SubscriptionName</code>, this action lists the description for that subscription.</p>
    **/
    describeEventSubscriptions(req: operations.DescribeEventSubscriptionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventSubscriptionsResponse>;
    /**
     * describeEvents -  Lists events for a given source identifier and source type. You can also specify a start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and Notifications</a> in the <i>Database Migration Service User Guide.</i>
    **/
    describeEvents(req: operations.DescribeEventsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeEventsResponse>;
    /**
     * describeOrderableReplicationInstances - Returns information about the replication instance types that can be created in the specified region.
    **/
    describeOrderableReplicationInstances(req: operations.DescribeOrderableReplicationInstancesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeOrderableReplicationInstancesResponse>;
    /**
     * describePendingMaintenanceActions - For internal use only
    **/
    describePendingMaintenanceActions(req: operations.DescribePendingMaintenanceActionsRequest, config?: AxiosRequestConfig): Promise<operations.DescribePendingMaintenanceActionsResponse>;
    /**
     * describeRefreshSchemasStatus - Returns the status of the RefreshSchemas operation.
    **/
    describeRefreshSchemasStatus(req: operations.DescribeRefreshSchemasStatusRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRefreshSchemasStatusResponse>;
    /**
     * describeReplicationInstanceTaskLogs - Returns information about the task logs for the specified task.
    **/
    describeReplicationInstanceTaskLogs(req: operations.DescribeReplicationInstanceTaskLogsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationInstanceTaskLogsResponse>;
    /**
     * describeReplicationInstances - Returns information about replication instances for your account in the current region.
    **/
    describeReplicationInstances(req: operations.DescribeReplicationInstancesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationInstancesResponse>;
    /**
     * describeReplicationSubnetGroups - Returns information about the replication subnet groups.
    **/
    describeReplicationSubnetGroups(req: operations.DescribeReplicationSubnetGroupsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationSubnetGroupsResponse>;
    /**
     * describeReplicationTaskAssessmentResults - <p>Returns the task assessment results from the Amazon S3 bucket that DMS creates in your Amazon Web Services account. This action always returns the latest results.</p> <p>For more information about DMS task assessments, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a> in the <a href="https://docs.aws.amazon.com/https:/docs.aws.amazon.com/dms/latest/userguide/Welcome.html"> Database Migration Service User Guide</a>.</p>
    **/
    describeReplicationTaskAssessmentResults(req: operations.DescribeReplicationTaskAssessmentResultsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationTaskAssessmentResultsResponse>;
    /**
     * describeReplicationTaskAssessmentRuns - <p>Returns a paginated list of premigration assessment runs based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, replication instances, and assessment run status values.</p> <note> <p>This operation doesn't return information about individual assessments. For this information, see the <code>DescribeReplicationTaskIndividualAssessments</code> operation. </p> </note>
    **/
    describeReplicationTaskAssessmentRuns(req: operations.DescribeReplicationTaskAssessmentRunsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationTaskAssessmentRunsResponse>;
    /**
     * describeReplicationTaskIndividualAssessments - <p>Returns a paginated list of individual assessments based on filter settings.</p> <p>These filter settings can specify a combination of premigration assessment runs, migration tasks, and assessment status values.</p>
    **/
    describeReplicationTaskIndividualAssessments(req: operations.DescribeReplicationTaskIndividualAssessmentsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationTaskIndividualAssessmentsResponse>;
    /**
     * describeReplicationTasks - Returns information about replication tasks for your account in the current region.
    **/
    describeReplicationTasks(req: operations.DescribeReplicationTasksRequest, config?: AxiosRequestConfig): Promise<operations.DescribeReplicationTasksResponse>;
    /**
     * describeSchemas - <p>Returns information about the schema for the specified endpoint.</p> <p/>
    **/
    describeSchemas(req: operations.DescribeSchemasRequest, config?: AxiosRequestConfig): Promise<operations.DescribeSchemasResponse>;
    /**
     * describeTableStatistics - <p>Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.</p> <p>Note that the "last updated" column the DMS console only indicates the time that DMS last updated the table statistics record for a table. It does not indicate the time of the last update to the table.</p>
    **/
    describeTableStatistics(req: operations.DescribeTableStatisticsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeTableStatisticsResponse>;
    /**
     * importCertificate - Uploads the specified certificate.
    **/
    importCertificate(req: operations.ImportCertificateRequest, config?: AxiosRequestConfig): Promise<operations.ImportCertificateResponse>;
    /**
     * listTagsForResource - Lists all metadata tags attached to an DMS resource, including replication instance, endpoint, security group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * modifyEndpoint - <p>Modifies the specified endpoint.</p> <note> <p>For a MySQL source or target endpoint, don't explicitly specify the database using the <code>DatabaseName</code> request parameter on the <code>ModifyEndpoint</code> API call. Specifying <code>DatabaseName</code> when you modify a MySQL endpoint replicates all the task tables to this single database. For MySQL endpoints, you specify the database only when you specify the schema in the table-mapping rules of the DMS task.</p> </note>
    **/
    modifyEndpoint(req: operations.ModifyEndpointRequest, config?: AxiosRequestConfig): Promise<operations.ModifyEndpointResponse>;
    /**
     * modifyEventSubscription - Modifies an existing DMS event notification subscription.
    **/
    modifyEventSubscription(req: operations.ModifyEventSubscriptionRequest, config?: AxiosRequestConfig): Promise<operations.ModifyEventSubscriptionResponse>;
    /**
     * modifyReplicationInstance - <p>Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request.</p> <p>Some settings are applied during the maintenance window.</p> <p/>
    **/
    modifyReplicationInstance(req: operations.ModifyReplicationInstanceRequest, config?: AxiosRequestConfig): Promise<operations.ModifyReplicationInstanceResponse>;
    /**
     * modifyReplicationSubnetGroup - Modifies the settings for the specified replication subnet group.
    **/
    modifyReplicationSubnetGroup(req: operations.ModifyReplicationSubnetGroupRequest, config?: AxiosRequestConfig): Promise<operations.ModifyReplicationSubnetGroupResponse>;
    /**
     * modifyReplicationTask - <p>Modifies the specified replication task.</p> <p>You can't modify the task endpoints. The task must be stopped before you can modify it. </p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks</a> in the <i>Database Migration Service User Guide</i>.</p>
    **/
    modifyReplicationTask(req: operations.ModifyReplicationTaskRequest, config?: AxiosRequestConfig): Promise<operations.ModifyReplicationTaskResponse>;
    /**
     * moveReplicationTask - Moves a replication task from its current replication instance to a different target replication instance using the specified parameters. The target replication instance must be created with the same or later DMS version as the current replication instance.
    **/
    moveReplicationTask(req: operations.MoveReplicationTaskRequest, config?: AxiosRequestConfig): Promise<operations.MoveReplicationTaskResponse>;
    /**
     * rebootReplicationInstance - Reboots a replication instance. Rebooting results in a momentary outage, until the replication instance becomes available again.
    **/
    rebootReplicationInstance(req: operations.RebootReplicationInstanceRequest, config?: AxiosRequestConfig): Promise<operations.RebootReplicationInstanceResponse>;
    /**
     * refreshSchemas - Populates the schema for the specified endpoint. This is an asynchronous operation and can take several minutes. You can check the status of this operation by calling the DescribeRefreshSchemasStatus operation.
    **/
    refreshSchemas(req: operations.RefreshSchemasRequest, config?: AxiosRequestConfig): Promise<operations.RefreshSchemasResponse>;
    /**
     * reloadTables - <p>Reloads the target database table with the source data. </p> <p>You can only use this operation with a task in the <code>RUNNING</code> state, otherwise the service will throw an <code>InvalidResourceStateFault</code> exception.</p>
    **/
    reloadTables(req: operations.ReloadTablesRequest, config?: AxiosRequestConfig): Promise<operations.ReloadTablesResponse>;
    /**
     * removeTagsFromResource - Removes metadata tags from an DMS resource, including replication instance, endpoint, security group, and migration task. For more information, see <a href="https://docs.aws.amazon.com/dms/latest/APIReference/API_Tag.html"> <code>Tag</code> </a> data type description.
    **/
    removeTagsFromResource(req: operations.RemoveTagsFromResourceRequest, config?: AxiosRequestConfig): Promise<operations.RemoveTagsFromResourceResponse>;
    /**
     * startReplicationTask - <p>Starts the replication task.</p> <p>For more information about DMS tasks, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.html">Working with Migration Tasks </a> in the <i>Database Migration Service User Guide.</i> </p>
    **/
    startReplicationTask(req: operations.StartReplicationTaskRequest, config?: AxiosRequestConfig): Promise<operations.StartReplicationTaskResponse>;
    /**
     * startReplicationTaskAssessment -  Starts the replication task assessment for unsupported data types in the source database.
    **/
    startReplicationTaskAssessment(req: operations.StartReplicationTaskAssessmentRequest, config?: AxiosRequestConfig): Promise<operations.StartReplicationTaskAssessmentResponse>;
    /**
     * startReplicationTaskAssessmentRun - <p>Starts a new premigration assessment run for one or more individual assessments of a migration task.</p> <p>The assessments that you can specify depend on the source and target database engine and the migration type defined for the given task. To run this operation, your migration task must already be created. After you run this operation, you can review the status of each individual assessment. You can also run the migration task manually after the assessment run and its individual assessments complete.</p>
    **/
    startReplicationTaskAssessmentRun(req: operations.StartReplicationTaskAssessmentRunRequest, config?: AxiosRequestConfig): Promise<operations.StartReplicationTaskAssessmentRunResponse>;
    /**
     * stopReplicationTask - Stops the replication task.
    **/
    stopReplicationTask(req: operations.StopReplicationTaskRequest, config?: AxiosRequestConfig): Promise<operations.StopReplicationTaskResponse>;
    /**
     * testConnection - Tests the connection between the replication instance and the endpoint.
    **/
    testConnection(req: operations.TestConnectionRequest, config?: AxiosRequestConfig): Promise<operations.TestConnectionResponse>;
}
export {};
