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
import { BatchCheckLayerAvailabilityRequest, BatchCheckLayerAvailabilityResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchCheckLayerAvailabilityRequest = {
  headers: {
    xAmzAlgorithm: "voluptate",
    xAmzContentSha256: "exercitationem",
    xAmzCredential: "et",
    xAmzDate: "qui",
    xAmzSecurityToken: "odit",
    xAmzSignature: "qui",
    xAmzSignedHeaders: "et",
    xAmzTarget: "AmazonEC2ContainerRegistry_V20150921.BatchCheckLayerAvailability",
  },
  request: {
    layerDigests: [
      "sint",
    ],
    registryId: "ratione",
    repositoryName: "sed",
  },
};

sdk.sdk.batchCheckLayerAvailability(req).then((res: BatchCheckLayerAvailabilityResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchCheckLayerAvailability` - <p>Checks the availability of one or more image layers in a repository.</p> <p>When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `batchDeleteImage` - <p>Deletes a list of specified images within a repository. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
* `batchGetImage` - <p>Gets detailed information for an image. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>When an image is pulled, the BatchGetImage API is called once to retrieve the image manifest.</p>
* `completeLayerUpload` - <p>Informs Amazon ECR that the image layer upload has completed for a specified registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `createRepository` - Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* `deleteLifecyclePolicy` - Deletes the lifecycle policy associated with the specified repository.
* `deleteRegistryPolicy` - Deletes the registry permissions policy.
* `deleteRepository` - Deletes a repository. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option to delete the repository.
* `deleteRepositoryPolicy` - Deletes the repository policy associated with the specified repository.
* `describeImageScanFindings` - Returns the scan findings for the specified image.
* `describeImages` - <p>Returns metadata about the images in a repository.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
* `describeRegistry` - Describes the settings for a registry. The replication configuration for a repository can be created or updated with the <a>PutReplicationConfiguration</a> API action.
* `describeRepositories` - Describes image repositories in a registry.
* `getAuthorizationToken` - <p>Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours.</p> <p>The <code>authorizationToken</code> returned is a base64 encoded string that can be decoded and used in a <code>docker login</code> command to authenticate to a registry. The CLI offers an <code>get-login-password</code> command that simplifies the login process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Registries.html#registry_auth">Registry authentication</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
* `getDownloadUrlForLayer` - <p>Retrieves the pre-signed Amazon S3 download URL corresponding to an image layer. You can only get URLs for image layers that are referenced in an image.</p> <p>When an image is pulled, the GetDownloadUrlForLayer API is called once per image layer that is not already cached.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `getLifecyclePolicy` - Retrieves the lifecycle policy for the specified repository.
* `getLifecyclePolicyPreview` - Retrieves the results of the lifecycle policy preview request for the specified repository.
* `getRegistryPolicy` - Retrieves the permissions policy for a registry.
* `getRepositoryPolicy` - Retrieves the repository policy for the specified repository.
* `initiateLayerUpload` - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `listImages` - <p>Lists all the image IDs for the specified repository.</p> <p>You can filter images based on whether or not they are tagged by using the <code>tagStatus</code> filter and specifying either <code>TAGGED</code>, <code>UNTAGGED</code> or <code>ANY</code>. For example, you can filter your results to return only <code>UNTAGGED</code> images and then pipe that result to a <a>BatchDeleteImage</a> operation to delete them. Or, you can filter your results to return only <code>TAGGED</code> images to list all of the tags in your repository.</p>
* `listTagsForResource` - List the tags for an Amazon ECR resource.
* `putImage` - <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `putImageScanningConfiguration` - Updates the image scanning configuration for the specified repository.
* `putImageTagMutability` - Updates the image tag mutability settings for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-tag-mutability.html">Image tag mutability</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* `putLifecyclePolicy` - Creates or updates the lifecycle policy for the specified repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/LifecyclePolicies.html">Lifecycle policy template</a>.
* `putRegistryPolicy` - <p>Creates or updates the permissions policy for your registry.</p> <p>A registry policy is used to specify permissions for another Amazon Web Services account and is used when configuring cross-account replication. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/registry-permissions.html">Registry permissions</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p>
* `putReplicationConfiguration` - <p>Creates or updates the replication configuration for a registry. The existing replication configuration for a repository can be retrieved with the <a>DescribeRegistry</a> API action. The first time the PutReplicationConfiguration API is called, a service-linked IAM role is created in your account for the replication process. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/using-service-linked-roles.html">Using service-linked roles for Amazon ECR</a> in the <i>Amazon Elastic Container Registry User Guide</i>.</p> <note> <p>When configuring cross-account replication, the destination account must grant the source account permission to replicate. This permission is controlled using a registry permissions policy. For more information, see <a>PutRegistryPolicy</a>.</p> </note>
* `setRepositoryPolicy` - Applies a repository policy to the specified repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* `startImageScan` - Starts an image vulnerability scan. An image scan can only be started once per 24 hours on an individual image. This limit includes if an image was scanned on initial push. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html">Image scanning</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* `startLifecyclePolicyPreview` - Starts a preview of a lifecycle policy for the specified repository. This allows you to see the results before associating the lifecycle policy with the repository.
* `tagResource` - Adds specified tags to a resource with the specified ARN. Existing tags on a resource are not changed if they are not specified in the request parameters.
* `untagResource` - Deletes specified tags from a resource.
* `uploadLayerPart` - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
