import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
declare type OptsFunc = (sdk: SDK) => void;
export declare function WithServerURL(serverURL: string, params?: Map<string, string>): OptsFunc;
export declare function WithClient(client: AxiosInstance): OptsFunc;
export declare function WithSecurity(security: Security): OptsFunc;
export declare class SDK {
    defaultClient?: AxiosInstance;
    securityClient?: AxiosInstance;
    security?: any;
    serverURL: string;
    constructor(...opts: OptsFunc[]);
    CancelJob(req: operations.CancelJobRequest, config?: AxiosRequestConfig): Promise<operations.CancelJobResponse>;
    CheckConnectionToDestination(req: operations.CheckConnectionToDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToDestinationResponse>;
    CheckConnectionToDestinationForUpdate(req: operations.CheckConnectionToDestinationForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToDestinationForUpdateResponse>;
    CheckConnectionToSource(req: operations.CheckConnectionToSourceRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToSourceResponse>;
    CheckConnectionToSourceForUpdate(req: operations.CheckConnectionToSourceForUpdateRequest, config?: AxiosRequestConfig): Promise<operations.CheckConnectionToSourceForUpdateResponse>;
    CheckOperation(req: operations.CheckOperationRequest, config?: AxiosRequestConfig): Promise<operations.CheckOperationResponse>;
    CreateConnection(req: operations.CreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectionResponse>;
    CreateDestination(req: operations.CreateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDestinationResponse>;
    CreateDestinationDefinition(req: operations.CreateDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDestinationDefinitionResponse>;
    CreateOperation(req: operations.CreateOperationRequest, config?: AxiosRequestConfig): Promise<operations.CreateOperationResponse>;
    CreateSource(req: operations.CreateSourceRequest, config?: AxiosRequestConfig): Promise<operations.CreateSourceResponse>;
    CreateSourceDefinition(req: operations.CreateSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSourceDefinitionResponse>;
    CreateWorkspace(req: operations.CreateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.CreateWorkspaceResponse>;
    DeleteConnection(req: operations.DeleteConnectionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectionResponse>;
    DeleteDestination(req: operations.DeleteDestinationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDestinationResponse>;
    DeleteOperation(req: operations.DeleteOperationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteOperationResponse>;
    DeleteSource(req: operations.DeleteSourceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSourceResponse>;
    DeleteWorkspace(req: operations.DeleteWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWorkspaceResponse>;
    DiscoverSchemaForSource(req: operations.DiscoverSchemaForSourceRequest, config?: AxiosRequestConfig): Promise<operations.DiscoverSchemaForSourceResponse>;
    ExecuteDestinationCheckConnection(req: operations.ExecuteDestinationCheckConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteDestinationCheckConnectionResponse>;
    ExecuteSourceCheckConnection(req: operations.ExecuteSourceCheckConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSourceCheckConnectionResponse>;
    ExecuteSourceDiscoverSchema(req: operations.ExecuteSourceDiscoverSchemaRequest, config?: AxiosRequestConfig): Promise<operations.ExecuteSourceDiscoverSchemaResponse>;
    ExportArchive(config?: AxiosRequestConfig): Promise<operations.ExportArchiveResponse>;
    GetConnection(req: operations.GetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectionResponse>;
    GetDestination(req: operations.GetDestinationRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationResponse>;
    GetDestinationDefinition(req: operations.GetDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationDefinitionResponse>;
    GetDestinationDefinitionSpecification(req: operations.GetDestinationDefinitionSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GetDestinationDefinitionSpecificationResponse>;
    GetHealthCheck(config?: AxiosRequestConfig): Promise<operations.GetHealthCheckResponse>;
    GetJobInfo(req: operations.GetJobInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetJobInfoResponse>;
    GetLogs(req: operations.GetLogsRequest, config?: AxiosRequestConfig): Promise<operations.GetLogsResponse>;
    GetOpenApiSpec(config?: AxiosRequestConfig): Promise<operations.GetOpenApiSpecResponse>;
    GetOperation(req: operations.GetOperationRequest, config?: AxiosRequestConfig): Promise<operations.GetOperationResponse>;
    GetSource(req: operations.GetSourceRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceResponse>;
    GetSourceDefinition(req: operations.GetSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceDefinitionResponse>;
    GetSourceDefinitionSpecification(req: operations.GetSourceDefinitionSpecificationRequest, config?: AxiosRequestConfig): Promise<operations.GetSourceDefinitionSpecificationResponse>;
    GetState(req: operations.GetStateRequest, config?: AxiosRequestConfig): Promise<operations.GetStateResponse>;
    GetWorkspace(req: operations.GetWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceResponse>;
    GetWorkspaceBySlug(req: operations.GetWorkspaceBySlugRequest, config?: AxiosRequestConfig): Promise<operations.GetWorkspaceBySlugResponse>;
    ImportArchive(req: operations.ImportArchiveRequest, config?: AxiosRequestConfig): Promise<operations.ImportArchiveResponse>;
    /**
     * List connections for workspace. Does not return deleted connections.
    **/
    ListConnectionsForWorkspace(req: operations.ListConnectionsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectionsForWorkspaceResponse>;
    ListDestinationDefinitions(config?: AxiosRequestConfig): Promise<operations.ListDestinationDefinitionsResponse>;
    ListDestinationsForWorkspace(req: operations.ListDestinationsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.ListDestinationsForWorkspaceResponse>;
    ListJobsFor(req: operations.ListJobsForRequest, config?: AxiosRequestConfig): Promise<operations.ListJobsForResponse>;
    /**
     * Guaranteed to retrieve the latest information on supported destinations.
    **/
    ListLatestDestinationDefinitions(config?: AxiosRequestConfig): Promise<operations.ListLatestDestinationDefinitionsResponse>;
    /**
     * Guaranteed to retrieve the latest information on supported sources.
    **/
    ListLatestSourceDefinitions(config?: AxiosRequestConfig): Promise<operations.ListLatestSourceDefinitionsResponse>;
    /**
     * List operations for connection.
    **/
    ListOperationsForConnection(req: operations.ListOperationsForConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ListOperationsForConnectionResponse>;
    ListSourceDefinitions(config?: AxiosRequestConfig): Promise<operations.ListSourceDefinitionsResponse>;
    /**
     * List sources for workspace. Does not return deleted sources.
    **/
    ListSourcesForWorkspace(req: operations.ListSourcesForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.ListSourcesForWorkspaceResponse>;
    ListWorkspaces(config?: AxiosRequestConfig): Promise<operations.ListWorkspacesResponse>;
    ResetConnection(req: operations.ResetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.ResetConnectionResponse>;
    SyncConnection(req: operations.SyncConnectionRequest, config?: AxiosRequestConfig): Promise<operations.SyncConnectionResponse>;
    TryNotificationConfig(req: operations.TryNotificationConfigRequest, config?: AxiosRequestConfig): Promise<operations.TryNotificationConfigResponse>;
    UpdateConnection(req: operations.UpdateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectionResponse>;
    UpdateDestination(req: operations.UpdateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationResponse>;
    UpdateDestinationDefinition(req: operations.UpdateDestinationDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDestinationDefinitionResponse>;
    UpdateOperation(req: operations.UpdateOperationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateOperationResponse>;
    UpdateSource(req: operations.UpdateSourceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceResponse>;
    UpdateSourceDefinition(req: operations.UpdateSourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSourceDefinitionResponse>;
    UpdateWorkspace(req: operations.UpdateWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.UpdateWorkspaceResponse>;
    WebBackendCreateConnection(req: operations.WebBackendCreateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendCreateConnectionResponse>;
    WebBackendGetConnection(req: operations.WebBackendGetConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendGetConnectionResponse>;
    WebBackendListConnectionsForWorkspace(req: operations.WebBackendListConnectionsForWorkspaceRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendListConnectionsForWorkspaceResponse>;
    WebBackendRecreateDestination(req: operations.WebBackendRecreateDestinationRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendRecreateDestinationResponse>;
    WebBackendRecreateSource(req: operations.WebBackendRecreateSourceRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendRecreateSourceResponse>;
    WebBackendUpdateConnection(req: operations.WebBackendUpdateConnectionRequest, config?: AxiosRequestConfig): Promise<operations.WebBackendUpdateConnectionResponse>;
}
export {};
