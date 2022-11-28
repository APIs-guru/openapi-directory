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
import { CancelImageCreationRequest, CancelImageCreationResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: CancelImageCreationRequest = {
  headers: {
    xAmzAlgorithm: "aut",
    xAmzContentSha256: "quo",
    xAmzCredential: "ea",
    xAmzDate: "quis",
    xAmzSecurityToken: "culpa",
    xAmzSignature: "est",
    xAmzSignedHeaders: "rem",
  },
  request: {
    clientToken: "non",
    imageBuildVersionArn: "aperiam",
  },
};

sdk.sdk.cancelImageCreation(req).then((res: CancelImageCreationResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `cancelImageCreation` - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
* `createComponent` - Creates a new component that can be used to build, validate, test, and assess your image.
* `createContainerRecipe` - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
* `createDistributionConfiguration` - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `createImage` -  Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
* `createImagePipeline` -  Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
* `createImageRecipe` -  Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
* `createInfrastructureConfiguration` -  Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
* `deleteComponent` -  Deletes a component build version.
* `deleteContainerRecipe` - Deletes a container recipe.
* `deleteDistributionConfiguration` -  Deletes a distribution configuration.
* `deleteImage` -  Deletes an image.
* `deleteImagePipeline` -  Deletes an image pipeline.
* `deleteImageRecipe` -  Deletes an image recipe.
* `deleteInfrastructureConfiguration` -  Deletes an infrastructure configuration.
* `getComponent` -  Gets a component object.
* `getComponentPolicy` -  Gets a component policy.
* `getContainerRecipe` - Retrieves a container recipe.
* `getContainerRecipePolicy` - Retrieves the policy for a container recipe.
* `getDistributionConfiguration` -  Gets a distribution configuration.
* `getImage` -  Gets an image.
* `getImagePipeline` -  Gets an image pipeline.
* `getImagePolicy` -  Gets an image policy.
* `getImageRecipe` -  Gets an image recipe.
* `getImageRecipePolicy` -  Gets an image recipe policy.
* `getInfrastructureConfiguration` -  Gets an infrastructure configuration.
* `importComponent` - Imports a component and transforms its data into a component document.
* `listComponentBuildVersions` - <p> Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder automatically uses a wildcard for that, if applicable.</p> </note>
* `listComponents` - <p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder automatically uses a wildcard for that, if applicable.</p> </note>
* `listContainerRecipes` - Returns a list of container recipes.
* `listDistributionConfigurations` - Returns a list of distribution configurations.
* `listImageBuildVersions` -  Returns a list of image build versions.
* `listImagePackages` - List the Packages that are associated with an Image Build Version, as determined by Amazon EC2 Systems Manager Inventory at build time.
* `listImagePipelineImages` -  Returns a list of images created by the specified pipeline.
* `listImagePipelines` - Returns a list of image pipelines.
* `listImageRecipes` -  Returns a list of image recipes.
* `listImages` -  Returns the list of images that you have access to.
* `listInfrastructureConfigurations` -  Returns a list of infrastructure configurations.
* `listTagsForResource` -  Returns the list of tags for the specified resource.
* `putComponentPolicy` -  Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `putContainerRecipePolicy` - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
* `putImagePolicy` - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `putImageRecipePolicy` -  Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
* `startImagePipelineExecution` -  Manually triggers a pipeline to create an image.
* `tagResource` -  Adds a tag to a resource.
* `untagResource` -  Removes a tag from a resource.
* `updateDistributionConfiguration` -  Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
* `updateImagePipeline` - <p> Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
* `updateInfrastructureConfiguration` -  Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
