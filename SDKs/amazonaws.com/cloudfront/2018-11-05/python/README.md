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
    
req = operations.CreateCloudFrontOriginAccessIdentity20181105Request(
    headers=operations.CreateCloudFrontOriginAccessIdentity20181105Headers(
        x_amz_algorithm="quam",
        x_amz_content_sha256="iste",
        x_amz_credential="architecto",
        x_amz_date="eos",
        x_amz_security_token="aut",
        x_amz_signature="ut",
        x_amz_signed_headers="enim",
    ),
    request="placeat".encode(),
)
    
res = s.sdk.create_cloud_front_origin_access_identity2018_11_05(req)

if res.body is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `create_cloud_front_origin_access_identity2018_11_05` - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
* `create_distribution2018_11_05` - <p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p> <important> <p>When you update a distribution, there are more required fields than when you create a distribution. When you update your distribution by using <a>UpdateDistribution</a>, follow the steps included in the documentation to get the current configuration and then make your updates. This helps to make sure that you include all of the required fields. To view a summary, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </important> <p>If you are using Adobe Flash Media Server's RTMP protocol, you set up a different kind of CloudFront distribution. For more information, see <a>CreateStreamingDistribution</a>.</p>
* `create_distribution_with_tags2018_11_05` - Create a new distribution with tags.
* `create_field_level_encryption_config2018_11_05` - Create a new field-level encryption configuration.
* `create_field_level_encryption_profile2018_11_05` - Create a field-level encryption profile.
* `create_invalidation2018_11_05` - Create a new invalidation. 
* `create_public_key2018_11_05` - Add a new public key to CloudFront to use, for example, for field-level encryption. You can add a maximum of 10 public keys with one AWS account.
* `create_streaming_distribution2018_11_05` - <p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
* `create_streaming_distribution_with_tags2018_11_05` - Create a new streaming distribution with tags.
* `delete_cloud_front_origin_access_identity2018_11_05` - Delete an origin access identity. 
* `delete_distribution2018_11_05` - Delete a distribution. 
* `delete_field_level_encryption_config2018_11_05` - Remove a field-level encryption configuration.
* `delete_field_level_encryption_profile2018_11_05` - Remove a field-level encryption profile.
* `delete_public_key2018_11_05` - Remove a public key you previously added to CloudFront.
* `delete_streaming_distribution2018_11_05` - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* `get_cloud_front_origin_access_identity2018_11_05` - Get the information about an origin access identity. 
* `get_cloud_front_origin_access_identity_config2018_11_05` - Get the configuration information about an origin access identity. 
* `get_distribution2018_11_05` - Get the information about a distribution. 
* `get_distribution_config2018_11_05` - Get the configuration information about a distribution. 
* `get_field_level_encryption2018_11_05` - Get the field-level encryption configuration information.
* `get_field_level_encryption_config2018_11_05` - Get the field-level encryption configuration information.
* `get_field_level_encryption_profile2018_11_05` - Get the field-level encryption profile information.
* `get_field_level_encryption_profile_config2018_11_05` - Get the field-level encryption profile configuration information.
* `get_invalidation2018_11_05` - Get the information about an invalidation. 
* `get_public_key2018_11_05` - Get the public key information.
* `get_public_key_config2018_11_05` - Return public key configuration informaation
* `get_streaming_distribution2018_11_05` - Gets information about a specified RTMP distribution, including the distribution configuration.
* `get_streaming_distribution_config2018_11_05` - Get the configuration information about a streaming distribution. 
* `list_cloud_front_origin_access_identities2018_11_05` - Lists origin access identities.
* `list_distributions2018_11_05` - List distributions. 
* `list_distributions_by_web_acl_id2018_11_05` - List the distributions that are associated with a specified AWS WAF web ACL. 
* `list_field_level_encryption_configs2018_11_05` - List all field-level encryption configurations that have been created in CloudFront for this account.
* `list_field_level_encryption_profiles2018_11_05` - Request a list of field-level encryption profiles that have been created in CloudFront for this account.
* `list_invalidations2018_11_05` - Lists invalidation batches. 
* `list_public_keys2018_11_05` - List all public keys that have been added to CloudFront for this account.
* `list_streaming_distributions2018_11_05` - List streaming distributions. 
* `list_tags_for_resource2018_11_05` - List tags for a CloudFront resource.
* `tag_resource2018_11_05` - Add tags to a CloudFront resource.
* `untag_resource2018_11_05` - Remove tags from a CloudFront resource.
* `update_cloud_front_origin_access_identity2018_11_05` - Update an origin access identity. 
* `update_distribution2018_11_05` - <p>Updates the configuration for a web distribution. </p> <important> <p>When you update a distribution, there are more required fields than when you create a distribution. When you update your distribution by using this API action, follow the steps here to get the current configuration and then make your updates, to make sure that you include all of the required fields. To view a summary, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </important> <p>The update process includes getting the current distribution configuration, updating the XML document that is returned to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p>For information about updating a distribution using the CloudFront console instead, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Submit a <a>GetDistributionConfig</a> request to get the current configuration and an <code>Etag</code> header for the distribution.</p> <note> <p>If you update the distribution again, you must get a new <code>Etag</code> header.</p> </note> </li> <li> <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include your changes. </p> <important> <p>When you edit the XML file, be aware of the following:</p> <ul> <li> <p>You must strip out the ETag parameter that is returned.</p> </li> <li> <p>Additional fields are required when you update a distribution. There may be fields included in the XML file for features that you haven't configured for your distribution. This is expected and required to successfully update the distribution.</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an <code>IllegalUpdate</code> error. </p> </li> <li> <p>The new configuration replaces the existing configuration; the values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. When you add, delete, or replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the values that you want to appear in the updated distribution. In addition, you must update the corresponding <code>Quantity</code> element.</p> </li> </ul> </important> </li> <li> <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p> <ul> <li> <p>In the request body, include the XML document that you updated in Step 2. The request body must include an XML document with a <code>DistributionConfig</code> element.</p> </li> <li> <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p> </li> </ul> </li> <li> <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was successfully updated.</p> </li> <li> <p>Optional: Submit a <a>GetDistribution</a> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> </ol>
* `update_field_level_encryption_config2018_11_05` - Update a field-level encryption configuration. 
* `update_field_level_encryption_profile2018_11_05` - Update a field-level encryption profile. 
* `update_public_key2018_11_05` - Update public key information. Note that the only value you can change is the comment.
* `update_streaming_distribution2018_11_05` - Update a streaming distribution. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
