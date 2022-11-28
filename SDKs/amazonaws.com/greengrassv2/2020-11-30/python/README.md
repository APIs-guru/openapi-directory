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
    
req = operations.BatchAssociateClientDeviceWithCoreDeviceRequest(
    path_params=operations.BatchAssociateClientDeviceWithCoreDevicePathParams(
        core_device_thing_name="tempore",
    ),
    headers=operations.BatchAssociateClientDeviceWithCoreDeviceHeaders(
        x_amz_algorithm="saepe",
        x_amz_content_sha256="aut",
        x_amz_credential="est",
        x_amz_date="odit",
        x_amz_security_token="et",
        x_amz_signature="debitis",
        x_amz_signed_headers="voluptates",
    ),
    request=operations.BatchAssociateClientDeviceWithCoreDeviceRequestBody(
        entries=[
            shared.AssociateClientDeviceWithCoreDeviceEntry(
                thing_name="odio",
            ),
            shared.AssociateClientDeviceWithCoreDeviceEntry(
                thing_name="molestiae",
            ),
        ],
    ),
)
    
res = s.sdk.batch_associate_client_device_with_core_device(req)

if res.batch_associate_client_device_with_core_device_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_associate_client_device_with_core_device` - <p>Associate a list of client devices with a core device. Use this API operation to specify which client devices can discover a core device through cloud discovery. With cloud discovery, client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <note> <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core device over MQTT. You can connect client devices to a core device to sync MQTT messages and data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> </note>
* `batch_disassociate_client_device_from_core_device` - Disassociate a list of client devices from a core device. After you disassociate a client device from a core device, the client device won't be able to use cloud discovery to retrieve the core device's connectivity information and certificates.
* `cancel_deployment` - Cancels a deployment. This operation cancels the deployment for devices that haven't yet received it. If a device already received the deployment, this operation doesn't change anything for that device.
* `create_component_version` - <p>Creates a component. Components are software that run on Greengrass core devices. After you develop and test a component on your core device, you can use this operation to upload your component to IoT Greengrass. Then, you can deploy the component to other core devices.</p> <p>You can use this operation to do the following:</p> <ul> <li> <p> <b>Create components from recipes</b> </p> <p>Create a component from a recipe, which is a file that defines the component's metadata, parameters, dependencies, lifecycle, artifacts, and platform capability. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/component-recipe-reference.html">IoT Greengrass component recipe reference</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p> <p>To create a component from a recipe, specify <code>inlineRecipe</code> when you call this operation.</p> </li> <li> <p> <b>Create components from Lambda functions</b> </p> <p>Create a component from an Lambda function that runs on IoT Greengrass. This creates a recipe and artifacts from the Lambda function's deployment package. You can use this operation to migrate Lambda functions from IoT Greengrass V1 to IoT Greengrass V2.</p> <p>This function only accepts Lambda functions that use the following runtimes:</p> <ul> <li> <p>Python 2.7 – <code>python2.7</code> </p> </li> <li> <p>Python 3.7 – <code>python3.7</code> </p> </li> <li> <p>Python 3.8 – <code>python3.8</code> </p> </li> <li> <p>Java 8 – <code>java8</code> </p> </li> <li> <p>Node.js 10 – <code>nodejs10.x</code> </p> </li> <li> <p>Node.js 12 – <code>nodejs12.x</code> </p> </li> </ul> <p>To create a component from a Lambda function, specify <code>lambdaFunction</code> when you call this operation.</p> </li> </ul>
* `create_deployment` - <p>Creates a continuous deployment for a target, which is a Greengrass core device or group of core devices. When you add a new core device to a group of core devices that has a deployment, IoT Greengrass deploys that group's deployment to the new device.</p> <p>You can define one deployment for each target. When you create a new deployment for a target that has an existing deployment, you replace the previous deployment. IoT Greengrass applies the new deployment to the target devices.</p> <p>Every deployment has a revision number that indicates how many deployment revisions you define for a target. Use this operation to create a new revision of an existing deployment. This operation returns the revision number of the new deployment when you create it.</p> <p>For more information, see the <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/create-deployments.html">Create deployments</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
* `delete_component` - <p>Deletes a version of a component from IoT Greengrass.</p> <note> <p>This operation deletes the component's recipe and artifacts. As a result, deployments that refer to this component version will fail. If you have deployments that use this component version, you can remove the component from the deployment or update the deployment to use a valid version.</p> </note>
* `delete_core_device` - Deletes a Greengrass core device, which is an IoT thing. This operation removes the core device from the list of core devices. This operation doesn't delete the IoT thing. For more information about how to delete the IoT thing, see <a href="https://docs.aws.amazon.com/iot/latest/apireference/API_DeleteThing.html">DeleteThing</a> in the <i>IoT API Reference</i>.
* `describe_component` - Retrieves metadata for a version of a component.
* `get_component` - Gets the recipe for a version of a component. Core devices can call this operation to identify the artifacts and requirements to install a component.
* `get_component_version_artifact` - Gets the pre-signed URL to download a public component artifact. Core devices call this operation to identify the URL that they can use to download an artifact to install.
* `get_core_device` - Retrieves metadata for a Greengrass core device.
* `get_deployment` - Gets a deployment. Deployments define the components that run on Greengrass core devices.
* `list_client_devices_associated_with_core_device` - Retrieves a paginated list of client devices that are associated with a core device.
* `list_component_versions` - Retrieves a paginated list of all versions for a component. Greater versions are listed first.
* `list_components` - Retrieves a paginated list of component summaries. This list includes components that you have permission to view.
* `list_core_devices` - Retrieves a paginated list of Greengrass core devices.
* `list_deployments` - Retrieves a paginated list of deployments.
* `list_effective_deployments` - Retrieves a paginated list of deployment jobs that IoT Greengrass sends to Greengrass core devices.
* `list_installed_components` - Retrieves a paginated list of the components that a Greengrass core device runs.
* `list_tags_for_resource` - Retrieves the list of tags for an IoT Greengrass resource.
* `resolve_component_candidates` - <p>Retrieves a list of components that meet the component, version, and platform requirements of a deployment. Greengrass core devices call this operation when they receive a deployment to identify the components to install.</p> <p>This operation identifies components that meet all dependency requirements for a deployment. If the requirements conflict, then this operation returns an error and the deployment fails. For example, this occurs if component <code>A</code> requires version <code>&gt;2.0.0</code> and component <code>B</code> requires version <code>&lt;2.0.0</code> of a component dependency.</p> <p>When you specify the component candidates to resolve, IoT Greengrass compares each component's digest from the core device with the component's digest in the Amazon Web Services Cloud. If the digests don't match, then IoT Greengrass specifies to use the version from the Amazon Web Services Cloud.</p> <important> <p>To use this operation, you must use the data plane API endpoint and authenticate with an IoT device certificate. For more information, see <a href="https://docs.aws.amazon.com/general/latest/gr/greengrass.html">IoT Greengrass endpoints and quotas</a>.</p> </important>
* `tag_resource` - Adds tags to an IoT Greengrass resource. If a tag already exists for the resource, this operation updates the tag's value.
* `untag_resource` - Removes a tag from an IoT Greengrass resource.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
