import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://glue.{region}.amazonaws.com", "https://glue.{region}.amazonaws.com", "http://glue.{region}.amazonaws.com.cn", "https://glue.{region}.amazonaws.com.cn"];
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
     * batchCreatePartition - Creates one or more partitions in a batch operation.
    **/
    batchCreatePartition(req: operations.BatchCreatePartitionRequest, config?: AxiosRequestConfig): Promise<operations.BatchCreatePartitionResponse>;
    /**
     * batchDeleteConnection - Deletes a list of connection definitions from the Data Catalog.
    **/
    batchDeleteConnection(req: operations.BatchDeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteConnectionResponse>;
    /**
     * batchDeletePartition - Deletes one or more partitions in a batch operation.
    **/
    batchDeletePartition(req: operations.BatchDeletePartitionRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeletePartitionResponse>;
    /**
     * batchDeleteTable - <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
    **/
    batchDeleteTable(req: operations.BatchDeleteTableRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteTableResponse>;
    /**
     * batchDeleteTableVersion - Deletes a specified batch of versions of a table.
    **/
    batchDeleteTableVersion(req: operations.BatchDeleteTableVersionRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteTableVersionResponse>;
    /**
     * batchGetBlueprints - Retrieves information about a list of blueprints.
    **/
    batchGetBlueprints(req: operations.BatchGetBlueprintsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetBlueprintsResponse>;
    /**
     * batchGetCrawlers - Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
    **/
    batchGetCrawlers(req: operations.BatchGetCrawlersRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetCrawlersResponse>;
    /**
     * batchGetDevEndpoints - Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
    **/
    batchGetDevEndpoints(req: operations.BatchGetDevEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetDevEndpointsResponse>;
    /**
     * batchGetJobs - Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
    **/
    batchGetJobs(req: operations.BatchGetJobsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetJobsResponse>;
    /**
     * batchGetPartition - Retrieves partitions in a batch request.
    **/
    batchGetPartition(req: operations.BatchGetPartitionRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetPartitionResponse>;
    /**
     * batchGetTriggers - Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
    **/
    batchGetTriggers(req: operations.BatchGetTriggersRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetTriggersResponse>;
    /**
     * batchGetWorkflows - Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
    **/
    batchGetWorkflows(req: operations.BatchGetWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.BatchGetWorkflowsResponse>;
    /**
     * batchStopJobRun - Stops one or more job runs for a specified job definition.
    **/
    batchStopJobRun(req: operations.BatchStopJobRunRequest, config?: AxiosRequestConfig): Promise<operations.BatchStopJobRunResponse>;
    /**
     * batchUpdatePartition - Updates one or more partitions in a batch operation.
    **/
    batchUpdatePartition(req: operations.BatchUpdatePartitionRequest, config?: AxiosRequestConfig): Promise<operations.BatchUpdatePartitionResponse>;
    /**
     * cancelMlTaskRun - Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>.
    **/
    cancelMlTaskRun(req: operations.CancelMlTaskRunRequest, config?: AxiosRequestConfig): Promise<operations.CancelMlTaskRunResponse>;
    /**
     * checkSchemaVersionValidity - Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.
    **/
    checkSchemaVersionValidity(req: operations.CheckSchemaVersionValidityRequest, config?: AxiosRequestConfig): Promise<operations.CheckSchemaVersionValidityResponse>;
    /**
     * createBlueprint - Registers a blueprint with Glue.
    **/
    createBlueprint(req: operations.CreateBlueprintRequest, config?: AxiosRequestConfig): Promise<operations.CreateBlueprintResponse>;
    /**
     * createClassifier - Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
    **/
    createClassifier(req: operations.CreateClassifierRequest, config?: AxiosRequestConfig): Promise<operations.CreateClassifierResponse>;
    /**
     * createConnection - Creates a connection definition in the Data Catalog.
    **/
    createConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    /**
     * createCrawler - Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
    **/
    createCrawler(req: operations.CreateCrawlerRequest, config?: AxiosRequestConfig): Promise<operations.CreateCrawlerResponse>;
    /**
     * createDatabase - Creates a new database in a Data Catalog.
    **/
    createDatabase(req: operations.CreateDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.CreateDatabaseResponse>;
    /**
     * createDevEndpoint - Creates a new development endpoint.
    **/
    createDevEndpoint(req: operations.CreateDevEndpointRequest, config?: AxiosRequestConfig): Promise<operations.CreateDevEndpointResponse>;
    /**
     * createJob - Creates a new job definition.
    **/
    createJob(req: operations.CreateJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateJobResponse>;
    /**
     * createMlTransform - <p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
    **/
    createMlTransform(req: operations.CreateMlTransformRequest, config?: AxiosRequestConfig): Promise<operations.CreateMlTransformResponse>;
    /**
     * createPartition - Creates a new partition.
    **/
    createPartition(req: operations.CreatePartitionRequest, config?: AxiosRequestConfig): Promise<operations.CreatePartitionResponse>;
    /**
     * createPartitionIndex - Creates a specified partition index in an existing table.
    **/
    createPartitionIndex(req: operations.CreatePartitionIndexRequest, config?: AxiosRequestConfig): Promise<operations.CreatePartitionIndexResponse>;
    /**
     * createRegistry - Creates a new registry which may be used to hold a collection of schemas.
    **/
    createRegistry(req: operations.CreateRegistryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRegistryResponse>;
    /**
     * createSchema - <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
    **/
    createSchema(req: operations.CreateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CreateSchemaResponse>;
    /**
     * createScript - Transforms a directed acyclic graph (DAG) into code.
    **/
    createScript(req: operations.CreateScriptRequest, config?: AxiosRequestConfig): Promise<operations.CreateScriptResponse>;
    /**
     * createSecurityConfiguration - Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
    **/
    createSecurityConfiguration(req: operations.CreateSecurityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateSecurityConfigurationResponse>;
    /**
     * createTable - Creates a new table definition in the Data Catalog.
    **/
    createTable(req: operations.CreateTableRequest, config?: AxiosRequestConfig): Promise<operations.CreateTableResponse>;
    /**
     * createTrigger - Creates a new trigger.
    **/
    createTrigger(req: operations.CreateTriggerRequest, config?: AxiosRequestConfig): Promise<operations.CreateTriggerResponse>;
    /**
     * createUserDefinedFunction - Creates a new function definition in the Data Catalog.
    **/
    createUserDefinedFunction(req: operations.CreateUserDefinedFunctionRequest, config?: AxiosRequestConfig): Promise<operations.CreateUserDefinedFunctionResponse>;
    /**
     * createWorkflow - Creates a new workflow.
    **/
    createWorkflow(req: operations.CreateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkflowResponse>;
    /**
     * deleteBlueprint - Deletes an existing blueprint.
    **/
    deleteBlueprint(req: operations.DeleteBlueprintRequest, config?: AxiosRequestConfig): Promise<operations.DeleteBlueprintResponse>;
    /**
     * deleteClassifier - Removes a classifier from the Data Catalog.
    **/
    deleteClassifier(req: operations.DeleteClassifierRequest, config?: AxiosRequestConfig): Promise<operations.DeleteClassifierResponse>;
    /**
     * deleteColumnStatisticsForPartition - <p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
    **/
    deleteColumnStatisticsForPartition(req: operations.DeleteColumnStatisticsForPartitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteColumnStatisticsForPartitionResponse>;
    /**
     * deleteColumnStatisticsForTable - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
    **/
    deleteColumnStatisticsForTable(req: operations.DeleteColumnStatisticsForTableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteColumnStatisticsForTableResponse>;
    /**
     * deleteConnection - Deletes a connection from the Data Catalog.
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * deleteCrawler - Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
    **/
    deleteCrawler(req: operations.DeleteCrawlerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCrawlerResponse>;
    /**
     * deleteDatabase - <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
    **/
    deleteDatabase(req: operations.DeleteDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDatabaseResponse>;
    /**
     * deleteDevEndpoint - Deletes a specified development endpoint.
    **/
    deleteDevEndpoint(req: operations.DeleteDevEndpointRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDevEndpointResponse>;
    /**
     * deleteJob - Deletes a specified job definition. If the job definition is not found, no exception is thrown.
    **/
    deleteJob(req: operations.DeleteJobRequest, config?: AxiosRequestConfig): Promise<operations.DeleteJobResponse>;
    /**
     * deleteMlTransform - Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.
    **/
    deleteMlTransform(req: operations.DeleteMlTransformRequest, config?: AxiosRequestConfig): Promise<operations.DeleteMlTransformResponse>;
    /**
     * deletePartition - Deletes a specified partition.
    **/
    deletePartition(req: operations.DeletePartitionRequest, config?: AxiosRequestConfig): Promise<operations.DeletePartitionResponse>;
    /**
     * deletePartitionIndex - Deletes a specified partition index from an existing table.
    **/
    deletePartitionIndex(req: operations.DeletePartitionIndexRequest, config?: AxiosRequestConfig): Promise<operations.DeletePartitionIndexResponse>;
    /**
     * deleteRegistry - Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs.
    **/
    deleteRegistry(req: operations.DeleteRegistryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRegistryResponse>;
    /**
     * deleteResourcePolicy - Deletes a specified policy.
    **/
    deleteResourcePolicy(req: operations.DeleteResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourcePolicyResponse>;
    /**
     * deleteSchema - Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.
    **/
    deleteSchema(req: operations.DeleteSchemaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSchemaResponse>;
    /**
     * deleteSchemaVersions - <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
    **/
    deleteSchemaVersions(req: operations.DeleteSchemaVersionsRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSchemaVersionsResponse>;
    /**
     * deleteSecurityConfiguration - Deletes a specified security configuration.
    **/
    deleteSecurityConfiguration(req: operations.DeleteSecurityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSecurityConfigurationResponse>;
    /**
     * deleteTable - <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
    **/
    deleteTable(req: operations.DeleteTableRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTableResponse>;
    /**
     * deleteTableVersion - Deletes a specified version of a table.
    **/
    deleteTableVersion(req: operations.DeleteTableVersionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTableVersionResponse>;
    /**
     * deleteTrigger - Deletes a specified trigger. If the trigger is not found, no exception is thrown.
    **/
    deleteTrigger(req: operations.DeleteTriggerRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTriggerResponse>;
    /**
     * deleteUserDefinedFunction - Deletes an existing function definition from the Data Catalog.
    **/
    deleteUserDefinedFunction(req: operations.DeleteUserDefinedFunctionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteUserDefinedFunctionResponse>;
    /**
     * deleteWorkflow - Deletes a workflow.
    **/
    deleteWorkflow(req: operations.DeleteWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkflowResponse>;
    /**
     * getBlueprint - Retrieves the details of a blueprint.
    **/
    getBlueprint(req: operations.GetBlueprintRequest, config?: AxiosRequestConfig): Promise<operations.GetBlueprintResponse>;
    /**
     * getBlueprintRun - Retrieves the details of a blueprint run.
    **/
    getBlueprintRun(req: operations.GetBlueprintRunRequest, config?: AxiosRequestConfig): Promise<operations.GetBlueprintRunResponse>;
    /**
     * getBlueprintRuns - Retrieves the details of blueprint runs for a specified blueprint.
    **/
    getBlueprintRuns(req: operations.GetBlueprintRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetBlueprintRunsResponse>;
    /**
     * getCatalogImportStatus - Retrieves the status of a migration operation.
    **/
    getCatalogImportStatus(req: operations.GetCatalogImportStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetCatalogImportStatusResponse>;
    /**
     * getClassifier - Retrieve a classifier by name.
    **/
    getClassifier(req: operations.GetClassifierRequest, config?: AxiosRequestConfig): Promise<operations.GetClassifierResponse>;
    /**
     * getClassifiers - Lists all classifier objects in the Data Catalog.
    **/
    getClassifiers(req: operations.GetClassifiersRequest, config?: AxiosRequestConfig): Promise<operations.GetClassifiersResponse>;
    /**
     * getColumnStatisticsForPartition - <p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
    **/
    getColumnStatisticsForPartition(req: operations.GetColumnStatisticsForPartitionRequest, config?: AxiosRequestConfig): Promise<operations.GetColumnStatisticsForPartitionResponse>;
    /**
     * getColumnStatisticsForTable - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
    **/
    getColumnStatisticsForTable(req: operations.GetColumnStatisticsForTableRequest, config?: AxiosRequestConfig): Promise<operations.GetColumnStatisticsForTableResponse>;
    /**
     * getConnection - Retrieves a connection definition from the Data Catalog.
    **/
    getConnection(req: operations.GetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionResponse>;
    /**
     * getConnections - Retrieves a list of connection definitions from the Data Catalog.
    **/
    getConnections(req: operations.GetConnectionsRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionsResponse>;
    /**
     * getCrawler - Retrieves metadata for a specified crawler.
    **/
    getCrawler(req: operations.GetCrawlerRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlerResponse>;
    /**
     * getCrawlerMetrics - Retrieves metrics about specified crawlers.
    **/
    getCrawlerMetrics(req: operations.GetCrawlerMetricsRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlerMetricsResponse>;
    /**
     * getCrawlers - Retrieves metadata for all crawlers defined in the customer account.
    **/
    getCrawlers(req: operations.GetCrawlersRequest, config?: AxiosRequestConfig): Promise<operations.GetCrawlersResponse>;
    /**
     * getDataCatalogEncryptionSettings - Retrieves the security configuration for a specified catalog.
    **/
    getDataCatalogEncryptionSettings(req: operations.GetDataCatalogEncryptionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.GetDataCatalogEncryptionSettingsResponse>;
    /**
     * getDatabase - Retrieves the definition of a specified database.
    **/
    getDatabase(req: operations.GetDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabaseResponse>;
    /**
     * getDatabases - Retrieves all databases defined in a given Data Catalog.
    **/
    getDatabases(req: operations.GetDatabasesRequest, config?: AxiosRequestConfig): Promise<operations.GetDatabasesResponse>;
    /**
     * getDataflowGraph - Transforms a Python script into a directed acyclic graph (DAG).
    **/
    getDataflowGraph(req: operations.GetDataflowGraphRequest, config?: AxiosRequestConfig): Promise<operations.GetDataflowGraphResponse>;
    /**
     * getDevEndpoint - <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
    **/
    getDevEndpoint(req: operations.GetDevEndpointRequest, config?: AxiosRequestConfig): Promise<operations.GetDevEndpointResponse>;
    /**
     * getDevEndpoints - <p>Retrieves all the development endpoints in this AWS account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
    **/
    getDevEndpoints(req: operations.GetDevEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.GetDevEndpointsResponse>;
    /**
     * getJob - Retrieves an existing job definition.
    **/
    getJob(req: operations.GetJobRequest, config?: AxiosRequestConfig): Promise<operations.GetJobResponse>;
    /**
     * getJobBookmark - Returns information on a job bookmark entry.
    **/
    getJobBookmark(req: operations.GetJobBookmarkRequest, config?: AxiosRequestConfig): Promise<operations.GetJobBookmarkResponse>;
    /**
     * getJobRun - Retrieves the metadata for a given job run.
    **/
    getJobRun(req: operations.GetJobRunRequest, config?: AxiosRequestConfig): Promise<operations.GetJobRunResponse>;
    /**
     * getJobRuns - Retrieves metadata for all runs of a given job definition.
    **/
    getJobRuns(req: operations.GetJobRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetJobRunsResponse>;
    /**
     * getJobs - Retrieves all current job definitions.
    **/
    getJobs(req: operations.GetJobsRequest, config?: AxiosRequestConfig): Promise<operations.GetJobsResponse>;
    /**
     * getMlTaskRun - Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
    **/
    getMlTaskRun(req: operations.GetMlTaskRunRequest, config?: AxiosRequestConfig): Promise<operations.GetMlTaskRunResponse>;
    /**
     * getMlTaskRuns - <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
    **/
    getMlTaskRuns(req: operations.GetMlTaskRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetMlTaskRunsResponse>;
    /**
     * getMlTransform - Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
    **/
    getMlTransform(req: operations.GetMlTransformRequest, config?: AxiosRequestConfig): Promise<operations.GetMlTransformResponse>;
    /**
     * getMlTransforms - Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
    **/
    getMlTransforms(req: operations.GetMlTransformsRequest, config?: AxiosRequestConfig): Promise<operations.GetMlTransformsResponse>;
    /**
     * getMapping - Creates mappings.
    **/
    getMapping(req: operations.GetMappingRequest, config?: AxiosRequestConfig): Promise<operations.GetMappingResponse>;
    /**
     * getPartition - Retrieves information about a specified partition.
    **/
    getPartition(req: operations.GetPartitionRequest, config?: AxiosRequestConfig): Promise<operations.GetPartitionResponse>;
    /**
     * getPartitionIndexes - Retrieves the partition indexes associated with a table.
    **/
    getPartitionIndexes(req: operations.GetPartitionIndexesRequest, config?: AxiosRequestConfig): Promise<operations.GetPartitionIndexesResponse>;
    /**
     * getPartitions - Retrieves information about the partitions in a table.
    **/
    getPartitions(req: operations.GetPartitionsRequest, config?: AxiosRequestConfig): Promise<operations.GetPartitionsResponse>;
    /**
     * getPlan - Gets code to perform a specified mapping.
    **/
    getPlan(req: operations.GetPlanRequest, config?: AxiosRequestConfig): Promise<operations.GetPlanResponse>;
    /**
     * getRegistry - Describes the specified registry in detail.
    **/
    getRegistry(req: operations.GetRegistryRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryResponse>;
    /**
     * getResourcePolicies - <p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>
    **/
    getResourcePolicies(req: operations.GetResourcePoliciesRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePoliciesResponse>;
    /**
     * getResourcePolicy - Retrieves a specified resource policy.
    **/
    getResourcePolicy(req: operations.GetResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetResourcePolicyResponse>;
    /**
     * getSchema - Describes the specified schema in detail.
    **/
    getSchema(req: operations.GetSchemaRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaResponse>;
    /**
     * getSchemaByDefinition - Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.
    **/
    getSchemaByDefinition(req: operations.GetSchemaByDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaByDefinitionResponse>;
    /**
     * getSchemaVersion - Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.
    **/
    getSchemaVersion(req: operations.GetSchemaVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaVersionResponse>;
    /**
     * getSchemaVersionsDiff - <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
    **/
    getSchemaVersionsDiff(req: operations.GetSchemaVersionsDiffRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaVersionsDiffResponse>;
    /**
     * getSecurityConfiguration - Retrieves a specified security configuration.
    **/
    getSecurityConfiguration(req: operations.GetSecurityConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetSecurityConfigurationResponse>;
    /**
     * getSecurityConfigurations - Retrieves a list of all security configurations.
    **/
    getSecurityConfigurations(req: operations.GetSecurityConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.GetSecurityConfigurationsResponse>;
    /**
     * getTable - Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
    **/
    getTable(req: operations.GetTableRequest, config?: AxiosRequestConfig): Promise<operations.GetTableResponse>;
    /**
     * getTableVersion - Retrieves a specified version of a table.
    **/
    getTableVersion(req: operations.GetTableVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetTableVersionResponse>;
    /**
     * getTableVersions - Retrieves a list of strings that identify available versions of a specified table.
    **/
    getTableVersions(req: operations.GetTableVersionsRequest, config?: AxiosRequestConfig): Promise<operations.GetTableVersionsResponse>;
    /**
     * getTables - Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
    **/
    getTables(req: operations.GetTablesRequest, config?: AxiosRequestConfig): Promise<operations.GetTablesResponse>;
    /**
     * getTags - Retrieves a list of tags associated with a resource.
    **/
    getTags(req: operations.GetTagsRequest, config?: AxiosRequestConfig): Promise<operations.GetTagsResponse>;
    /**
     * getTrigger - Retrieves the definition of a trigger.
    **/
    getTrigger(req: operations.GetTriggerRequest, config?: AxiosRequestConfig): Promise<operations.GetTriggerResponse>;
    /**
     * getTriggers - Gets all the triggers associated with a job.
    **/
    getTriggers(req: operations.GetTriggersRequest, config?: AxiosRequestConfig): Promise<operations.GetTriggersResponse>;
    /**
     * getUserDefinedFunction - Retrieves a specified function definition from the Data Catalog.
    **/
    getUserDefinedFunction(req: operations.GetUserDefinedFunctionRequest, config?: AxiosRequestConfig): Promise<operations.GetUserDefinedFunctionResponse>;
    /**
     * getUserDefinedFunctions - Retrieves multiple function definitions from the Data Catalog.
    **/
    getUserDefinedFunctions(req: operations.GetUserDefinedFunctionsRequest, config?: AxiosRequestConfig): Promise<operations.GetUserDefinedFunctionsResponse>;
    /**
     * getWorkflow - Retrieves resource metadata for a workflow.
    **/
    getWorkflow(req: operations.GetWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowResponse>;
    /**
     * getWorkflowRun - Retrieves the metadata for a given workflow run.
    **/
    getWorkflowRun(req: operations.GetWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowRunResponse>;
    /**
     * getWorkflowRunProperties - Retrieves the workflow run properties which were set during the run.
    **/
    getWorkflowRunProperties(req: operations.GetWorkflowRunPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowRunPropertiesResponse>;
    /**
     * getWorkflowRuns - Retrieves metadata for all runs of a given workflow.
    **/
    getWorkflowRuns(req: operations.GetWorkflowRunsRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkflowRunsResponse>;
    /**
     * importCatalogToGlue - Imports an existing Amazon Athena Data Catalog to Glue.
    **/
    importCatalogToGlue(req: operations.ImportCatalogToGlueRequest, config?: AxiosRequestConfig): Promise<operations.ImportCatalogToGlueResponse>;
    /**
     * listBlueprints - Lists all the blueprint names in an account.
    **/
    listBlueprints(req: operations.ListBlueprintsRequest, config?: AxiosRequestConfig): Promise<operations.ListBlueprintsResponse>;
    /**
     * listCrawlers - <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
    **/
    listCrawlers(req: operations.ListCrawlersRequest, config?: AxiosRequestConfig): Promise<operations.ListCrawlersResponse>;
    /**
     * listDevEndpoints - <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
    **/
    listDevEndpoints(req: operations.ListDevEndpointsRequest, config?: AxiosRequestConfig): Promise<operations.ListDevEndpointsResponse>;
    /**
     * listJobs - <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
    **/
    listJobs(req: operations.ListJobsRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsResponse>;
    /**
     * listMlTransforms -  Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved.
    **/
    listMlTransforms(req: operations.ListMlTransformsRequest, config?: AxiosRequestConfig): Promise<operations.ListMlTransformsResponse>;
    /**
     * listRegistries - Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.
    **/
    listRegistries(req: operations.ListRegistriesRequest, config?: AxiosRequestConfig): Promise<operations.ListRegistriesResponse>;
    /**
     * listSchemaVersions - Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.
    **/
    listSchemaVersions(req: operations.ListSchemaVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSchemaVersionsResponse>;
    /**
     * listSchemas - <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
    **/
    listSchemas(req: operations.ListSchemasRequest, config?: AxiosRequestConfig): Promise<operations.ListSchemasResponse>;
    /**
     * listTriggers - <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
    **/
    listTriggers(req: operations.ListTriggersRequest, config?: AxiosRequestConfig): Promise<operations.ListTriggersResponse>;
    /**
     * listWorkflows - Lists names of workflows created in the account.
    **/
    listWorkflows(req: operations.ListWorkflowsRequest, config?: AxiosRequestConfig): Promise<operations.ListWorkflowsResponse>;
    /**
     * putDataCatalogEncryptionSettings - Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
    **/
    putDataCatalogEncryptionSettings(req: operations.PutDataCatalogEncryptionSettingsRequest, config?: AxiosRequestConfig): Promise<operations.PutDataCatalogEncryptionSettingsResponse>;
    /**
     * putResourcePolicy - Sets the Data Catalog resource policy for access control.
    **/
    putResourcePolicy(req: operations.PutResourcePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutResourcePolicyResponse>;
    /**
     * putSchemaVersionMetadata - Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
    **/
    putSchemaVersionMetadata(req: operations.PutSchemaVersionMetadataRequest, config?: AxiosRequestConfig): Promise<operations.PutSchemaVersionMetadataResponse>;
    /**
     * putWorkflowRunProperties - Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
    **/
    putWorkflowRunProperties(req: operations.PutWorkflowRunPropertiesRequest, config?: AxiosRequestConfig): Promise<operations.PutWorkflowRunPropertiesResponse>;
    /**
     * querySchemaVersionMetadata - Queries for the schema version metadata information.
    **/
    querySchemaVersionMetadata(req: operations.QuerySchemaVersionMetadataRequest, config?: AxiosRequestConfig): Promise<operations.QuerySchemaVersionMetadataResponse>;
    /**
     * registerSchemaVersion - <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
    **/
    registerSchemaVersion(req: operations.RegisterSchemaVersionRequest, config?: AxiosRequestConfig): Promise<operations.RegisterSchemaVersionResponse>;
    /**
     * removeSchemaVersionMetadata - Removes a key value pair from the schema version metadata for the specified schema version ID.
    **/
    removeSchemaVersionMetadata(req: operations.RemoveSchemaVersionMetadataRequest, config?: AxiosRequestConfig): Promise<operations.RemoveSchemaVersionMetadataResponse>;
    /**
     * resetJobBookmark - Resets a bookmark entry.
    **/
    resetJobBookmark(req: operations.ResetJobBookmarkRequest, config?: AxiosRequestConfig): Promise<operations.ResetJobBookmarkResponse>;
    /**
     * resumeWorkflowRun - Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.
    **/
    resumeWorkflowRun(req: operations.ResumeWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.ResumeWorkflowRunResponse>;
    /**
     * searchTables - <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
    **/
    searchTables(req: operations.SearchTablesRequest, config?: AxiosRequestConfig): Promise<operations.SearchTablesResponse>;
    /**
     * startBlueprintRun - Starts a new run of the specified blueprint.
    **/
    startBlueprintRun(req: operations.StartBlueprintRunRequest, config?: AxiosRequestConfig): Promise<operations.StartBlueprintRunResponse>;
    /**
     * startCrawler - Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
    **/
    startCrawler(req: operations.StartCrawlerRequest, config?: AxiosRequestConfig): Promise<operations.StartCrawlerResponse>;
    /**
     * startCrawlerSchedule - Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
    **/
    startCrawlerSchedule(req: operations.StartCrawlerScheduleRequest, config?: AxiosRequestConfig): Promise<operations.StartCrawlerScheduleResponse>;
    /**
     * startExportLabelsTaskRun - Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
    **/
    startExportLabelsTaskRun(req: operations.StartExportLabelsTaskRunRequest, config?: AxiosRequestConfig): Promise<operations.StartExportLabelsTaskRunResponse>;
    /**
     * startImportLabelsTaskRun - <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
    **/
    startImportLabelsTaskRun(req: operations.StartImportLabelsTaskRunRequest, config?: AxiosRequestConfig): Promise<operations.StartImportLabelsTaskRunResponse>;
    /**
     * startJobRun - Starts a job run using a job definition.
    **/
    startJobRun(req: operations.StartJobRunRequest, config?: AxiosRequestConfig): Promise<operations.StartJobRunResponse>;
    /**
     * startMlEvaluationTaskRun - <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
    **/
    startMlEvaluationTaskRun(req: operations.StartMlEvaluationTaskRunRequest, config?: AxiosRequestConfig): Promise<operations.StartMlEvaluationTaskRunResponse>;
    /**
     * startMlLabelingSetGenerationTaskRun - <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
    **/
    startMlLabelingSetGenerationTaskRun(req: operations.StartMlLabelingSetGenerationTaskRunRequest, config?: AxiosRequestConfig): Promise<operations.StartMlLabelingSetGenerationTaskRunResponse>;
    /**
     * startTrigger - Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
    **/
    startTrigger(req: operations.StartTriggerRequest, config?: AxiosRequestConfig): Promise<operations.StartTriggerResponse>;
    /**
     * startWorkflowRun - Starts a new run of the specified workflow.
    **/
    startWorkflowRun(req: operations.StartWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.StartWorkflowRunResponse>;
    /**
     * stopCrawler - If the specified crawler is running, stops the crawl.
    **/
    stopCrawler(req: operations.StopCrawlerRequest, config?: AxiosRequestConfig): Promise<operations.StopCrawlerResponse>;
    /**
     * stopCrawlerSchedule - Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
    **/
    stopCrawlerSchedule(req: operations.StopCrawlerScheduleRequest, config?: AxiosRequestConfig): Promise<operations.StopCrawlerScheduleResponse>;
    /**
     * stopTrigger - Stops a specified trigger.
    **/
    stopTrigger(req: operations.StopTriggerRequest, config?: AxiosRequestConfig): Promise<operations.StopTriggerResponse>;
    /**
     * stopWorkflowRun - Stops the execution of the specified workflow run.
    **/
    stopWorkflowRun(req: operations.StopWorkflowRunRequest, config?: AxiosRequestConfig): Promise<operations.StopWorkflowRunResponse>;
    /**
     * tagResource - Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes tags from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateBlueprint - Updates a registered blueprint.
    **/
    updateBlueprint(req: operations.UpdateBlueprintRequest, config?: AxiosRequestConfig): Promise<operations.UpdateBlueprintResponse>;
    /**
     * updateClassifier - Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
    **/
    updateClassifier(req: operations.UpdateClassifierRequest, config?: AxiosRequestConfig): Promise<operations.UpdateClassifierResponse>;
    /**
     * updateColumnStatisticsForPartition - <p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
    **/
    updateColumnStatisticsForPartition(req: operations.UpdateColumnStatisticsForPartitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateColumnStatisticsForPartitionResponse>;
    /**
     * updateColumnStatisticsForTable - <p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
    **/
    updateColumnStatisticsForTable(req: operations.UpdateColumnStatisticsForTableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateColumnStatisticsForTableResponse>;
    /**
     * updateConnection - Updates a connection definition in the Data Catalog.
    **/
    updateConnection(req: operations.UpdateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionResponse>;
    /**
     * updateCrawler - Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
    **/
    updateCrawler(req: operations.UpdateCrawlerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCrawlerResponse>;
    /**
     * updateCrawlerSchedule - Updates the schedule of a crawler using a <code>cron</code> expression.
    **/
    updateCrawlerSchedule(req: operations.UpdateCrawlerScheduleRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCrawlerScheduleResponse>;
    /**
     * updateDatabase - Updates an existing database definition in a Data Catalog.
    **/
    updateDatabase(req: operations.UpdateDatabaseRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDatabaseResponse>;
    /**
     * updateDevEndpoint - Updates a specified development endpoint.
    **/
    updateDevEndpoint(req: operations.UpdateDevEndpointRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDevEndpointResponse>;
    /**
     * updateJob - Updates an existing job definition.
    **/
    updateJob(req: operations.UpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.UpdateJobResponse>;
    /**
     * updateMlTransform - <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
    **/
    updateMlTransform(req: operations.UpdateMlTransformRequest, config?: AxiosRequestConfig): Promise<operations.UpdateMlTransformResponse>;
    /**
     * updatePartition - Updates a partition.
    **/
    updatePartition(req: operations.UpdatePartitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdatePartitionResponse>;
    /**
     * updateRegistry - Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry.
    **/
    updateRegistry(req: operations.UpdateRegistryRequest, config?: AxiosRequestConfig): Promise<operations.UpdateRegistryResponse>;
    /**
     * updateSchema - <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>
    **/
    updateSchema(req: operations.UpdateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSchemaResponse>;
    /**
     * updateTable - Updates a metadata table in the Data Catalog.
    **/
    updateTable(req: operations.UpdateTableRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTableResponse>;
    /**
     * updateTrigger - Updates a trigger definition.
    **/
    updateTrigger(req: operations.UpdateTriggerRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTriggerResponse>;
    /**
     * updateUserDefinedFunction - Updates an existing function definition in the Data Catalog.
    **/
    updateUserDefinedFunction(req: operations.UpdateUserDefinedFunctionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateUserDefinedFunctionResponse>;
    /**
     * updateWorkflow - Updates an existing workflow.
    **/
    updateWorkflow(req: operations.UpdateWorkflowRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkflowResponse>;
}
export {};
