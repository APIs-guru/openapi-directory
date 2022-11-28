import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://greengrass.{region}.amazonaws.com", "https://greengrass.{region}.amazonaws.com", "http://greengrass.{region}.amazonaws.com.cn", "https://greengrass.{region}.amazonaws.com.cn"];
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
     * associateRoleToGroup - Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
    **/
    associateRoleToGroup(req: operations.AssociateRoleToGroupRequest, config?: AxiosRequestConfig): Promise<operations.AssociateRoleToGroupResponse>;
    /**
     * associateServiceRoleToAccount - Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
    **/
    associateServiceRoleToAccount(req: operations.AssociateServiceRoleToAccountRequest, config?: AxiosRequestConfig): Promise<operations.AssociateServiceRoleToAccountResponse>;
    /**
     * createConnectorDefinition - Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
    **/
    createConnectorDefinition(req: operations.CreateConnectorDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectorDefinitionResponse>;
    /**
     * createConnectorDefinitionVersion - Creates a version of a connector definition which has already been defined.
    **/
    createConnectorDefinitionVersion(req: operations.CreateConnectorDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateConnectorDefinitionVersionResponse>;
    /**
     * createCoreDefinition - Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
    **/
    createCoreDefinition(req: operations.CreateCoreDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCoreDefinitionResponse>;
    /**
     * createCoreDefinitionVersion - Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
    **/
    createCoreDefinitionVersion(req: operations.CreateCoreDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateCoreDefinitionVersionResponse>;
    /**
     * createDeployment - Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
    **/
    createDeployment(req: operations.CreateDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeploymentResponse>;
    /**
     * createDeviceDefinition - Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
    **/
    createDeviceDefinition(req: operations.CreateDeviceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceDefinitionResponse>;
    /**
     * createDeviceDefinitionVersion - Creates a version of a device definition that has already been defined.
    **/
    createDeviceDefinitionVersion(req: operations.CreateDeviceDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateDeviceDefinitionVersionResponse>;
    /**
     * createFunctionDefinition - Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
    **/
    createFunctionDefinition(req: operations.CreateFunctionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateFunctionDefinitionResponse>;
    /**
     * createFunctionDefinitionVersion - Creates a version of a Lambda function definition that has already been defined.
    **/
    createFunctionDefinitionVersion(req: operations.CreateFunctionDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateFunctionDefinitionVersionResponse>;
    /**
     * createGroup - Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
    **/
    createGroup(req: operations.CreateGroupRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupResponse>;
    /**
     * createGroupCertificateAuthority - Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
    **/
    createGroupCertificateAuthority(req: operations.CreateGroupCertificateAuthorityRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupCertificateAuthorityResponse>;
    /**
     * createGroupVersion - Creates a version of a group which has already been defined.
    **/
    createGroupVersion(req: operations.CreateGroupVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateGroupVersionResponse>;
    /**
     * createLoggerDefinition - Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
    **/
    createLoggerDefinition(req: operations.CreateLoggerDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateLoggerDefinitionResponse>;
    /**
     * createLoggerDefinitionVersion - Creates a version of a logger definition that has already been defined.
    **/
    createLoggerDefinitionVersion(req: operations.CreateLoggerDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateLoggerDefinitionVersionResponse>;
    /**
     * createResourceDefinition - Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
    **/
    createResourceDefinition(req: operations.CreateResourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourceDefinitionResponse>;
    /**
     * createResourceDefinitionVersion - Creates a version of a resource definition that has already been defined.
    **/
    createResourceDefinitionVersion(req: operations.CreateResourceDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateResourceDefinitionVersionResponse>;
    /**
     * createSoftwareUpdateJob - Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
    **/
    createSoftwareUpdateJob(req: operations.CreateSoftwareUpdateJobRequest, config?: AxiosRequestConfig): Promise<operations.CreateSoftwareUpdateJobResponse>;
    /**
     * createSubscriptionDefinition - Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
    **/
    createSubscriptionDefinition(req: operations.CreateSubscriptionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionDefinitionResponse>;
    /**
     * createSubscriptionDefinitionVersion - Creates a version of a subscription definition which has already been defined.
    **/
    createSubscriptionDefinitionVersion(req: operations.CreateSubscriptionDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.CreateSubscriptionDefinitionVersionResponse>;
    /**
     * deleteConnectorDefinition - Deletes a connector definition.
    **/
    deleteConnectorDefinition(req: operations.DeleteConnectorDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteConnectorDefinitionResponse>;
    /**
     * deleteCoreDefinition - Deletes a core definition.
    **/
    deleteCoreDefinition(req: operations.DeleteCoreDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteCoreDefinitionResponse>;
    /**
     * deleteDeviceDefinition - Deletes a device definition.
    **/
    deleteDeviceDefinition(req: operations.DeleteDeviceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDeviceDefinitionResponse>;
    /**
     * deleteFunctionDefinition - Deletes a Lambda function definition.
    **/
    deleteFunctionDefinition(req: operations.DeleteFunctionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFunctionDefinitionResponse>;
    /**
     * deleteGroup - Deletes a group.
    **/
    deleteGroup(req: operations.DeleteGroupRequest, config?: AxiosRequestConfig): Promise<operations.DeleteGroupResponse>;
    /**
     * deleteLoggerDefinition - Deletes a logger definition.
    **/
    deleteLoggerDefinition(req: operations.DeleteLoggerDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteLoggerDefinitionResponse>;
    /**
     * deleteResourceDefinition - Deletes a resource definition.
    **/
    deleteResourceDefinition(req: operations.DeleteResourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteResourceDefinitionResponse>;
    /**
     * deleteSubscriptionDefinition - Deletes a subscription definition.
    **/
    deleteSubscriptionDefinition(req: operations.DeleteSubscriptionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSubscriptionDefinitionResponse>;
    /**
     * disassociateRoleFromGroup - Disassociates the role from a group.
    **/
    disassociateRoleFromGroup(req: operations.DisassociateRoleFromGroupRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateRoleFromGroupResponse>;
    /**
     * disassociateServiceRoleFromAccount - Disassociates the service role from your account. Without a service role, deployments will not work.
    **/
    disassociateServiceRoleFromAccount(req: operations.DisassociateServiceRoleFromAccountRequest, config?: AxiosRequestConfig): Promise<operations.DisassociateServiceRoleFromAccountResponse>;
    /**
     * getAssociatedRole - Retrieves the role associated with a particular group.
    **/
    getAssociatedRole(req: operations.GetAssociatedRoleRequest, config?: AxiosRequestConfig): Promise<operations.GetAssociatedRoleResponse>;
    /**
     * getBulkDeploymentStatus - Returns the status of a bulk deployment.
    **/
    getBulkDeploymentStatus(req: operations.GetBulkDeploymentStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetBulkDeploymentStatusResponse>;
    /**
     * getConnectivityInfo - Retrieves the connectivity information for a core.
    **/
    getConnectivityInfo(req: operations.GetConnectivityInfoRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectivityInfoResponse>;
    /**
     * getConnectorDefinition - Retrieves information about a connector definition.
    **/
    getConnectorDefinition(req: operations.GetConnectorDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorDefinitionResponse>;
    /**
     * getConnectorDefinitionVersion - Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
    **/
    getConnectorDefinitionVersion(req: operations.GetConnectorDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetConnectorDefinitionVersionResponse>;
    /**
     * getCoreDefinition - Retrieves information about a core definition version.
    **/
    getCoreDefinition(req: operations.GetCoreDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetCoreDefinitionResponse>;
    /**
     * getCoreDefinitionVersion - Retrieves information about a core definition version.
    **/
    getCoreDefinitionVersion(req: operations.GetCoreDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetCoreDefinitionVersionResponse>;
    /**
     * getDeploymentStatus - Returns the status of a deployment.
    **/
    getDeploymentStatus(req: operations.GetDeploymentStatusRequest, config?: AxiosRequestConfig): Promise<operations.GetDeploymentStatusResponse>;
    /**
     * getDeviceDefinition - Retrieves information about a device definition.
    **/
    getDeviceDefinition(req: operations.GetDeviceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceDefinitionResponse>;
    /**
     * getDeviceDefinitionVersion - Retrieves information about a device definition version.
    **/
    getDeviceDefinitionVersion(req: operations.GetDeviceDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetDeviceDefinitionVersionResponse>;
    /**
     * getFunctionDefinition - Retrieves information about a Lambda function definition, including its creation time and latest version.
    **/
    getFunctionDefinition(req: operations.GetFunctionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionDefinitionResponse>;
    /**
     * getFunctionDefinitionVersion - Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
    **/
    getFunctionDefinitionVersion(req: operations.GetFunctionDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetFunctionDefinitionVersionResponse>;
    /**
     * getGroup - Retrieves information about a group.
    **/
    getGroup(req: operations.GetGroupRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupResponse>;
    /**
     * getGroupCertificateAuthority - Retreives the CA associated with a group. Returns the public key of the CA.
    **/
    getGroupCertificateAuthority(req: operations.GetGroupCertificateAuthorityRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupCertificateAuthorityResponse>;
    /**
     * getGroupCertificateConfiguration - Retrieves the current configuration for the CA used by the group.
    **/
    getGroupCertificateConfiguration(req: operations.GetGroupCertificateConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupCertificateConfigurationResponse>;
    /**
     * getGroupVersion - Retrieves information about a group version.
    **/
    getGroupVersion(req: operations.GetGroupVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetGroupVersionResponse>;
    /**
     * getLoggerDefinition - Retrieves information about a logger definition.
    **/
    getLoggerDefinition(req: operations.GetLoggerDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetLoggerDefinitionResponse>;
    /**
     * getLoggerDefinitionVersion - Retrieves information about a logger definition version.
    **/
    getLoggerDefinitionVersion(req: operations.GetLoggerDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetLoggerDefinitionVersionResponse>;
    /**
     * getResourceDefinition - Retrieves information about a resource definition, including its creation time and latest version.
    **/
    getResourceDefinition(req: operations.GetResourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceDefinitionResponse>;
    /**
     * getResourceDefinitionVersion - Retrieves information about a resource definition version, including which resources are included in the version.
    **/
    getResourceDefinitionVersion(req: operations.GetResourceDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetResourceDefinitionVersionResponse>;
    /**
     * getServiceRoleForAccount - Retrieves the service role that is attached to your account.
    **/
    getServiceRoleForAccount(req: operations.GetServiceRoleForAccountRequest, config?: AxiosRequestConfig): Promise<operations.GetServiceRoleForAccountResponse>;
    /**
     * getSubscriptionDefinition - Retrieves information about a subscription definition.
    **/
    getSubscriptionDefinition(req: operations.GetSubscriptionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionDefinitionResponse>;
    /**
     * getSubscriptionDefinitionVersion - Retrieves information about a subscription definition version.
    **/
    getSubscriptionDefinitionVersion(req: operations.GetSubscriptionDefinitionVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetSubscriptionDefinitionVersionResponse>;
    /**
     * getThingRuntimeConfiguration - Get the runtime configuration of a thing.
    **/
    getThingRuntimeConfiguration(req: operations.GetThingRuntimeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetThingRuntimeConfigurationResponse>;
    /**
     * listBulkDeploymentDetailedReports - Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
    **/
    listBulkDeploymentDetailedReports(req: operations.ListBulkDeploymentDetailedReportsRequest, config?: AxiosRequestConfig): Promise<operations.ListBulkDeploymentDetailedReportsResponse>;
    /**
     * listBulkDeployments - Returns a list of bulk deployments.
    **/
    listBulkDeployments(req: operations.ListBulkDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ListBulkDeploymentsResponse>;
    /**
     * listConnectorDefinitionVersions - Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
    **/
    listConnectorDefinitionVersions(req: operations.ListConnectorDefinitionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorDefinitionVersionsResponse>;
    /**
     * listConnectorDefinitions - Retrieves a list of connector definitions.
    **/
    listConnectorDefinitions(req: operations.ListConnectorDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListConnectorDefinitionsResponse>;
    /**
     * listCoreDefinitionVersions - Lists the versions of a core definition.
    **/
    listCoreDefinitionVersions(req: operations.ListCoreDefinitionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListCoreDefinitionVersionsResponse>;
    /**
     * listCoreDefinitions - Retrieves a list of core definitions.
    **/
    listCoreDefinitions(req: operations.ListCoreDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListCoreDefinitionsResponse>;
    /**
     * listDeployments - Returns a history of deployments for the group.
    **/
    listDeployments(req: operations.ListDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeploymentsResponse>;
    /**
     * listDeviceDefinitionVersions - Lists the versions of a device definition.
    **/
    listDeviceDefinitionVersions(req: operations.ListDeviceDefinitionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceDefinitionVersionsResponse>;
    /**
     * listDeviceDefinitions - Retrieves a list of device definitions.
    **/
    listDeviceDefinitions(req: operations.ListDeviceDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListDeviceDefinitionsResponse>;
    /**
     * listFunctionDefinitionVersions - Lists the versions of a Lambda function definition.
    **/
    listFunctionDefinitionVersions(req: operations.ListFunctionDefinitionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionDefinitionVersionsResponse>;
    /**
     * listFunctionDefinitions - Retrieves a list of Lambda function definitions.
    **/
    listFunctionDefinitions(req: operations.ListFunctionDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListFunctionDefinitionsResponse>;
    /**
     * listGroupCertificateAuthorities - Retrieves the current CAs for a group.
    **/
    listGroupCertificateAuthorities(req: operations.ListGroupCertificateAuthoritiesRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupCertificateAuthoritiesResponse>;
    /**
     * listGroupVersions - Lists the versions of a group.
    **/
    listGroupVersions(req: operations.ListGroupVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupVersionsResponse>;
    /**
     * listGroups - Retrieves a list of groups.
    **/
    listGroups(req: operations.ListGroupsRequest, config?: AxiosRequestConfig): Promise<operations.ListGroupsResponse>;
    /**
     * listLoggerDefinitionVersions - Lists the versions of a logger definition.
    **/
    listLoggerDefinitionVersions(req: operations.ListLoggerDefinitionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListLoggerDefinitionVersionsResponse>;
    /**
     * listLoggerDefinitions - Retrieves a list of logger definitions.
    **/
    listLoggerDefinitions(req: operations.ListLoggerDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListLoggerDefinitionsResponse>;
    /**
     * listResourceDefinitionVersions - Lists the versions of a resource definition.
    **/
    listResourceDefinitionVersions(req: operations.ListResourceDefinitionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceDefinitionVersionsResponse>;
    /**
     * listResourceDefinitions - Retrieves a list of resource definitions.
    **/
    listResourceDefinitions(req: operations.ListResourceDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListResourceDefinitionsResponse>;
    /**
     * listSubscriptionDefinitionVersions - Lists the versions of a subscription definition.
    **/
    listSubscriptionDefinitionVersions(req: operations.ListSubscriptionDefinitionVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscriptionDefinitionVersionsResponse>;
    /**
     * listSubscriptionDefinitions - Retrieves a list of subscription definitions.
    **/
    listSubscriptionDefinitions(req: operations.ListSubscriptionDefinitionsRequest, config?: AxiosRequestConfig): Promise<operations.ListSubscriptionDefinitionsResponse>;
    /**
     * listTagsForResource - Retrieves a list of resource tags for a resource arn.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * resetDeployments - Resets a group's deployments.
    **/
    resetDeployments(req: operations.ResetDeploymentsRequest, config?: AxiosRequestConfig): Promise<operations.ResetDeploymentsResponse>;
    /**
     * startBulkDeployment - Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
    **/
    startBulkDeployment(req: operations.StartBulkDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StartBulkDeploymentResponse>;
    /**
     * stopBulkDeployment - Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
    **/
    stopBulkDeployment(req: operations.StopBulkDeploymentRequest, config?: AxiosRequestConfig): Promise<operations.StopBulkDeploymentResponse>;
    /**
     * tagResource - Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Remove resource tags from a Greengrass Resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateConnectivityInfo - Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
    **/
    updateConnectivityInfo(req: operations.UpdateConnectivityInfoRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectivityInfoResponse>;
    /**
     * updateConnectorDefinition - Updates a connector definition.
    **/
    updateConnectorDefinition(req: operations.UpdateConnectorDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateConnectorDefinitionResponse>;
    /**
     * updateCoreDefinition - Updates a core definition.
    **/
    updateCoreDefinition(req: operations.UpdateCoreDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateCoreDefinitionResponse>;
    /**
     * updateDeviceDefinition - Updates a device definition.
    **/
    updateDeviceDefinition(req: operations.UpdateDeviceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDeviceDefinitionResponse>;
    /**
     * updateFunctionDefinition - Updates a Lambda function definition.
    **/
    updateFunctionDefinition(req: operations.UpdateFunctionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFunctionDefinitionResponse>;
    /**
     * updateGroup - Updates a group.
    **/
    updateGroup(req: operations.UpdateGroupRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupResponse>;
    /**
     * updateGroupCertificateConfiguration - Updates the Certificate expiry time for a group.
    **/
    updateGroupCertificateConfiguration(req: operations.UpdateGroupCertificateConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateGroupCertificateConfigurationResponse>;
    /**
     * updateLoggerDefinition - Updates a logger definition.
    **/
    updateLoggerDefinition(req: operations.UpdateLoggerDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLoggerDefinitionResponse>;
    /**
     * updateResourceDefinition - Updates a resource definition.
    **/
    updateResourceDefinition(req: operations.UpdateResourceDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateResourceDefinitionResponse>;
    /**
     * updateSubscriptionDefinition - Updates a subscription definition.
    **/
    updateSubscriptionDefinition(req: operations.UpdateSubscriptionDefinitionRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSubscriptionDefinitionResponse>;
    /**
     * updateThingRuntimeConfiguration - Updates the runtime configuration of a thing.
    **/
    updateThingRuntimeConfiguration(req: operations.UpdateThingRuntimeConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateThingRuntimeConfigurationResponse>;
}
export {};
