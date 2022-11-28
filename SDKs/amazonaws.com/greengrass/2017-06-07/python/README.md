# openapi

<!-- Start SDK Installation -->
## SDK Installation

```bash
pip install openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```python
import sdk
from sdk.models import operations, shared

s = sdk.SDK()
s.config_security(
    security=shared.Security(
        hmac=shared.SchemeHmac(
            api_key="YOUR_API_KEY_HERE",
        ),
    )
)
    
req = operations.AssociateRoleToGroupRequest(
    path_params=operations.AssociateRoleToGroupPathParams(
        group_id="cupiditate",
    ),
    headers=operations.AssociateRoleToGroupHeaders(
        x_amz_algorithm="impedit",
        x_amz_content_sha256="voluptas",
        x_amz_credential="reprehenderit",
        x_amz_date="nesciunt",
        x_amz_security_token="aut",
        x_amz_signature="necessitatibus",
        x_amz_signed_headers="corrupti",
    ),
    request=operations.AssociateRoleToGroupRequestBody(
        role_arn="aspernatur",
    ),
)
    
res = s.sdk.associate_role_to_group(req)

if res.associate_role_to_group_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `associate_role_to_group` - Associates a role with a group. Your Greengrass core will use the role to access AWS cloud services. The role's permissions should allow Greengrass core Lambda functions to perform actions against the cloud.
* `associate_service_role_to_account` - Associates a role with your account. AWS IoT Greengrass will use the role to access your Lambda functions and AWS IoT resources. This is necessary for deployments to succeed. The role must have at least minimum permissions in the policy ''AWSGreengrassResourceAccessRolePolicy''.
* `create_connector_definition` - Creates a connector definition. You may provide the initial version of the connector definition now or use ''CreateConnectorDefinitionVersion'' at a later time.
* `create_connector_definition_version` - Creates a version of a connector definition which has already been defined.
* `create_core_definition` - Creates a core definition. You may provide the initial version of the core definition now or use ''CreateCoreDefinitionVersion'' at a later time. Greengrass groups must each contain exactly one Greengrass core.
* `create_core_definition_version` - Creates a version of a core definition that has already been defined. Greengrass groups must each contain exactly one Greengrass core.
* `create_deployment` - Creates a deployment. ''CreateDeployment'' requests are idempotent with respect to the ''X-Amzn-Client-Token'' token and the request parameters.
* `create_device_definition` - Creates a device definition. You may provide the initial version of the device definition now or use ''CreateDeviceDefinitionVersion'' at a later time.
* `create_device_definition_version` - Creates a version of a device definition that has already been defined.
* `create_function_definition` - Creates a Lambda function definition which contains a list of Lambda functions and their configurations to be used in a group. You can create an initial version of the definition by providing a list of Lambda functions and their configurations now, or use ''CreateFunctionDefinitionVersion'' later.
* `create_function_definition_version` - Creates a version of a Lambda function definition that has already been defined.
* `create_group` - Creates a group. You may provide the initial version of the group or use ''CreateGroupVersion'' at a later time. Tip: You can use the ''gg_group_setup'' package (https://github.com/awslabs/aws-greengrass-group-setup) as a library or command-line application to create and deploy Greengrass groups.
* `create_group_certificate_authority` - Creates a CA for the group. If a CA already exists, it will rotate the existing CA.
* `create_group_version` - Creates a version of a group which has already been defined.
* `create_logger_definition` - Creates a logger definition. You may provide the initial version of the logger definition now or use ''CreateLoggerDefinitionVersion'' at a later time.
* `create_logger_definition_version` - Creates a version of a logger definition that has already been defined.
* `create_resource_definition` - Creates a resource definition which contains a list of resources to be used in a group. You can create an initial version of the definition by providing a list of resources now, or use ''CreateResourceDefinitionVersion'' later.
* `create_resource_definition_version` - Creates a version of a resource definition that has already been defined.
* `create_software_update_job` - Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
* `create_subscription_definition` - Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
* `create_subscription_definition_version` - Creates a version of a subscription definition which has already been defined.
* `delete_connector_definition` - Deletes a connector definition.
* `delete_core_definition` - Deletes a core definition.
* `delete_device_definition` - Deletes a device definition.
* `delete_function_definition` - Deletes a Lambda function definition.
* `delete_group` - Deletes a group.
* `delete_logger_definition` - Deletes a logger definition.
* `delete_resource_definition` - Deletes a resource definition.
* `delete_subscription_definition` - Deletes a subscription definition.
* `disassociate_role_from_group` - Disassociates the role from a group.
* `disassociate_service_role_from_account` - Disassociates the service role from your account. Without a service role, deployments will not work.
* `get_associated_role` - Retrieves the role associated with a particular group.
* `get_bulk_deployment_status` - Returns the status of a bulk deployment.
* `get_connectivity_info` - Retrieves the connectivity information for a core.
* `get_connector_definition` - Retrieves information about a connector definition.
* `get_connector_definition_version` - Retrieves information about a connector definition version, including the connectors that the version contains. Connectors are prebuilt modules that interact with local infrastructure, device protocols, AWS, and other cloud services.
* `get_core_definition` - Retrieves information about a core definition version.
* `get_core_definition_version` - Retrieves information about a core definition version.
* `get_deployment_status` - Returns the status of a deployment.
* `get_device_definition` - Retrieves information about a device definition.
* `get_device_definition_version` - Retrieves information about a device definition version.
* `get_function_definition` - Retrieves information about a Lambda function definition, including its creation time and latest version.
* `get_function_definition_version` - Retrieves information about a Lambda function definition version, including which Lambda functions are included in the version and their configurations.
* `get_group` - Retrieves information about a group.
* `get_group_certificate_authority` - Retreives the CA associated with a group. Returns the public key of the CA.
* `get_group_certificate_configuration` - Retrieves the current configuration for the CA used by the group.
* `get_group_version` - Retrieves information about a group version.
* `get_logger_definition` - Retrieves information about a logger definition.
* `get_logger_definition_version` - Retrieves information about a logger definition version.
* `get_resource_definition` - Retrieves information about a resource definition, including its creation time and latest version.
* `get_resource_definition_version` - Retrieves information about a resource definition version, including which resources are included in the version.
* `get_service_role_for_account` - Retrieves the service role that is attached to your account.
* `get_subscription_definition` - Retrieves information about a subscription definition.
* `get_subscription_definition_version` - Retrieves information about a subscription definition version.
* `get_thing_runtime_configuration` - Get the runtime configuration of a thing.
* `list_bulk_deployment_detailed_reports` - Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
* `list_bulk_deployments` - Returns a list of bulk deployments.
* `list_connector_definition_versions` - Lists the versions of a connector definition, which are containers for connectors. Connectors run on the Greengrass core and contain built-in integration with local infrastructure, device protocols, AWS, and other cloud services.
* `list_connector_definitions` - Retrieves a list of connector definitions.
* `list_core_definition_versions` - Lists the versions of a core definition.
* `list_core_definitions` - Retrieves a list of core definitions.
* `list_deployments` - Returns a history of deployments for the group.
* `list_device_definition_versions` - Lists the versions of a device definition.
* `list_device_definitions` - Retrieves a list of device definitions.
* `list_function_definition_versions` - Lists the versions of a Lambda function definition.
* `list_function_definitions` - Retrieves a list of Lambda function definitions.
* `list_group_certificate_authorities` - Retrieves the current CAs for a group.
* `list_group_versions` - Lists the versions of a group.
* `list_groups` - Retrieves a list of groups.
* `list_logger_definition_versions` - Lists the versions of a logger definition.
* `list_logger_definitions` - Retrieves a list of logger definitions.
* `list_resource_definition_versions` - Lists the versions of a resource definition.
* `list_resource_definitions` - Retrieves a list of resource definitions.
* `list_subscription_definition_versions` - Lists the versions of a subscription definition.
* `list_subscription_definitions` - Retrieves a list of subscription definitions.
* `list_tags_for_resource` - Retrieves a list of resource tags for a resource arn.
* `reset_deployments` - Resets a group's deployments.
* `start_bulk_deployment` - Deploys multiple groups in one operation. This action starts the bulk deployment of a specified set of group versions. Each group version deployment will be triggered with an adaptive rate that has a fixed upper limit. We recommend that you include an ''X-Amzn-Client-Token'' token in every ''StartBulkDeployment'' request. These requests are idempotent with respect to the token and the request parameters.
* `stop_bulk_deployment` - Stops the execution of a bulk deployment. This action returns a status of ''Stopping'' until the deployment is stopped. You cannot start a new bulk deployment while a previous deployment is in the ''Stopping'' state. This action doesn't rollback completed deployments or cancel pending deployments.
* `tag_resource` - Adds tags to a Greengrass resource. Valid resources are 'Group', 'ConnectorDefinition', 'CoreDefinition', 'DeviceDefinition', 'FunctionDefinition', 'LoggerDefinition', 'SubscriptionDefinition', 'ResourceDefinition', and 'BulkDeployment'.
* `untag_resource` - Remove resource tags from a Greengrass Resource.
* `update_connectivity_info` - Updates the connectivity information for the core. Any devices that belong to the group which has this core will receive this information in order to find the location of the core and connect to it.
* `update_connector_definition` - Updates a connector definition.
* `update_core_definition` - Updates a core definition.
* `update_device_definition` - Updates a device definition.
* `update_function_definition` - Updates a Lambda function definition.
* `update_group` - Updates a group.
* `update_group_certificate_configuration` - Updates the Certificate expiry time for a group.
* `update_logger_definition` - Updates a logger definition.
* `update_resource_definition` - Updates a resource definition.
* `update_subscription_definition` - Updates a subscription definition.
* `update_thing_runtime_configuration` - Updates the runtime configuration of a thing.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
