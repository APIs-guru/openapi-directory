import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://api.ecr-public.{region}.amazonaws.com", "https://api.ecr-public.{region}.amazonaws.com", "http://api.ecr-public.{region}.amazonaws.com.cn", "https://api.ecr-public.{region}.amazonaws.com.cn"];
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
     * batchCheckLayerAvailability - <p>Checks the availability of one or more image layers within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
    **/
    batchCheckLayerAvailability(req: operations.BatchCheckLayerAvailabilityRequest, config?: AxiosRequestConfig): Promise<operations.BatchCheckLayerAvailabilityResponse>;
    /**
     * batchDeleteImage - <p>Deletes a list of specified images within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
    **/
    batchDeleteImage(req: operations.BatchDeleteImageRequest, config?: AxiosRequestConfig): Promise<operations.BatchDeleteImageResponse>;
    /**
     * completeLayerUpload - <p>Informs Amazon ECR that the image layer upload has completed for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
    **/
    completeLayerUpload(req: operations.CompleteLayerUploadRequest, config?: AxiosRequestConfig): Promise<operations.CompleteLayerUploadResponse>;
    /**
     * createRepository - Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
    **/
    createRepository(req: operations.CreateRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateRepositoryResponse>;
    /**
     * deleteRepository - Deletes a repository in a public registry. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option which deletes all images on your behalf before deleting the repository.
    **/
    deleteRepository(req: operations.DeleteRepositoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryResponse>;
    /**
     * deleteRepositoryPolicy - Deletes the repository policy associated with the specified repository.
    **/
    deleteRepositoryPolicy(req: operations.DeleteRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteRepositoryPolicyResponse>;
    /**
     * describeImageTags - Returns the image tag details for a repository in a public registry.
    **/
    describeImageTags(req: operations.DescribeImageTagsRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImageTagsResponse>;
    /**
     * describeImages - <p>Returns metadata about the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
    **/
    describeImages(req: operations.DescribeImagesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeImagesResponse>;
    /**
     * describeRegistries - Returns details for a public registry.
    **/
    describeRegistries(req: operations.DescribeRegistriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRegistriesResponse>;
    /**
     * describeRepositories - Describes repositories in a public registry.
    **/
    describeRepositories(req: operations.DescribeRepositoriesRequest, config?: AxiosRequestConfig): Promise<operations.DescribeRepositoriesResponse>;
    /**
     * getAuthorizationToken - Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
    **/
    getAuthorizationToken(req: operations.GetAuthorizationTokenRequest, config?: AxiosRequestConfig): Promise<operations.GetAuthorizationTokenResponse>;
    /**
     * getRegistryCatalogData - Retrieves catalog metadata for a public registry.
    **/
    getRegistryCatalogData(req: operations.GetRegistryCatalogDataRequest, config?: AxiosRequestConfig): Promise<operations.GetRegistryCatalogDataResponse>;
    /**
     * getRepositoryCatalogData - Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.
    **/
    getRepositoryCatalogData(req: operations.GetRepositoryCatalogDataRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryCatalogDataResponse>;
    /**
     * getRepositoryPolicy - Retrieves the repository policy for the specified repository.
    **/
    getRepositoryPolicy(req: operations.GetRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.GetRepositoryPolicyResponse>;
    /**
     * initiateLayerUpload - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
    **/
    initiateLayerUpload(req: operations.InitiateLayerUploadRequest, config?: AxiosRequestConfig): Promise<operations.InitiateLayerUploadResponse>;
    /**
     * listTagsForResource - List the tags for an Amazon ECR Public resource.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * putImage - <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
    **/
    putImage(req: operations.PutImageRequest, config?: AxiosRequestConfig): Promise<operations.PutImageResponse>;
    /**
     * putRegistryCatalogData - Create or updates the catalog data for a public registry.
    **/
    putRegistryCatalogData(req: operations.PutRegistryCatalogDataRequest, config?: AxiosRequestConfig): Promise<operations.PutRegistryCatalogDataResponse>;
    /**
     * putRepositoryCatalogData - Creates or updates the catalog data for a repository in a public registry.
    **/
    putRepositoryCatalogData(req: operations.PutRepositoryCatalogDataRequest, config?: AxiosRequestConfig): Promise<operations.PutRepositoryCatalogDataResponse>;
    /**
     * setRepositoryPolicy - Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
    **/
    setRepositoryPolicy(req: operations.SetRepositoryPolicyRequest, config?: AxiosRequestConfig): Promise<operations.SetRepositoryPolicyResponse>;
    /**
     * tagResource - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Deletes specified tags from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * uploadLayerPart - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
    **/
    uploadLayerPart(req: operations.UploadLayerPartRequest, config?: AxiosRequestConfig): Promise<operations.UploadLayerPartResponse>;
}
export {};
