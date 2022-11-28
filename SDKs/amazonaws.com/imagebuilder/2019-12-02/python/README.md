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
    
req = operations.CancelImageCreationRequest(
    headers=operations.CancelImageCreationHeaders(
        x_amz_algorithm="aut",
        x_amz_content_sha256="quo",
        x_amz_credential="ea",
        x_amz_date="quis",
        x_amz_security_token="culpa",
        x_amz_signature="est",
        x_amz_signed_headers="rem",
    ),
    request=operations.CancelImageCreationRequestBody(
        client_token="non",
        image_build_version_arn="aperiam",
    ),
)
    
res = s.sdk.cancel_image_creation(req)

if res.cancel_image_creation_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `cancel_image_creation` - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* `create_component` - Creates a new component that can be used to build, validate, test, and assess your image.
* `create_container_recipe` - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* `create_distribution_configuration` - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `create_image` -  Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* `create_image_pipeline` -  Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* `create_image_recipe` -  Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* `create_infrastructure_configuration` -  Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* `delete_component` -  Deletes a component build version.
* `delete_container_recipe` - Deletes a container recipe.
* `delete_distribution_configuration` -  Deletes a distribution configuration.
* `delete_image` -  Deletes an image.
* `delete_image_pipeline` -  Deletes an image pipeline.
* `delete_image_recipe` -  Deletes an image recipe.
* `delete_infrastructure_configuration` -  Deletes an infrastructure configuration.
* `get_component` -  Gets a component object.
* `get_component_policy` -  Gets a component policy.
* `get_container_recipe` - Retrieves a container recipe.
* `get_container_recipe_policy` - Retrieves the policy for a container recipe.
* `get_distribution_configuration` -  Gets a distribution configuration.
* `get_image` -  Gets an image.
* `get_image_pipeline` -  Gets an image pipeline.
* `get_image_policy` -  Gets an image policy.
* `get_image_recipe` -  Gets an image recipe.
* `get_image_recipe_policy` -  Gets an image recipe policy.
* `get_infrastructure_configuration` -  Gets an infrastructure configuration.
* `import_component` - Imports a component and transforms its data into a component document.
* `list_component_build_versions` - <p> Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder automatically uses a wildcard for that, if applicable.</p> </note>
* `list_components` - <p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder automatically uses a wildcard for that, if applicable.</p> </note>
* `list_container_recipes` - Returns a list of container recipes.
* `list_distribution_configurations` - Returns a list of distribution configurations.
* `list_image_build_versions` -  Returns a list of image build versions.
* `list_image_packages` - List the Packages that are associated with an Image Build Version, as determined by Amazon EC2 Systems Manager Inventory at build time.
* `list_image_pipeline_images` -  Returns a list of images created by the specified pipeline.
* `list_image_pipelines` - Returns a list of image pipelines.
* `list_image_recipes` -  Returns a list of image recipes.
* `list_images` -  Returns the list of images that you have access to.
* `list_infrastructure_configurations` -  Returns a list of infrastructure configurations.
* `list_tags_for_resource` -  Returns the list of tags for the specified resource.
* `put_component_policy` -  Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `put_container_recipe_policy` - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* `put_image_policy` - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `put_image_recipe_policy` -  Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `start_image_pipeline_execution` -  Manually triggers a pipeline to create an image.
* `tag_resource` -  Adds a tag to a resource.
* `untag_resource` -  Removes a tag from a resource.
* `update_distribution_configuration` -  Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `update_image_pipeline` - <p> Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* `update_infrastructure_configuration` -  Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
