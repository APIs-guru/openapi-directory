import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://imagebuilder.{region}.amazonaws.com", "https://imagebuilder.{region}.amazonaws.com", "http://imagebuilder.{region}.amazonaws.com.cn", "https://imagebuilder.{region}.amazonaws.com.cn"];
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
     * cancelImageCreation - CancelImageCreation cancels the creation of Image. This operation can only be used on images in a non-terminal state.
    **/
    cancelImageCreation(req: operations.CancelImageCreationRequest, config?: AxiosRequestConfig): Promise<operations.CancelImageCreationResponse>;
    /**
     * createComponent - Creates a new component that can be used to build, validate, test, and assess your image.
    **/
    createComponent(req: operations.CreateComponentRequest, config?: AxiosRequestConfig): Promise<operations.CreateComponentResponse>;
    /**
     * createContainerRecipe - Creates a new container recipe. Container recipes define how images are configured, tested, and assessed.
    **/
    createContainerRecipe(req: operations.CreateContainerRecipeRequest, config?: AxiosRequestConfig): Promise<operations.CreateContainerRecipeResponse>;
    /**
     * createDistributionConfiguration - Creates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
    **/
    createDistributionConfiguration(req: operations.CreateDistributionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateDistributionConfigurationResponse>;
    /**
     * createImage -  Creates a new image. This request will create a new image along with all of the configured output resources defined in the distribution configuration. You must specify exactly one recipe for your image, using either a ContainerRecipeArn or an ImageRecipeArn.
    **/
    createImage(req: operations.CreateImageRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageResponse>;
    /**
     * createImagePipeline -  Creates a new image pipeline. Image pipelines enable you to automate the creation and distribution of images.
    **/
    createImagePipeline(req: operations.CreateImagePipelineRequest, config?: AxiosRequestConfig): Promise<operations.CreateImagePipelineResponse>;
    /**
     * createImageRecipe -  Creates a new image recipe. Image recipes define how images are configured, tested, and assessed.
    **/
    createImageRecipe(req: operations.CreateImageRecipeRequest, config?: AxiosRequestConfig): Promise<operations.CreateImageRecipeResponse>;
    /**
     * createInfrastructureConfiguration -  Creates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
    **/
    createInfrastructureConfiguration(req: operations.CreateInfrastructureConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.CreateInfrastructureConfigurationResponse>;
    /**
     * deleteComponent -  Deletes a component build version.
    **/
    deleteComponent(req: operations.DeleteComponentRequest, config?: AxiosRequestConfig): Promise<operations.DeleteComponentResponse>;
    /**
     * deleteContainerRecipe - Deletes a container recipe.
    **/
    deleteContainerRecipe(req: operations.DeleteContainerRecipeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteContainerRecipeResponse>;
    /**
     * deleteDistributionConfiguration -  Deletes a distribution configuration.
    **/
    deleteDistributionConfiguration(req: operations.DeleteDistributionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDistributionConfigurationResponse>;
    /**
     * deleteImage -  Deletes an image.
    **/
    deleteImage(req: operations.DeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageResponse>;
    /**
     * deleteImagePipeline -  Deletes an image pipeline.
    **/
    deleteImagePipeline(req: operations.DeleteImagePipelineRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImagePipelineResponse>;
    /**
     * deleteImageRecipe -  Deletes an image recipe.
    **/
    deleteImageRecipe(req: operations.DeleteImageRecipeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteImageRecipeResponse>;
    /**
     * deleteInfrastructureConfiguration -  Deletes an infrastructure configuration.
    **/
    deleteInfrastructureConfiguration(req: operations.DeleteInfrastructureConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteInfrastructureConfigurationResponse>;
    /**
     * getComponent -  Gets a component object.
    **/
    getComponent(req: operations.GetComponentRequest, config?: AxiosRequestConfig): Promise<operations.GetComponentResponse>;
    /**
     * getComponentPolicy -  Gets a component policy.
    **/
    getComponentPolicy(req: operations.GetComponentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetComponentPolicyResponse>;
    /**
     * getContainerRecipe - Retrieves a container recipe.
    **/
    getContainerRecipe(req: operations.GetContainerRecipeRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerRecipeResponse>;
    /**
     * getContainerRecipePolicy - Retrieves the policy for a container recipe.
    **/
    getContainerRecipePolicy(req: operations.GetContainerRecipePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetContainerRecipePolicyResponse>;
    /**
     * getDistributionConfiguration -  Gets a distribution configuration.
    **/
    getDistributionConfiguration(req: operations.GetDistributionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetDistributionConfigurationResponse>;
    /**
     * getImage -  Gets an image.
    **/
    getImage(req: operations.GetImageRequest, config?: AxiosRequestConfig): Promise<operations.GetImageResponse>;
    /**
     * getImagePipeline -  Gets an image pipeline.
    **/
    getImagePipeline(req: operations.GetImagePipelineRequest, config?: AxiosRequestConfig): Promise<operations.GetImagePipelineResponse>;
    /**
     * getImagePolicy -  Gets an image policy.
    **/
    getImagePolicy(req: operations.GetImagePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetImagePolicyResponse>;
    /**
     * getImageRecipe -  Gets an image recipe.
    **/
    getImageRecipe(req: operations.GetImageRecipeRequest, config?: AxiosRequestConfig): Promise<operations.GetImageRecipeResponse>;
    /**
     * getImageRecipePolicy -  Gets an image recipe policy.
    **/
    getImageRecipePolicy(req: operations.GetImageRecipePolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetImageRecipePolicyResponse>;
    /**
     * getInfrastructureConfiguration -  Gets an infrastructure configuration.
    **/
    getInfrastructureConfiguration(req: operations.GetInfrastructureConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.GetInfrastructureConfigurationResponse>;
    /**
     * importComponent - Imports a component and transforms its data into a component document.
    **/
    importComponent(req: operations.ImportComponentRequest, config?: AxiosRequestConfig): Promise<operations.ImportComponentResponse>;
    /**
     * listComponentBuildVersions - <p> Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder automatically uses a wildcard for that, if applicable.</p> </note>
    **/
    listComponentBuildVersions(req: operations.ListComponentBuildVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentBuildVersionsResponse>;
    /**
     * listComponents - <p>Returns the list of component build versions for the specified semantic version.</p> <note> <p>The semantic version has four nodes: &lt;major&gt;.&lt;minor&gt;.&lt;patch&gt;/&lt;build&gt;. You can assign values for the first three, and can filter on all of them.</p> <p> <b>Filtering:</b> When you retrieve or reference a resource with a semantic version, you can use wildcards (x) to filter your results. When you use a wildcard in any node, all nodes to the right of the first wildcard must also be wildcards. For example, specifying "1.2.x", or "1.x.x" works to filter list results, but neither "1.x.2", nor "x.2.x" will work. You do not have to specify the build - Image Builder automatically uses a wildcard for that, if applicable.</p> </note>
    **/
    listComponents(req: operations.ListComponentsRequest, config?: AxiosRequestConfig): Promise<operations.ListComponentsResponse>;
    /**
     * listContainerRecipes - Returns a list of container recipes.
    **/
    listContainerRecipes(req: operations.ListContainerRecipesRequest, config?: AxiosRequestConfig): Promise<operations.ListContainerRecipesResponse>;
    /**
     * listDistributionConfigurations - Returns a list of distribution configurations.
    **/
    listDistributionConfigurations(req: operations.ListDistributionConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListDistributionConfigurationsResponse>;
    /**
     * listImageBuildVersions -  Returns a list of image build versions.
    **/
    listImageBuildVersions(req: operations.ListImageBuildVersionsRequest, config?: AxiosRequestConfig): Promise<operations.ListImageBuildVersionsResponse>;
    /**
     * listImagePackages - List the Packages that are associated with an Image Build Version, as determined by Amazon EC2 Systems Manager Inventory at build time.
    **/
    listImagePackages(req: operations.ListImagePackagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagePackagesResponse>;
    /**
     * listImagePipelineImages -  Returns a list of images created by the specified pipeline.
    **/
    listImagePipelineImages(req: operations.ListImagePipelineImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagePipelineImagesResponse>;
    /**
     * listImagePipelines - Returns a list of image pipelines.
    **/
    listImagePipelines(req: operations.ListImagePipelinesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagePipelinesResponse>;
    /**
     * listImageRecipes -  Returns a list of image recipes.
    **/
    listImageRecipes(req: operations.ListImageRecipesRequest, config?: AxiosRequestConfig): Promise<operations.ListImageRecipesResponse>;
    /**
     * listImages -  Returns the list of images that you have access to.
    **/
    listImages(req: operations.ListImagesRequest, config?: AxiosRequestConfig): Promise<operations.ListImagesResponse>;
    /**
     * listInfrastructureConfigurations -  Returns a list of infrastructure configurations.
    **/
    listInfrastructureConfigurations(req: operations.ListInfrastructureConfigurationsRequest, config?: AxiosRequestConfig): Promise<operations.ListInfrastructureConfigurationsResponse>;
    /**
     * listTagsForResource -  Returns the list of tags for the specified resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putComponentPolicy -  Applies a policy to a component. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutComponentPolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
    **/
    putComponentPolicy(req: operations.PutComponentPolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutComponentPolicyResponse>;
    /**
     * putContainerRecipePolicy - Applies a policy to a container image. We recommend that you call the RAM API CreateResourceShare (https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html) to share resources. If you call the Image Builder API <code>PutContainerImagePolicy</code>, you must also call the RAM API PromoteResourceShareCreatedFromPolicy (https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html) in order for the resource to be visible to all principals with whom the resource is shared.
    **/
    putContainerRecipePolicy(req: operations.PutContainerRecipePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutContainerRecipePolicyResponse>;
    /**
     * putImagePolicy - Applies a policy to an image. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImagePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
    **/
    putImagePolicy(req: operations.PutImagePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutImagePolicyResponse>;
    /**
     * putImageRecipePolicy -  Applies a policy to an image recipe. We recommend that you call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_CreateResourceShare.html">CreateResourceShare</a> to share resources. If you call the Image Builder API <code>PutImageRecipePolicy</code>, you must also call the RAM API <a href="https://docs.aws.amazon.com/ram/latest/APIReference/API_PromoteResourceShareCreatedFromPolicy.html">PromoteResourceShareCreatedFromPolicy</a> in order for the resource to be visible to all principals with whom the resource is shared.
    **/
    putImageRecipePolicy(req: operations.PutImageRecipePolicyRequest, config?: AxiosRequestConfig): Promise<operations.PutImageRecipePolicyResponse>;
    /**
     * startImagePipelineExecution -  Manually triggers a pipeline to create an image.
    **/
    startImagePipelineExecution(req: operations.StartImagePipelineExecutionRequest, config?: AxiosRequestConfig): Promise<operations.StartImagePipelineExecutionResponse>;
    /**
     * tagResource -  Adds a tag to a resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource -  Removes a tag from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateDistributionConfiguration -  Updates a new distribution configuration. Distribution configurations define and configure the outputs of your pipeline.
    **/
    updateDistributionConfiguration(req: operations.UpdateDistributionConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDistributionConfigurationResponse>;
    /**
     * updateImagePipeline - <p> Updates an image pipeline. Image pipelines enable you to automate the creation and distribution of images.</p> <note> <p>UpdateImagePipeline does not support selective updates for the pipeline. You must specify all of the required properties in the update request, not just the properties that have changed.</p> </note>
    **/
    updateImagePipeline(req: operations.UpdateImagePipelineRequest, config?: AxiosRequestConfig): Promise<operations.UpdateImagePipelineResponse>;
    /**
     * updateInfrastructureConfiguration -  Updates a new infrastructure configuration. An infrastructure configuration defines the environment in which your image will be built and tested.
    **/
    updateInfrastructureConfiguration(req: operations.UpdateInfrastructureConfigurationRequest, config?: AxiosRequestConfig): Promise<operations.UpdateInfrastructureConfigurationResponse>;
}
export {};
