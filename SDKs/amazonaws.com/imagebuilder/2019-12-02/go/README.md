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
    
    req := operations.CancelImageCreationRequest{
        Headers: operations.CancelImageCreationHeaders{
            XAmzAlgorithm: "aut",
            XAmzContentSha256: "quo",
            XAmzCredential: "ea",
            XAmzDate: "quis",
            XAmzSecurityToken: "culpa",
            XAmzSignature: "est",
            XAmzSignedHeaders: "rem",
        },
        Request: operations.CancelImageCreationRequestBody{
            ClientToken: "non",
            ImageBuildVersionArn: "aperiam",
        },
    }
    
    res, err := s.Sdk.CancelImageCreation(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.CancelImageCreationResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CancelImageCreation` - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* `CreateComponent` - Creates a new component that can be used to build, validate, test, and assess your image.
* `CreateContainerRecipe` - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* `CreateDistributionConfiguration` - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `CreateImage` -  Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* `CreateImagePipeline` -  Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* `CreateImageRecipe` -  Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* `CreateInfrastructureConfiguration` -  Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* `DeleteComponent` -  Deletes a component build version.
* `DeleteContainerRecipe` - Deletes a container recipe.
* `DeleteDistributionConfiguration` -  Deletes a distribution configuration.
* `DeleteImage` -  Deletes an image.
* `DeleteImagePipeline` -  Deletes an image pipeline.
* `DeleteImageRecipe` -  Deletes an image recipe.
* `DeleteInfrastructureConfiguration` -  Deletes an infrastructure configuration.
* `GetComponent` -  Gets a component object.
* `GetComponentPolicy` -  Gets a component policy.
* `GetContainerRecipe` - Retrieves a container recipe.
* `GetContainerRecipePolicy` - Retrieves the policy for a container recipe.
* `GetDistributionConfiguration` -  Gets a distribution configuration.
* `GetImage` -  Gets an image.
* `GetImagePipeline` -  Gets an image pipeline.
* `GetImagePolicy` -  Gets an image policy.
* `GetImageRecipe` -  Gets an image recipe.
* `GetImageRecipePolicy` -  Gets an image recipe policy.
* `GetInfrastructureConfiguration` -  Gets an infrastructure configuration.
* `ImportComponent` - Imports a component and transforms its data into a component document.
* `ListComponentBuildVersions` - <p> Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder automatically uses a wildcard for that, if applicable.</p> </note>
* `ListComponents` - <p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder automatically uses a wildcard for that, if applicable.</p> </note>
* `ListContainerRecipes` - Returns a list of container recipes.
* `ListDistributionConfigurations` - Returns a list of distribution configurations.
* `ListImageBuildVersions` -  Returns a list of image build versions.
* `ListImagePackages` - List the Packages that are associated with an Image Build Version, as determined by Amazon EC2 Systems Manager Inventory at build time.
* `ListImagePipelineImages` -  Returns a list of images created by the specified pipeline.
* `ListImagePipelines` - Returns a list of image pipelines.
* `ListImageRecipes` -  Returns a list of image recipes.
* `ListImages` -  Returns the list of images that you have access to.
* `ListInfrastructureConfigurations` -  Returns a list of infrastructure configurations.
* `ListTagsForResource` -  Returns the list of tags for the specified resource.
* `PutComponentPolicy` -  Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `PutContainerRecipePolicy` - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* `PutImagePolicy` - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `PutImageRecipePolicy` -  Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `StartImagePipelineExecution` -  Manually triggers a pipeline to create an image.
* `TagResource` -  Adds a tag to a resource.
* `UntagResource` -  Removes a tag from a resource.
* `UpdateDistributionConfiguration` -  Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `UpdateImagePipeline` - <p> Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* `UpdateInfrastructureConfiguration` -  Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
