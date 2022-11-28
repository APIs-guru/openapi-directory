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
import { AssociateRoleToGroupRequest, AssociateRoleToGroupResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AssociateRoleToGroupRequest = {
  pathParams: {
    groupId: "cupiditate",
  },
  headers: {
    xAmzAlgorithm: "impedit",
    xAmzContentSha256: "voluptas",
    xAmzCredential: "reprehenderit",
    xAmzDate: "nesciunt",
    xAmzSecurityToken: "aut",
    xAmzSignature: "necessitatibus",
    xAmzSignedHeaders: "corrupti",
  },
  request: {
    roleArn: "aspernatur",
  },
};

sdk.sdk.associateRoleToGroup(req).then((res: AssociateRoleToGroupResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associateRoleToGroup` - Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
* `associateServiceRoleToAccount` - Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
* `createConnectorDefinition` - Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
* `createConnectorDefinitionVersion` - Creates a version of a connector definition which has already been defined.
* `createCoreDefinition` - Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
* `createCoreDefinitionVersion` - Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
* `createDeployment` - Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
* `createDeviceDefinition` - Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
* `createDeviceDefinitionVersion` - Creates a version of a device definition that has already been defined.
* `createFunctionDefinition` - Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
* `createFunctionDefinitionVersion` - Creates a version of a Lambda function definition that has already been defined.
* `createGroup` - Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
* `createGroupCertificateAuthority` - Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
* `createGroupVersion` - Creates a version of a group which has already been defined.
* `createLoggerDefinition` - Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
* `createLoggerDefinitionVersion` - Creates a version of a logger definition that has already been defined.
* `createResourceDefinition` - Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
* `createResourceDefinitionVersion` - Creates a version of a resource definition that has already been defined.
* `createSoftwareUpdateJob` - Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
* `createSubscriptionDefinition` - Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
* `createSubscriptionDefinitionVersion` - Creates a version of a subscription definition which has already been defined.
* `deleteConnectorDefinition` - Deletes a connector definition.
* `deleteCoreDefinition` - Deletes a core definition.
* `deleteDeviceDefinition` - Deletes a device definition.
* `deleteFunctionDefinition` - Deletes a Lambda function definition.
* `deleteGroup` - Deletes a group.
* `deleteLoggerDefinition` - Deletes a logger definition.
* `deleteResourceDefinition` - Deletes a resource definition.
* `deleteSubscriptionDefinition` - Deletes a subscription definition.
* `disassociateRoleFromGroup` - Disassociates the role from a group.
* `disassociateServiceRoleFromAccount` - Disassociates the service role from your account. Without a service role, deployments will not work.
* `getAssociatedRole` - Retrieves the role associated with a particular group.
* `getBulkDeploymentStatus` - Returns the status of a bulk deployment.
* `getConnectivityInfo` - Retrieves the connectivity information for a core.
* `getConnectorDefinition` - Retrieves information about a connector definition.
* `getConnectorDefinitionVersion` - Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
* `getCoreDefinition` - Retrieves information about a core definition version.
* `getCoreDefinitionVersion` - Retrieves information about a core definition version.
* `getDeploymentStatus` - Returns the status of a deployment.
* `getDeviceDefinition` - Retrieves information about a device definition.
* `getDeviceDefinitionVersion` - Retrieves information about a device definition version.
* `getFunctionDefinition` - Retrieves information about a Lambda function definition, including its creation time and latest version.
* `getFunctionDefinitionVersion` - Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
* `getGroup` - Retrieves information about a group.
* `getGroupCertificateAuthority` - Retreives the CA associated with a group. Returns the public key of the CA.
* `getGroupCertificateConfiguration` - Retrieves the current configuration for the CA used by the group.
* `getGroupVersion` - Retrieves information about a group version.
* `getLoggerDefinition` - Retrieves information about a logger definition.
* `getLoggerDefinitionVersion` - Retrieves information about a logger definition version.
* `getResourceDefinition` - Retrieves information about a resource definition, including its creation time and latest version.
* `getResourceDefinitionVersion` - Retrieves information about a resource definition version, including which resources are included in the version.
* `getServiceRoleForAccount` - Retrieves the service role that is attached to your account.
* `getSubscriptionDefinition` - Retrieves information about a subscription definition.
* `getSubscriptionDefinitionVersion` - Retrieves information about a subscription definition version.
* `getThingRuntimeConfiguration` - Get the runtime configuration of a thing.
* `listBulkDeploymentDetailedReports` - Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
* `listBulkDeployments` - Returns a list of bulk deployments.
* `listConnectorDefinitionVersions` - Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
* `listConnectorDefinitions` - Retrieves a list of connector definitions.
* `listCoreDefinitionVersions` - Lists the versions of a core definition.
* `listCoreDefinitions` - Retrieves a list of core definitions.
* `listDeployments` - Returns a history of deployments for the group.
* `listDeviceDefinitionVersions` - Lists the versions of a device definition.
* `listDeviceDefinitions` - Retrieves a list of device definitions.
* `listFunctionDefinitionVersions` - Lists the versions of a Lambda function definition.
* `listFunctionDefinitions` - Retrieves a list of Lambda function definitions.
* `listGroupCertificateAuthorities` - Retrieves the current CAs for a group.
* `listGroupVersions` - Lists the versions of a group.
* `listGroups` - Retrieves a list of groups.
* `listLoggerDefinitionVersions` - Lists the versions of a logger definition.
* `listLoggerDefinitions` - Retrieves a list of logger definitions.
* `listResourceDefinitionVersions` - Lists the versions of a resource definition.
* `listResourceDefinitions` - Retrieves a list of resource definitions.
* `listSubscriptionDefinitionVersions` - Lists the versions of a subscription definition.
* `listSubscriptionDefinitions` - Retrieves a list of subscription definitions.
* `listTagsForResource` - Retrieves a list of resource tags for a resource arn.
* `resetDeployments` - Resets a group's deployments.
* `startBulkDeployment` - Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
* `stopBulkDeployment` - Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
* `tagResource` - Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
* `untagResource` - Remove resource tags from a Greengrass Resource.
* `updateConnectivityInfo` - Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
* `updateConnectorDefinition` - Updates a connector definition.
* `updateCoreDefinition` - Updates a core definition.
* `updateDeviceDefinition` - Updates a device definition.
* `updateFunctionDefinition` - Updates a Lambda function definition.
* `updateGroup` - Updates a group.
* `updateGroupCertificateConfiguration` - Updates the Certificate expiry time for a group.
* `updateLoggerDefinition` - Updates a logger definition.
* `updateResourceDefinition` - Updates a resource definition.
* `updateSubscriptionDefinition` - Updates a subscription definition.
* `updateThingRuntimeConfiguration` - Updates the runtime configuration of a thing.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
