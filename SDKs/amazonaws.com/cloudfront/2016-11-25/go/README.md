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
    
    req := operations.CreateCloudFrontOriginAccessIdentity20161125Request{
        Headers: operations.CreateCloudFrontOriginAccessIdentity20161125Headers{
            XAmzAlgorithm: "et",
            XAmzContentSha256: "ea",
            XAmzCredential: "aliquid",
            XAmzDate: "voluptate",
            XAmzSecurityToken: "beatae",
            XAmzSignature: "tempore",
            XAmzSignedHeaders: "reprehenderit",
        },
        Request: []byte("nostrum"),
    }
    
    res, err := s.Sdk.CreateCloudFrontOriginAccessIdentity20161125(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.Body != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `CreateCloudFrontOriginAccessIdentity20161125` - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
* `CreateDistribution20161125` - Creates a new web distribution. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.
* `CreateDistributionWithTags20161125` - Create a new distribution with tags.
* `CreateInvalidation20161125` - Create a new invalidation. 
* `CreateStreamingDistribution20161125` - <p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
* `CreateStreamingDistributionWithTags20161125` - Create a new streaming distribution with tags.
* `DeleteCloudFrontOriginAccessIdentity20161125` - Delete an origin access identity. 
* `DeleteDistribution20161125` - Delete a distribution. 
* `DeleteStreamingDistribution20161125` - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
* `GetCloudFrontOriginAccessIdentity20161125` - Get the information about an origin access identity. 
* `GetCloudFrontOriginAccessIdentityConfig20161125` - Get the configuration information about an origin access identity. 
* `GetDistribution20161125` - Get the information about a distribution. 
* `GetDistributionConfig20161125` - Get the configuration information about a distribution. 
* `GetInvalidation20161125` - Get the information about an invalidation. 
* `GetStreamingDistribution20161125` - Gets information about a specified RTMP distribution, including the distribution configuration.
* `GetStreamingDistributionConfig20161125` - Get the configuration information about a streaming distribution. 
* `ListCloudFrontOriginAccessIdentities20161125` - Lists origin access identities.
* `ListDistributions20161125` - List distributions. 
* `ListDistributionsByWebACLId20161125` - List the distributions that are associated with a specified AWS WAF web ACL. 
* `ListInvalidations20161125` - Lists invalidation batches. 
* `ListStreamingDistributions20161125` - List streaming distributions. 
* `ListTagsForResource20161125` - List tags for a CloudFront resource.
* `TagResource20161125` - Add tags to a CloudFront resource.
* `UntagResource20161125` - Remove tags from a CloudFront resource.
* `UpdateCloudFrontOriginAccessIdentity20161125` - Update an origin access identity. 
* `UpdateDistribution20161125` - Update a distribution. 
* `UpdateStreamingDistribution20161125` - Update a streaming distribution. 

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
