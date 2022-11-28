# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
go get openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```go
package main

import (
    "openapi"
    "openapi/pkg/models/shared"
    "openapi/pkg/models/operations"
)

func main() {
    opts := []sdk.SDKOption{
        sdk.WithSecurity(
            shared.Security{
                Hmac: shared.SchemeHmac{
                    APIKey: "YOUR_API_KEY_HERE",
                },
            }
        ),
    }

    s := sdk.New(opts...)
    
    req := operations.AssociateRoleToGroupRequest{
        PathParams: operations.AssociateRoleToGroupPathParams{
            GroupID: "cupiditate",
        },
        Headers: operations.AssociateRoleToGroupHeaders{
            XAmzAlgorithm: "impedit",
            XAmzContentSha256: "voluptas",
            XAmzCredential: "reprehenderit",
            XAmzDate: "nesciunt",
            XAmzSecurityToken: "aut",
            XAmzSignature: "necessitatibus",
            XAmzSignedHeaders: "corrupti",
        },
        Request: operations.AssociateRoleToGroupRequestBody{
            RoleArn: "aspernatur",
        },
    }
    
    res, err := s.Sdk.AssociateRoleToGroup(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AssociateRoleToGroupResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AssociateRoleToGroup` - Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
* `AssociateServiceRoleToAccount` - Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
* `CreateConnectorDefinition` - Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
* `CreateConnectorDefinitionVersion` - Creates a version of a connector definition which has already been defined.
* `CreateCoreDefinition` - Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
* `CreateCoreDefinitionVersion` - Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
* `CreateDeployment` - Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
* `CreateDeviceDefinition` - Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
* `CreateDeviceDefinitionVersion` - Creates a version of a device definition that has already been defined.
* `CreateFunctionDefinition` - Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
* `CreateFunctionDefinitionVersion` - Creates a version of a Lambda function definition that has already been defined.
* `CreateGroup` - Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
* `CreateGroupCertificateAuthority` - Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
* `CreateGroupVersion` - Creates a version of a group which has already been defined.
* `CreateLoggerDefinition` - Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
* `CreateLoggerDefinitionVersion` - Creates a version of a logger definition that has already been defined.
* `CreateResourceDefinition` - Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
* `CreateResourceDefinitionVersion` - Creates a version of a resource definition that has already been defined.
* `CreateSoftwareUpdateJob` - Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
* `CreateSubscriptionDefinition` - Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
* `CreateSubscriptionDefinitionVersion` - Creates a version of a subscription definition which has already been defined.
* `DeleteConnectorDefinition` - Deletes a connector definition.
* `DeleteCoreDefinition` - Deletes a core definition.
* `DeleteDeviceDefinition` - Deletes a device definition.
* `DeleteFunctionDefinition` - Deletes a Lambda function definition.
* `DeleteGroup` - Deletes a group.
* `DeleteLoggerDefinition` - Deletes a logger definition.
* `DeleteResourceDefinition` - Deletes a resource definition.
* `DeleteSubscriptionDefinition` - Deletes a subscription definition.
* `DisassociateRoleFromGroup` - Disassociates the role from a group.
* `DisassociateServiceRoleFromAccount` - Disassociates the service role from your account. Without a service role, deployments will not work.
* `GetAssociatedRole` - Retrieves the role associated with a particular group.
* `GetBulkDeploymentStatus` - Returns the status of a bulk deployment.
* `GetConnectivityInfo` - Retrieves the connectivity information for a core.
* `GetConnectorDefinition` - Retrieves information about a connector definition.
* `GetConnectorDefinitionVersion` - Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
* `GetCoreDefinition` - Retrieves information about a core definition version.
* `GetCoreDefinitionVersion` - Retrieves information about a core definition version.
* `GetDeploymentStatus` - Returns the status of a deployment.
* `GetDeviceDefinition` - Retrieves information about a device definition.
* `GetDeviceDefinitionVersion` - Retrieves information about a device definition version.
* `GetFunctionDefinition` - Retrieves information about a Lambda function definition, including its creation time and latest version.
* `GetFunctionDefinitionVersion` - Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
* `GetGroup` - Retrieves information about a group.
* `GetGroupCertificateAuthority` - Retreives the CA associated with a group. Returns the public key of the CA.
* `GetGroupCertificateConfiguration` - Retrieves the current configuration for the CA used by the group.
* `GetGroupVersion` - Retrieves information about a group version.
* `GetLoggerDefinition` - Retrieves information about a logger definition.
* `GetLoggerDefinitionVersion` - Retrieves information about a logger definition version.
* `GetResourceDefinition` - Retrieves information about a resource definition, including its creation time and latest version.
* `GetResourceDefinitionVersion` - Retrieves information about a resource definition version, including which resources are included in the version.
* `GetServiceRoleForAccount` - Retrieves the service role that is attached to your account.
* `GetSubscriptionDefinition` - Retrieves information about a subscription definition.
* `GetSubscriptionDefinitionVersion` - Retrieves information about a subscription definition version.
* `GetThingRuntimeConfiguration` - Get the runtime configuration of a thing.
* `ListBulkDeploymentDetailedReports` - Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
* `ListBulkDeployments` - Returns a list of bulk deployments.
* `ListConnectorDefinitionVersions` - Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
* `ListConnectorDefinitions` - Retrieves a list of connector definitions.
* `ListCoreDefinitionVersions` - Lists the versions of a core definition.
* `ListCoreDefinitions` - Retrieves a list of core definitions.
* `ListDeployments` - Returns a history of deployments for the group.
* `ListDeviceDefinitionVersions` - Lists the versions of a device definition.
* `ListDeviceDefinitions` - Retrieves a list of device definitions.
* `ListFunctionDefinitionVersions` - Lists the versions of a Lambda function definition.
* `ListFunctionDefinitions` - Retrieves a list of Lambda function definitions.
* `ListGroupCertificateAuthorities` - Retrieves the current CAs for a group.
* `ListGroupVersions` - Lists the versions of a group.
* `ListGroups` - Retrieves a list of groups.
* `ListLoggerDefinitionVersions` - Lists the versions of a logger definition.
* `ListLoggerDefinitions` - Retrieves a list of logger definitions.
* `ListResourceDefinitionVersions` - Lists the versions of a resource definition.
* `ListResourceDefinitions` - Retrieves a list of resource definitions.
* `ListSubscriptionDefinitionVersions` - Lists the versions of a subscription definition.
* `ListSubscriptionDefinitions` - Retrieves a list of subscription definitions.
* `ListTagsForResource` - Retrieves a list of resource tags for a resource arn.
* `ResetDeployments` - Resets a group's deployments.
* `StartBulkDeployment` - Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
* `StopBulkDeployment` - Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
* `TagResource` - Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
* `UntagResource` - Remove resource tags from a Greengrass Resource.
* `UpdateConnectivityInfo` - Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
* `UpdateConnectorDefinition` - Updates a connector definition.
* `UpdateCoreDefinition` - Updates a core definition.
* `UpdateDeviceDefinition` - Updates a device definition.
* `UpdateFunctionDefinition` - Updates a Lambda function definition.
* `UpdateGroup` - Updates a group.
* `UpdateGroupCertificateConfiguration` - Updates the Certificate expiry time for a group.
* `UpdateLoggerDefinition` - Updates a logger definition.
* `UpdateResourceDefinition` - Updates a resource definition.
* `UpdateSubscriptionDefinition` - Updates a subscription definition.
* `UpdateThingRuntimeConfiguration` - Updates the runtime configuration of a thing.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
