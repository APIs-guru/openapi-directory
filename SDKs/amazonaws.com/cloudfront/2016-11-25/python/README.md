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
    
req = operations.CreateCloudFrontOriginAccessIdentity20161125Request(
    headers=operations.CreateCloudFrontOriginAccessIdentity20161125Headers(
        x_amz_algorithm="et",
        x_amz_content_sha256="ea",
        x_amz_credential="aliquid",
        x_amz_date="voluptate",
        x_amz_security_token="beatae",
        x_amz_signature="tempore",
        x_amz_signed_headers="reprehenderit",
    ),
    request="nostrum".encode(),
)
    
res = s.sdk.create_cloud_front_origin_access_identity2016_11_25(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_cloud_front_origin_access_identity2016_11_25` - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
* `create_distribution2016_11_25` - Creates a new web distribution. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.
* `create_distribution_with_tags2016_11_25` - Create a new distribution with tags.
* `create_invalidation2016_11_25` - Create a new invalidation. 
* `create_streaming_distribution2016_11_25` - <p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
* `create_streaming_distribution_with_tags2016_11_25` - Create a new streaming distribution with tags.
* `delete_cloud_front_origin_access_identity2016_11_25` - Delete an origin access identity. 
* `delete_distribution2016_11_25` - Delete a distribution. 
* `delete_streaming_distribution2016_11_25` - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* `get_cloud_front_origin_access_identity2016_11_25` - Get the information about an origin access identity. 
* `get_cloud_front_origin_access_identity_config2016_11_25` - Get the configuration information about an origin access identity. 
* `get_distribution2016_11_25` - Get the information about a distribution. 
* `get_distribution_config2016_11_25` - Get the configuration information about a distribution. 
* `get_invalidation2016_11_25` - Get the information about an invalidation. 
* `get_streaming_distribution2016_11_25` - Gets information about a specified RTMP distribution, including the distribution configuration.
* `get_streaming_distribution_config2016_11_25` - Get the configuration information about a streaming distribution. 
* `list_cloud_front_origin_access_identities2016_11_25` - Lists origin access identities.
* `list_distributions2016_11_25` - List distributions. 
* `list_distributions_by_web_acl_id2016_11_25` - List the distributions that are associated with a specified AWS WAF web ACL. 
* `list_invalidations2016_11_25` - Lists invalidation batches. 
* `list_streaming_distributions2016_11_25` - List streaming distributions. 
* `list_tags_for_resource2016_11_25` - List tags for a CloudFront resource.
* `tag_resource2016_11_25` - Add tags to a CloudFront resource.
* `untag_resource2016_11_25` - Remove tags from a CloudFront resource.
* `update_cloud_front_origin_access_identity2016_11_25` - Update an origin access identity. 
* `update_distribution2016_11_25` - Update a distribution. 
* `update_streaming_distribution2016_11_25` - Update a streaming distribution. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
