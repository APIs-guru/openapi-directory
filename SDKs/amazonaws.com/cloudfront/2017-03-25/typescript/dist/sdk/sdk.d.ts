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
     * createCloudFrontOriginAccessIdentity20170325 - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
    **/
    createCloudFrontOriginAccessIdentity20170325(req: operations.CreateCloudFrontOriginAccessIdentity20170325Request, config?: AxiosRequestConfig): Promise<operations.CreateCloudFrontOriginAccessIdentity20170325Response>;
    /**
     * createDistribution20170325 - Creates a new web distribution. Send a <code>POST</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.
    **/
    createDistribution20170325(req: operations.CreateDistribution20170325Request, config?: AxiosRequestConfig): Promise<operations.CreateDistribution20170325Response>;
    /**
     * createDistributionWithTags20170325 - Create a new distribution with tags.
    **/
    createDistributionWithTags20170325(req: operations.CreateDistributionWithTags20170325Request, config?: AxiosRequestConfig): Promise<operations.CreateDistributionWithTags20170325Response>;
    /**
     * createInvalidation20170325 - Create a new invalidation.
    **/
    createInvalidation20170325(req: operations.CreateInvalidation20170325Request, config?: AxiosRequestConfig): Promise<operations.CreateInvalidation20170325Response>;
    /**
     * createStreamingDistribution20170325 - <p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
    **/
    createStreamingDistribution20170325(req: operations.CreateStreamingDistribution20170325Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistribution20170325Response>;
    /**
     * createStreamingDistributionWithTags20170325 - Create a new streaming distribution with tags.
    **/
    createStreamingDistributionWithTags20170325(req: operations.CreateStreamingDistributionWithTags20170325Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistributionWithTags20170325Response>;
    /**
     * deleteCloudFrontOriginAccessIdentity20170325 - Delete an origin access identity.
    **/
    deleteCloudFrontOriginAccessIdentity20170325(req: operations.DeleteCloudFrontOriginAccessIdentity20170325Request, config?: AxiosRequestConfig): Promise<operations.DeleteCloudFrontOriginAccessIdentity20170325Response>;
    /**
     * deleteDistribution20170325 - Delete a distribution.
    **/
    deleteDistribution20170325(req: operations.DeleteDistribution20170325Request, config?: AxiosRequestConfig): Promise<operations.DeleteDistribution20170325Response>;
    deleteServiceLinkedRole20170325(req: operations.DeleteServiceLinkedRole20170325Request, config?: AxiosRequestConfig): Promise<operations.DeleteServiceLinkedRole20170325Response>;
    /**
     * deleteStreamingDistribution20170325 - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    **/
    deleteStreamingDistribution20170325(req: operations.DeleteStreamingDistribution20170325Request, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingDistribution20170325Response>;
    /**
     * getCloudFrontOriginAccessIdentity20170325 - Get the information about an origin access identity.
    **/
    getCloudFrontOriginAccessIdentity20170325(req: operations.GetCloudFrontOriginAccessIdentity20170325Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentity20170325Response>;
    /**
     * getCloudFrontOriginAccessIdentityConfig20170325 - Get the configuration information about an origin access identity.
    **/
    getCloudFrontOriginAccessIdentityConfig20170325(req: operations.GetCloudFrontOriginAccessIdentityConfig20170325Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentityConfig20170325Response>;
    /**
     * getDistribution20170325 - Get the information about a distribution.
    **/
    getDistribution20170325(req: operations.GetDistribution20170325Request, config?: AxiosRequestConfig): Promise<operations.GetDistribution20170325Response>;
    /**
     * getDistributionConfig20170325 - Get the configuration information about a distribution.
    **/
    getDistributionConfig20170325(req: operations.GetDistributionConfig20170325Request, config?: AxiosRequestConfig): Promise<operations.GetDistributionConfig20170325Response>;
    /**
     * getInvalidation20170325 - Get the information about an invalidation.
    **/
    getInvalidation20170325(req: operations.GetInvalidation20170325Request, config?: AxiosRequestConfig): Promise<operations.GetInvalidation20170325Response>;
    /**
     * getStreamingDistribution20170325 - Gets information about a specified RTMP distribution, including the distribution configuration.
    **/
    getStreamingDistribution20170325(req: operations.GetStreamingDistribution20170325Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistribution20170325Response>;
    /**
     * getStreamingDistributionConfig20170325 - Get the configuration information about a streaming distribution.
    **/
    getStreamingDistributionConfig20170325(req: operations.GetStreamingDistributionConfig20170325Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistributionConfig20170325Response>;
    /**
     * listCloudFrontOriginAccessIdentities20170325 - Lists origin access identities.
    **/
    listCloudFrontOriginAccessIdentities20170325(req: operations.ListCloudFrontOriginAccessIdentities20170325Request, config?: AxiosRequestConfig): Promise<operations.ListCloudFrontOriginAccessIdentities20170325Response>;
    /**
     * listDistributions20170325 - List distributions.
    **/
    listDistributions20170325(req: operations.ListDistributions20170325Request, config?: AxiosRequestConfig): Promise<operations.ListDistributions20170325Response>;
    /**
     * listDistributionsByWebAclId20170325 - List the distributions that are associated with a specified AWS WAF web ACL.
    **/
    listDistributionsByWebAclId20170325(req: operations.ListDistributionsByWebAclId20170325Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByWebAclId20170325Response>;
    /**
     * listInvalidations20170325 - Lists invalidation batches.
    **/
    listInvalidations20170325(req: operations.ListInvalidations20170325Request, config?: AxiosRequestConfig): Promise<operations.ListInvalidations20170325Response>;
    /**
     * listStreamingDistributions20170325 - List streaming distributions.
    **/
    listStreamingDistributions20170325(req: operations.ListStreamingDistributions20170325Request, config?: AxiosRequestConfig): Promise<operations.ListStreamingDistributions20170325Response>;
    /**
     * listTagsForResource20170325 - List tags for a CloudFront resource.
    **/
    listTagsForResource20170325(req: operations.ListTagsForResource20170325Request, config?: AxiosRequestConfig): Promise<operations.ListTagsForResource20170325Response>;
    /**
     * tagResource20170325 - Add tags to a CloudFront resource.
    **/
    tagResource20170325(req: operations.TagResource20170325Request, config?: AxiosRequestConfig): Promise<operations.TagResource20170325Response>;
    /**
     * untagResource20170325 - Remove tags from a CloudFront resource.
    **/
    untagResource20170325(req: operations.UntagResource20170325Request, config?: AxiosRequestConfig): Promise<operations.UntagResource20170325Response>;
    /**
     * updateCloudFrontOriginAccessIdentity20170325 - Update an origin access identity.
    **/
    updateCloudFrontOriginAccessIdentity20170325(req: operations.UpdateCloudFrontOriginAccessIdentity20170325Request, config?: AxiosRequestConfig): Promise<operations.UpdateCloudFrontOriginAccessIdentity20170325Response>;
    /**
     * updateDistribution20170325 - <p>Updates the configuration for a web distribution. Perform the following steps.</p> <p>For information about updating a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating or Updating a Web Distribution Using the CloudFront Console </a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Submit a <a>GetDistributionConfig</a> request to get the current configuration and an <code>Etag</code> header for the distribution.</p> <note> <p>If you update the distribution again, you need to get a new <code>Etag</code> header.</p> </note> </li> <li> <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include the desired changes. You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an <code>IllegalUpdate</code> error.</p> <important> <p>The new configuration replaces the existing configuration; the values that you specify in an <code>UpdateDistribution</code> request are not merged into the existing configuration. When you add, delete, or replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the values that you want to appear in the updated distribution. In addition, you must update the corresponding <code>Quantity</code> element.</p> </important> </li> <li> <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p> <ul> <li> <p>In the request body, include the XML document that you updated in Step 2. The request body must include an XML document with a <code>DistributionConfig</code> element.</p> </li> <li> <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p> </li> </ul> </li> <li> <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was successfully updated.</p> </li> <li> <p>Optional: Submit a <a>GetDistribution</a> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a distribution. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values you're actually specifying.</p> </important> </li> </ol>
    **/
    updateDistribution20170325(req: operations.UpdateDistribution20170325Request, config?: AxiosRequestConfig): Promise<operations.UpdateDistribution20170325Response>;
    /**
     * updateStreamingDistribution20170325 - Update a streaming distribution.
    **/
    updateStreamingDistribution20170325(req: operations.UpdateStreamingDistribution20170325Request, config?: AxiosRequestConfig): Promise<operations.UpdateStreamingDistribution20170325Response>;
}
export {};
