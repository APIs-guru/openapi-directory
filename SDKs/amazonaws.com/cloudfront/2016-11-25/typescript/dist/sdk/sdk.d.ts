import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["https://cloudfront.amazonaws.com", "http://cloudfront.{region}.amazonaws.com.cn", "https://cloudfront.{region}.amazonaws.com.cn"];
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
     * createCloudFrontOriginAccessIdentity20161125 - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
    **/
    createCloudFrontOriginAccessIdentity20161125(req: operations.CreateCloudFrontOriginAccessIdentity20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateCloudFrontOriginAccessIdentity20161125Response>;
    /**
     * createDistribution20161125 - Creates a new web distribution. Send a <code>GET</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.
    **/
    createDistribution20161125(req: operations.CreateDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateDistribution20161125Response>;
    /**
     * createDistributionWithTags20161125 - Create a new distribution with tags.
    **/
    createDistributionWithTags20161125(req: operations.CreateDistributionWithTags20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateDistributionWithTags20161125Response>;
    /**
     * createInvalidation20161125 - Create a new invalidation.
    **/
    createInvalidation20161125(req: operations.CreateInvalidation20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateInvalidation20161125Response>;
    /**
     * createStreamingDistribution20161125 - <p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
    **/
    createStreamingDistribution20161125(req: operations.CreateStreamingDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistribution20161125Response>;
    /**
     * createStreamingDistributionWithTags20161125 - Create a new streaming distribution with tags.
    **/
    createStreamingDistributionWithTags20161125(req: operations.CreateStreamingDistributionWithTags20161125Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistributionWithTags20161125Response>;
    /**
     * deleteCloudFrontOriginAccessIdentity20161125 - Delete an origin access identity.
    **/
    deleteCloudFrontOriginAccessIdentity20161125(req: operations.DeleteCloudFrontOriginAccessIdentity20161125Request, config?: AxiosRequestConfig): Promise<operations.DeleteCloudFrontOriginAccessIdentity20161125Response>;
    /**
     * deleteDistribution20161125 - Delete a distribution.
    **/
    deleteDistribution20161125(req: operations.DeleteDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.DeleteDistribution20161125Response>;
    /**
     * deleteStreamingDistribution20161125 - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    **/
    deleteStreamingDistribution20161125(req: operations.DeleteStreamingDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingDistribution20161125Response>;
    /**
     * getCloudFrontOriginAccessIdentity20161125 - Get the information about an origin access identity.
    **/
    getCloudFrontOriginAccessIdentity20161125(req: operations.GetCloudFrontOriginAccessIdentity20161125Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentity20161125Response>;
    /**
     * getCloudFrontOriginAccessIdentityConfig20161125 - Get the configuration information about an origin access identity.
    **/
    getCloudFrontOriginAccessIdentityConfig20161125(req: operations.GetCloudFrontOriginAccessIdentityConfig20161125Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentityConfig20161125Response>;
    /**
     * getDistribution20161125 - Get the information about a distribution.
    **/
    getDistribution20161125(req: operations.GetDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.GetDistribution20161125Response>;
    /**
     * getDistributionConfig20161125 - Get the configuration information about a distribution.
    **/
    getDistributionConfig20161125(req: operations.GetDistributionConfig20161125Request, config?: AxiosRequestConfig): Promise<operations.GetDistributionConfig20161125Response>;
    /**
     * getInvalidation20161125 - Get the information about an invalidation.
    **/
    getInvalidation20161125(req: operations.GetInvalidation20161125Request, config?: AxiosRequestConfig): Promise<operations.GetInvalidation20161125Response>;
    /**
     * getStreamingDistribution20161125 - Gets information about a specified RTMP distribution, including the distribution configuration.
    **/
    getStreamingDistribution20161125(req: operations.GetStreamingDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistribution20161125Response>;
    /**
     * getStreamingDistributionConfig20161125 - Get the configuration information about a streaming distribution.
    **/
    getStreamingDistributionConfig20161125(req: operations.GetStreamingDistributionConfig20161125Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistributionConfig20161125Response>;
    /**
     * listCloudFrontOriginAccessIdentities20161125 - Lists origin access identities.
    **/
    listCloudFrontOriginAccessIdentities20161125(req: operations.ListCloudFrontOriginAccessIdentities20161125Request, config?: AxiosRequestConfig): Promise<operations.ListCloudFrontOriginAccessIdentities20161125Response>;
    /**
     * listDistributions20161125 - List distributions.
    **/
    listDistributions20161125(req: operations.ListDistributions20161125Request, config?: AxiosRequestConfig): Promise<operations.ListDistributions20161125Response>;
    /**
     * listDistributionsByWebAclId20161125 - List the distributions that are associated with a specified AWS WAF web ACL.
    **/
    listDistributionsByWebAclId20161125(req: operations.ListDistributionsByWebAclId20161125Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByWebAclId20161125Response>;
    /**
     * listInvalidations20161125 - Lists invalidation batches.
    **/
    listInvalidations20161125(req: operations.ListInvalidations20161125Request, config?: AxiosRequestConfig): Promise<operations.ListInvalidations20161125Response>;
    /**
     * listStreamingDistributions20161125 - List streaming distributions.
    **/
    listStreamingDistributions20161125(req: operations.ListStreamingDistributions20161125Request, config?: AxiosRequestConfig): Promise<operations.ListStreamingDistributions20161125Response>;
    /**
     * listTagsForResource20161125 - List tags for a CloudFront resource.
    **/
    listTagsForResource20161125(req: operations.ListTagsForResource20161125Request, config?: AxiosRequestConfig): Promise<operations.ListTagsForResource20161125Response>;
    /**
     * tagResource20161125 - Add tags to a CloudFront resource.
    **/
    tagResource20161125(req: operations.TagResource20161125Request, config?: AxiosRequestConfig): Promise<operations.TagResource20161125Response>;
    /**
     * untagResource20161125 - Remove tags from a CloudFront resource.
    **/
    untagResource20161125(req: operations.UntagResource20161125Request, config?: AxiosRequestConfig): Promise<operations.UntagResource20161125Response>;
    /**
     * updateCloudFrontOriginAccessIdentity20161125 - Update an origin access identity.
    **/
    updateCloudFrontOriginAccessIdentity20161125(req: operations.UpdateCloudFrontOriginAccessIdentity20161125Request, config?: AxiosRequestConfig): Promise<operations.UpdateCloudFrontOriginAccessIdentity20161125Response>;
    /**
     * updateDistribution20161125 - Update a distribution.
    **/
    updateDistribution20161125(req: operations.UpdateDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.UpdateDistribution20161125Response>;
    /**
     * updateStreamingDistribution20161125 - Update a streaming distribution.
    **/
    updateStreamingDistribution20161125(req: operations.UpdateStreamingDistribution20161125Request, config?: AxiosRequestConfig): Promise<operations.UpdateStreamingDistribution20161125Response>;
}
export {};
