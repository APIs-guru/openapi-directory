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
    
req = operations.BatchCheckLayerAvailabilityRequest(
    headers=operations.BatchCheckLayerAvailabilityHeaders(
        x_amz_algorithm="placeat",
        x_amz_content_sha256="ut",
        x_amz_credential="ipsam",
        x_amz_date="aut",
        x_amz_security_token="cum",
        x_amz_signature="aut",
        x_amz_signed_headers="modi",
        x_amz_target="SpencerFrontendService.BatchCheckLayerAvailability",
    ),
    request=shared.BatchCheckLayerAvailabilityRequest(
        layer_digests=[
            "quis",
            "in",
            "velit",
        ],
        registry_id="eligendi",
        repository_name="quis",
    ),
)
    
res = s.sdk.batch_check_layer_availability(req)

if res.batch_check_layer_availability_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_check_layer_availability` - <p>Checks the availability of one or more image layers within a repository in a public registry. When an image is pushed to a repository, each image layer is checked to verify if it has been uploaded before. If it has been uploaded, then the image layer is skipped.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `batch_delete_image` - <p>Deletes a list of specified images within a repository in a public registry. Images are specified with either an <code>imageTag</code> or <code>imageDigest</code>.</p> <p>You can remove a tag from an image by specifying the image's tag in your request. When you remove the last tag from an image, the image is deleted from your repository.</p> <p>You can completely delete an image (and all of its tags) by specifying the image's digest in your request.</p>
* `complete_layer_upload` - <p>Informs Amazon ECR that the image layer upload has completed for a specified public registry, repository name, and upload ID. You can optionally provide a <code>sha256</code> digest of the image layer for data validation purposes.</p> <p>When an image is pushed, the CompleteLayerUpload API is called once per each new image layer to verify that the upload has completed.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `create_repository` - Creates a repository in a public registry. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR repositories</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* `delete_repository` - Deletes a repository in a public registry. If the repository contains images, you must either delete all images in the repository or use the <code>force</code> option which deletes all images on your behalf before deleting the repository.
* `delete_repository_policy` - Deletes the repository policy associated with the specified repository.
* `describe_image_tags` - Returns the image tag details for a repository in a public registry.
* `describe_images` - <p>Returns metadata about the images in a repository in a public registry.</p> <note> <p>Beginning with Docker version 1.9, the Docker client compresses image layers before pushing them to a V2 Docker registry. The output of the <code>docker images</code> command shows the uncompressed image size, so it may return a larger image size than the image sizes returned by <a>DescribeImages</a>.</p> </note>
* `describe_registries` - Returns details for a public registry.
* `describe_repositories` - Describes repositories in a public registry.
* `get_authorization_token` - Retrieves an authorization token. An authorization token represents your IAM authentication credentials and can be used to access any Amazon ECR registry that your IAM principal has access to. The authorization token is valid for 12 hours. This API requires the <code>ecr-public:GetAuthorizationToken</code> and <code>sts:GetServiceBearerToken</code> permissions.
* `get_registry_catalog_data` - Retrieves catalog metadata for a public registry.
* `get_repository_catalog_data` - Retrieve catalog metadata for a repository in a public registry. This metadata is displayed publicly in the Amazon ECR Public Gallery.
* `get_repository_policy` - Retrieves the repository policy for the specified repository.
* `initiate_layer_upload` - <p>Notifies Amazon ECR that you intend to upload an image layer.</p> <p>When an image is pushed, the InitiateLayerUpload API is called once per image layer that has not already been uploaded. Whether or not an image layer has been uploaded is determined by the BatchCheckLayerAvailability API action.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `list_tags_for_resource` - List the tags for an Amazon ECR Public resource.
* `put_image` - <p>Creates or updates the image manifest and tags associated with an image.</p> <p>When an image is pushed and all new image layers have been uploaded, the PutImage API is called once to create or update the image manifest and the tags associated with the image.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>
* `put_registry_catalog_data` - Create or updates the catalog data for a public registry.
* `put_repository_catalog_data` - Creates or updates the catalog data for a repository in a public registry.
* `set_repository_policy` - Applies a repository policy to the specified public repository to control access permissions. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/repository-policies.html">Amazon ECR Repository Policies</a> in the <i>Amazon Elastic Container Registry User Guide</i>.
* `tag_resource` - Associates the specified tags to a resource with the specified <code>resourceArn</code>. If existing tags on a resource are not specified in the request parameters, they are not changed. When a resource is deleted, the tags associated with that resource are deleted as well.
* `untag_resource` - Deletes specified tags from a resource.
* `upload_layer_part` - <p>Uploads an image layer part to Amazon ECR.</p> <p>When an image is pushed, each new image layer is uploaded in parts. The maximum size of each image layer part can be 20971520 bytes (or about 20MB). The UploadLayerPart API is called once per each new image layer part.</p> <note> <p>This operation is used by the Amazon ECR proxy and is not generally used by customers for pulling and pushing images. In most cases, you should use the <code>docker</code> CLI to pull, tag, and push images.</p> </note>

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
