import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://airbyte.local", "http://localhost:8000/api"];
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
     * cancelJob - Cancels a job
    **/
    cancelJob(req: operations.CancelJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobResponse>;
    /**
     * checkConnectionToDestination - Check connection to the destination
    **/
    checkConnectionToDestination(req: operations.CheckConnectionToDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToDestinationResponse>;
    /**
     * checkConnectionToDestinationForUpdate - Check connection for a proposed update to a destination
    **/
    checkConnectionToDestinationForUpdate(req: operations.CheckConnectionToDestinationForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToDestinationForUpdateResponse>;
    /**
     * checkConnectionToSource - Check connection to the source
    **/
    checkConnectionToSource(req: operations.CheckConnectionToSourceRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToSourceResponse>;
    /**
     * checkConnectionToSourceForUpdate - Check connection for a proposed update to a source
    **/
    checkConnectionToSourceForUpdate(req: operations.CheckConnectionToSourceForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToSourceForUpdateResponse>;
    /**
     * checkOperation - Check if an operation to be created is valid
    **/
    checkOperation(req: operations.CheckOperationRequest, config?: AxiosRequestConfig): Promise<operations.CheckOperationResponse>;
    /**
     * createConnection - Create a connection between a source and a destination
    **/
    createConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    /**
     * createDestination - Create a destination
    **/
    createDestination(req: operations.CreateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDestinationResponse>;
    /**
     * createDestinationDefinition - Creates a destinationsDefinition
    **/
    createDestinationDefinition(req: operations.CreateDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDestinationDefinitionResponse>;
    /**
     * createOperation - Create an operation to be applied as part of a connection pipeline
    **/
    createOperation(req: operations.CreateOperationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOperationResponse>;
    /**
     * createSource - Create a source
    **/
    createSource(req: operations.CreateSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateSourceResponse>;
    /**
     * createSourceDefinition - Creates a sourceDefinition
    **/
    createSourceDefinition(req: operations.CreateSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSourceDefinitionResponse>;
    /**
     * createWorkspace - Creates a workspace
    **/
    createWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    /**
     * deleteConnection - Delete a connection
    **/
    deleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    /**
     * deleteDestination - Delete the destination
    **/
    deleteDestination(req: operations.DeleteDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDestinationResponse>;
    /**
     * deleteOperation - Delete an operation
    **/
    deleteOperation(req: operations.DeleteOperationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOperationResponse>;
    /**
     * deleteSource - Delete a source
    **/
    deleteSource(req: operations.DeleteSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSourceResponse>;
    /**
     * deleteWorkspace - Deletes a workspace
    **/
    deleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    /**
     * discoverSchemaForSource - Discover the schema catalog of the source
    **/
    discoverSchemaForSource(req: operations.DiscoverSchemaForSourceRequest, config?: AxiosRequestConfig): Promise<operations.DiscoverSchemaForSourceResponse>;
    /**
     * executeDestinationCheckConnection - Run check connection for a given destination configuration
    **/
    executeDestinationCheckConnection(req: operations.ExecuteDestinationCheckConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteDestinationCheckConnectionResponse>;
    /**
     * executeSourceCheckConnection - Run check connection for a given source configuration
    **/
    executeSourceCheckConnection(req: operations.ExecuteSourceCheckConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSourceCheckConnectionResponse>;
    /**
     * executeSourceDiscoverSchema - Run discover schema for a given source a source configuration
    **/
    executeSourceDiscoverSchema(req: operations.ExecuteSourceDiscoverSchemaRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSourceDiscoverSchemaResponse>;
    /**
     * exportArchive - Export Airbyte Configuration and Data Archive
    **/
    exportArchive(config?: AxiosRequestConfig): Promise<operations.ExportArchiveResponse>;
    /**
     * getConnection - Get a connection
    **/
    getConnection(req: operations.GetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionResponse>;
    /**
     * getDestination - Get configured destination
    **/
    getDestination(req: operations.GetDestinationRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationResponse>;
    /**
     * getDestinationDefinition - Get destinationDefinition
    **/
    getDestinationDefinition(req: operations.GetDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationDefinitionResponse>;
    /**
     * getDestinationDefinitionSpecification - Get specification for a destinationDefinition
    **/
    getDestinationDefinitionSpecification(req: operations.GetDestinationDefinitionSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationDefinitionSpecificationResponse>;
    /**
     * getHealthCheck - Health Check
    **/
    getHealthCheck(config?: AxiosRequestConfig): Promise<operations.GetHealthCheckResponse>;
    /**
     * getJobInfo - Get information about a job
    **/
    getJobInfo(req: operations.GetJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetJobInfoResponse>;
    /**
     * getLogs - Get logs
    **/
    getLogs(req: operations.GetLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetLogsResponse>;
    /**
     * getOpenApiSpec - Returns the openapi specification
    **/
    getOpenApiSpec(config?: AxiosRequestConfig): Promise<operations.GetOpenApiSpecResponse>;
    /**
     * getOperation - Returns an operation
    **/
    getOperation(req: operations.GetOperationRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationResponse>;
    /**
     * getSource - Get source
    **/
    getSource(req: operations.GetSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceResponse>;
    /**
     * getSourceDefinition - Get source
    **/
    getSourceDefinition(req: operations.GetSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceDefinitionResponse>;
    /**
     * getSourceDefinitionSpecification - Get specification for a SourceDefinition.
    **/
    getSourceDefinitionSpecification(req: operations.GetSourceDefinitionSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceDefinitionSpecificationResponse>;
    /**
     * getState - Fetch the current state for a connection.
    **/
    getState(req: operations.GetStateRequest, config?: AxiosRequestConfig): Promise<operations.GetStateResponse>;
    /**
     * getWorkspace - Find workspace by ID
    **/
    getWorkspace(req: operations.GetWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    /**
     * getWorkspaceBySlug - Find workspace by slug
    **/
    getWorkspaceBySlug(req: operations.GetWorkspaceBySlugRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceBySlugResponse>;
    /**
     * importArchive - Import Airbyte Configuration and Data Archive
    **/
    importArchive(req: operations.ImportArchiveRequest, config?: AxiosRequestConfig): Promise<operations.ImportArchiveResponse>;
    /**
     * listConnectionsForWorkspace - Returns all connections for a workspace.
     *
     * List connections for workspace. Does not return deleted connections.
    **/
    listConnectionsForWorkspace(req: operations.ListConnectionsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionsForWorkspaceResponse>;
    /**
     * listDestinationDefinitions - List all the destinationDefinitions the current Airbyte deployment is configured to use
    **/
    listDestinationDefinitions(config?: AxiosRequestConfig): Promise<operations.ListDestinationDefinitionsResponse>;
    /**
     * listDestinationsForWorkspace - List configured destinations for a workspace
    **/
    listDestinationsForWorkspace(req: operations.ListDestinationsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.ListDestinationsForWorkspaceResponse>;
    /**
     * listJobsFor - Returns recent jobs for a connection. Jobs are returned in descending order by createdAt.
    **/
    listJobsFor(req: operations.ListJobsForRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsForResponse>;
    /**
     * listLatestDestinationDefinitions - List the latest destinationDefinitions Airbyte supports
     *
     * Guaranteed to retrieve the latest information on supported destinations.
    **/
    listLatestDestinationDefinitions(config?: AxiosRequestConfig): Promise<operations.ListLatestDestinationDefinitionsResponse>;
    /**
     * listLatestSourceDefinitions - List the latest sourceDefinitions Airbyte supports
     *
     * Guaranteed to retrieve the latest information on supported sources.
    **/
    listLatestSourceDefinitions(config?: AxiosRequestConfig): Promise<operations.ListLatestSourceDefinitionsResponse>;
    /**
     * listOperationsForConnection - Returns all operations for a connection.
     *
     * List operations for connection.
    **/
    listOperationsForConnection(req: operations.ListOperationsForConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ListOperationsForConnectionResponse>;
    /**
     * listSourceDefinitions - List all the sourceDefinitions the current Airbyte deployment is configured to use
    **/
    listSourceDefinitions(config?: AxiosRequestConfig): Promise<operations.ListSourceDefinitionsResponse>;
    /**
     * listSourcesForWorkspace - List sources for workspace
     *
     * List sources for workspace. Does not return deleted sources.
    **/
    listSourcesForWorkspace(req: operations.ListSourcesForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.ListSourcesForWorkspaceResponse>;
    /**
     * listWorkspaces - List all workspaces registered in the current Airbyte deployment
    **/
    listWorkspaces(config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    /**
     * resetConnection - Reset the data for the connection. Deletes data generated by the connection in the destination. Resets any cursors back to initial state.
    **/
    resetConnection(req: operations.ResetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ResetConnectionResponse>;
    /**
     * syncConnection - Trigger a manual sync of the connection
    **/
    syncConnection(req: operations.SyncConnectionRequest, config?: AxiosRequestConfig): Promise<operations.SyncConnectionResponse>;
    /**
     * tryNotificationConfig - Try sending a notifications
    **/
    tryNotificationConfig(req: operations.TryNotificationConfigRequest, config?: AxiosRequestConfig): Promise<operations.TryNotificationConfigResponse>;
    /**
     * updateConnection - Update a connection
    **/
    updateConnection(req: operations.UpdateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionResponse>;
    /**
     * updateDestination - Update a destination
    **/
    updateDestination(req: operations.UpdateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationResponse>;
    /**
     * updateDestinationDefinition - Update destinationDefinition
    **/
    updateDestinationDefinition(req: operations.UpdateDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationDefinitionResponse>;
    /**
     * updateOperation - Update an operation
    **/
    updateOperation(req: operations.UpdateOperationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOperationResponse>;
    /**
     * updateSource - Update a source
    **/
    updateSource(req: operations.UpdateSourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceResponse>;
    /**
     * updateSourceDefinition - Update a sourceDefinition
    **/
    updateSourceDefinition(req: operations.UpdateSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceDefinitionResponse>;
    /**
     * updateWorkspace - Update workspace state
    **/
    updateWorkspace(req: operations.UpdateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
    /**
     * webBackendCreateConnection - Create a connection
    **/
    webBackendCreateConnection(req: operations.WebBackendCreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendCreateConnectionResponse>;
    /**
     * webBackendGetConnection - Get a connection
    **/
    webBackendGetConnection(req: operations.WebBackendGetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendGetConnectionResponse>;
    /**
     * webBackendListConnectionsForWorkspace - Returns all connections for a workspace.
    **/
    webBackendListConnectionsForWorkspace(req: operations.WebBackendListConnectionsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendListConnectionsForWorkspaceResponse>;
    /**
     * webBackendRecreateDestination - Recreate a destination
    **/
    webBackendRecreateDestination(req: operations.WebBackendRecreateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendRecreateDestinationResponse>;
    /**
     * webBackendRecreateSource - Recreate a source
    **/
    webBackendRecreateSource(req: operations.WebBackendRecreateSourceRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendRecreateSourceResponse>;
    /**
     * webBackendUpdateConnection - Update a connection
    **/
    webBackendUpdateConnection(req: operations.WebBackendUpdateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendUpdateConnectionResponse>;
}
export {};
