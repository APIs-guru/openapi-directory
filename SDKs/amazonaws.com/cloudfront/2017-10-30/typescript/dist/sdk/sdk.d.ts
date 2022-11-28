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
     * createCloudFrontOriginAccessIdentity20171030 - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
    **/
    createCloudFrontOriginAccessIdentity20171030(req: operations.CreateCloudFrontOriginAccessIdentity20171030Request, config?: AxiosRequestConfig): Promise<operations.CreateCloudFrontOriginAccessIdentity20171030Response>;
    /**
     * createDistribution20171030 - Creates a new web distribution. Send a <code>POST</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.
    **/
    createDistribution20171030(req: operations.CreateDistribution20171030Request, config?: AxiosRequestConfig): Promise<operations.CreateDistribution20171030Response>;
    /**
     * createDistributionWithTags20171030 - Create a new distribution with tags.
    **/
    createDistributionWithTags20171030(req: operations.CreateDistributionWithTags20171030Request, config?: AxiosRequestConfig): Promise<operations.CreateDistributionWithTags20171030Response>;
    /**
     * createFieldLevelEncryptionConfig20171030 - Create a new field-level encryption configuration.
    **/
    createFieldLevelEncryptionConfig20171030(req: operations.CreateFieldLevelEncryptionConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.CreateFieldLevelEncryptionConfig20171030Response>;
    /**
     * createFieldLevelEncryptionProfile20171030 - Create a field-level encryption profile.
    **/
    createFieldLevelEncryptionProfile20171030(req: operations.CreateFieldLevelEncryptionProfile20171030Request, config?: AxiosRequestConfig): Promise<operations.CreateFieldLevelEncryptionProfile20171030Response>;
    /**
     * createInvalidation20171030 - Create a new invalidation.
    **/
    createInvalidation20171030(req: operations.CreateInvalidation20171030Request, config?: AxiosRequestConfig): Promise<operations.CreateInvalidation20171030Response>;
    /**
     * createPublicKey20171030 - Add a new public key to CloudFront to use, for example, for field-level encryption. You can add a maximum of 10 public keys with one AWS account.
    **/
    createPublicKey20171030(req: operations.CreatePublicKey20171030Request, config?: AxiosRequestConfig): Promise<operations.CreatePublicKey20171030Response>;
    /**
     * createStreamingDistribution20171030 - <p>Creates a new RMTP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new web distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
    **/
    createStreamingDistribution20171030(req: operations.CreateStreamingDistribution20171030Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistribution20171030Response>;
    /**
     * createStreamingDistributionWithTags20171030 - Create a new streaming distribution with tags.
    **/
    createStreamingDistributionWithTags20171030(req: operations.CreateStreamingDistributionWithTags20171030Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistributionWithTags20171030Response>;
    /**
     * deleteCloudFrontOriginAccessIdentity20171030 - Delete an origin access identity.
    **/
    deleteCloudFrontOriginAccessIdentity20171030(req: operations.DeleteCloudFrontOriginAccessIdentity20171030Request, config?: AxiosRequestConfig): Promise<operations.DeleteCloudFrontOriginAccessIdentity20171030Response>;
    /**
     * deleteDistribution20171030 - Delete a distribution.
    **/
    deleteDistribution20171030(req: operations.DeleteDistribution20171030Request, config?: AxiosRequestConfig): Promise<operations.DeleteDistribution20171030Response>;
    /**
     * deleteFieldLevelEncryptionConfig20171030 - Remove a field-level encryption configuration.
    **/
    deleteFieldLevelEncryptionConfig20171030(req: operations.DeleteFieldLevelEncryptionConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.DeleteFieldLevelEncryptionConfig20171030Response>;
    /**
     * deleteFieldLevelEncryptionProfile20171030 - Remove a field-level encryption profile.
    **/
    deleteFieldLevelEncryptionProfile20171030(req: operations.DeleteFieldLevelEncryptionProfile20171030Request, config?: AxiosRequestConfig): Promise<operations.DeleteFieldLevelEncryptionProfile20171030Response>;
    /**
     * deletePublicKey20171030 - Remove a public key you previously added to CloudFront.
    **/
    deletePublicKey20171030(req: operations.DeletePublicKey20171030Request, config?: AxiosRequestConfig): Promise<operations.DeletePublicKey20171030Response>;
    /**
     * deleteStreamingDistribution20171030 - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    **/
    deleteStreamingDistribution20171030(req: operations.DeleteStreamingDistribution20171030Request, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingDistribution20171030Response>;
    /**
     * getCloudFrontOriginAccessIdentity20171030 - Get the information about an origin access identity.
    **/
    getCloudFrontOriginAccessIdentity20171030(req: operations.GetCloudFrontOriginAccessIdentity20171030Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentity20171030Response>;
    /**
     * getCloudFrontOriginAccessIdentityConfig20171030 - Get the configuration information about an origin access identity.
    **/
    getCloudFrontOriginAccessIdentityConfig20171030(req: operations.GetCloudFrontOriginAccessIdentityConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentityConfig20171030Response>;
    /**
     * getDistribution20171030 - Get the information about a distribution.
    **/
    getDistribution20171030(req: operations.GetDistribution20171030Request, config?: AxiosRequestConfig): Promise<operations.GetDistribution20171030Response>;
    /**
     * getDistributionConfig20171030 - Get the configuration information about a distribution.
    **/
    getDistributionConfig20171030(req: operations.GetDistributionConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.GetDistributionConfig20171030Response>;
    /**
     * getFieldLevelEncryption20171030 - Get the field-level encryption configuration information.
    **/
    getFieldLevelEncryption20171030(req: operations.GetFieldLevelEncryption20171030Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryption20171030Response>;
    /**
     * getFieldLevelEncryptionConfig20171030 - Get the field-level encryption configuration information.
    **/
    getFieldLevelEncryptionConfig20171030(req: operations.GetFieldLevelEncryptionConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionConfig20171030Response>;
    /**
     * getFieldLevelEncryptionProfile20171030 - Get the field-level encryption profile information.
    **/
    getFieldLevelEncryptionProfile20171030(req: operations.GetFieldLevelEncryptionProfile20171030Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionProfile20171030Response>;
    /**
     * getFieldLevelEncryptionProfileConfig20171030 - Get the field-level encryption profile configuration information.
    **/
    getFieldLevelEncryptionProfileConfig20171030(req: operations.GetFieldLevelEncryptionProfileConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionProfileConfig20171030Response>;
    /**
     * getInvalidation20171030 - Get the information about an invalidation.
    **/
    getInvalidation20171030(req: operations.GetInvalidation20171030Request, config?: AxiosRequestConfig): Promise<operations.GetInvalidation20171030Response>;
    /**
     * getPublicKey20171030 - Get the public key information.
    **/
    getPublicKey20171030(req: operations.GetPublicKey20171030Request, config?: AxiosRequestConfig): Promise<operations.GetPublicKey20171030Response>;
    /**
     * getPublicKeyConfig20171030 - Return public key configuration informaation
    **/
    getPublicKeyConfig20171030(req: operations.GetPublicKeyConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.GetPublicKeyConfig20171030Response>;
    /**
     * getStreamingDistribution20171030 - Gets information about a specified RTMP distribution, including the distribution configuration.
    **/
    getStreamingDistribution20171030(req: operations.GetStreamingDistribution20171030Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistribution20171030Response>;
    /**
     * getStreamingDistributionConfig20171030 - Get the configuration information about a streaming distribution.
    **/
    getStreamingDistributionConfig20171030(req: operations.GetStreamingDistributionConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistributionConfig20171030Response>;
    /**
     * listCloudFrontOriginAccessIdentities20171030 - Lists origin access identities.
    **/
    listCloudFrontOriginAccessIdentities20171030(req: operations.ListCloudFrontOriginAccessIdentities20171030Request, config?: AxiosRequestConfig): Promise<operations.ListCloudFrontOriginAccessIdentities20171030Response>;
    /**
     * listDistributions20171030 - List distributions.
    **/
    listDistributions20171030(req: operations.ListDistributions20171030Request, config?: AxiosRequestConfig): Promise<operations.ListDistributions20171030Response>;
    /**
     * listDistributionsByWebAclId20171030 - List the distributions that are associated with a specified AWS WAF web ACL.
    **/
    listDistributionsByWebAclId20171030(req: operations.ListDistributionsByWebAclId20171030Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByWebAclId20171030Response>;
    /**
     * listFieldLevelEncryptionConfigs20171030 - List all field-level encryption configurations that have been created in CloudFront for this account.
    **/
    listFieldLevelEncryptionConfigs20171030(req: operations.ListFieldLevelEncryptionConfigs20171030Request, config?: AxiosRequestConfig): Promise<operations.ListFieldLevelEncryptionConfigs20171030Response>;
    /**
     * listFieldLevelEncryptionProfiles20171030 - Request a list of field-level encryption profiles that have been created in CloudFront for this account.
    **/
    listFieldLevelEncryptionProfiles20171030(req: operations.ListFieldLevelEncryptionProfiles20171030Request, config?: AxiosRequestConfig): Promise<operations.ListFieldLevelEncryptionProfiles20171030Response>;
    /**
     * listInvalidations20171030 - Lists invalidation batches.
    **/
    listInvalidations20171030(req: operations.ListInvalidations20171030Request, config?: AxiosRequestConfig): Promise<operations.ListInvalidations20171030Response>;
    /**
     * listPublicKeys20171030 - List all public keys that have been added to CloudFront for this account.
    **/
    listPublicKeys20171030(req: operations.ListPublicKeys20171030Request, config?: AxiosRequestConfig): Promise<operations.ListPublicKeys20171030Response>;
    /**
     * listStreamingDistributions20171030 - List streaming distributions.
    **/
    listStreamingDistributions20171030(req: operations.ListStreamingDistributions20171030Request, config?: AxiosRequestConfig): Promise<operations.ListStreamingDistributions20171030Response>;
    /**
     * listTagsForResource20171030 - List tags for a CloudFront resource.
    **/
    listTagsForResource20171030(req: operations.ListTagsForResource20171030Request, config?: AxiosRequestConfig): Promise<operations.ListTagsForResource20171030Response>;
    /**
     * tagResource20171030 - Add tags to a CloudFront resource.
    **/
    tagResource20171030(req: operations.TagResource20171030Request, config?: AxiosRequestConfig): Promise<operations.TagResource20171030Response>;
    /**
     * untagResource20171030 - Remove tags from a CloudFront resource.
    **/
    untagResource20171030(req: operations.UntagResource20171030Request, config?: AxiosRequestConfig): Promise<operations.UntagResource20171030Response>;
    /**
     * updateCloudFrontOriginAccessIdentity20171030 - Update an origin access identity.
    **/
    updateCloudFrontOriginAccessIdentity20171030(req: operations.UpdateCloudFrontOriginAccessIdentity20171030Request, config?: AxiosRequestConfig): Promise<operations.UpdateCloudFrontOriginAccessIdentity20171030Response>;
    /**
     * updateDistribution20171030 - <p>Updates the configuration for a web distribution. Perform the following steps.</p> <p>For information about updating a distribution using the CloudFront console, see <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating or Updating a Web Distribution Using the CloudFront Console </a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Submit a <a>GetDistributionConfig</a> request to get the current configuration and an <code>Etag</code> header for the distribution.</p> <note> <p>If you update the distribution again, you need to get a new <code>Etag</code> header.</p> </note> </li> <li> <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include the desired changes. You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an <code>IllegalUpdate</code> error.</p> <important> <p>The new configuration replaces the existing configuration; the values that you specify in an <code>UpdateDistribution</code> request are not merged into the existing configuration. When you add, delete, or replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the values that you want to appear in the updated distribution. In addition, you must update the corresponding <code>Quantity</code> element.</p> </important> </li> <li> <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p> <ul> <li> <p>In the request body, include the XML document that you updated in Step 2. The request body must include an XML document with a <code>DistributionConfig</code> element.</p> </li> <li> <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p> </li> </ul> </li> <li> <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was successfully updated.</p> </li> <li> <p>Optional: Submit a <a>GetDistribution</a> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a distribution. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values you're actually specifying.</p> </important> </li> </ol>
    **/
    updateDistribution20171030(req: operations.UpdateDistribution20171030Request, config?: AxiosRequestConfig): Promise<operations.UpdateDistribution20171030Response>;
    /**
     * updateFieldLevelEncryptionConfig20171030 - Update a field-level encryption configuration.
    **/
    updateFieldLevelEncryptionConfig20171030(req: operations.UpdateFieldLevelEncryptionConfig20171030Request, config?: AxiosRequestConfig): Promise<operations.UpdateFieldLevelEncryptionConfig20171030Response>;
    /**
     * updateFieldLevelEncryptionProfile20171030 - Update a field-level encryption profile.
    **/
    updateFieldLevelEncryptionProfile20171030(req: operations.UpdateFieldLevelEncryptionProfile20171030Request, config?: AxiosRequestConfig): Promise<operations.UpdateFieldLevelEncryptionProfile20171030Response>;
    /**
     * updatePublicKey20171030 - Update public key information. Note that the only value you can change is the comment.
    **/
    updatePublicKey20171030(req: operations.UpdatePublicKey20171030Request, config?: AxiosRequestConfig): Promise<operations.UpdatePublicKey20171030Response>;
    /**
     * updateStreamingDistribution20171030 - Update a streaming distribution.
    **/
    updateStreamingDistribution20171030(req: operations.UpdateStreamingDistribution20171030Request, config?: AxiosRequestConfig): Promise<operations.UpdateStreamingDistribution20171030Response>;
}
export {};
