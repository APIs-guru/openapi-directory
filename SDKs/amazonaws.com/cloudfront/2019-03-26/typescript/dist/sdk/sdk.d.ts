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
     * createCloudFrontOriginAccessIdentity20190326 - Creates a new origin access identity. If you're using Amazon S3 for your origin, you can use an origin access identity to require users to access your content using a CloudFront URL instead of the Amazon S3 URL. For more information about how to use origin access identities, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/PrivateContent.html">Serving Private Content through CloudFront</a> in the <i>Amazon CloudFront Developer Guide</i>.
    **/
    createCloudFrontOriginAccessIdentity20190326(req: operations.CreateCloudFrontOriginAccessIdentity20190326Request, config?: AxiosRequestConfig): Promise<operations.CreateCloudFrontOriginAccessIdentity20190326Response>;
    /**
     * createDistribution20190326 - <p>Creates a new web distribution. You create a CloudFront distribution to tell CloudFront where you want content to be delivered from, and the details about how to track and manage content delivery. Send a <code>POST</code> request to the <code>/<i>CloudFront API version</i>/distribution</code>/<code>distribution ID</code> resource.</p> <important> <p>When you update a distribution, there are more required fields than when you create a distribution. When you update your distribution by using <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_UpdateDistribution.html">UpdateDistribution</a>, follow the steps included in the documentation to get the current configuration and then make your updates. This helps to make sure that you include all of the required fields. To view a summary, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </important>
    **/
    createDistribution20190326(req: operations.CreateDistribution20190326Request, config?: AxiosRequestConfig): Promise<operations.CreateDistribution20190326Response>;
    /**
     * createDistributionWithTags20190326 - Create a new distribution with tags.
    **/
    createDistributionWithTags20190326(req: operations.CreateDistributionWithTags20190326Request, config?: AxiosRequestConfig): Promise<operations.CreateDistributionWithTags20190326Response>;
    /**
     * createFieldLevelEncryptionConfig20190326 - Create a new field-level encryption configuration.
    **/
    createFieldLevelEncryptionConfig20190326(req: operations.CreateFieldLevelEncryptionConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.CreateFieldLevelEncryptionConfig20190326Response>;
    /**
     * createFieldLevelEncryptionProfile20190326 - Create a field-level encryption profile.
    **/
    createFieldLevelEncryptionProfile20190326(req: operations.CreateFieldLevelEncryptionProfile20190326Request, config?: AxiosRequestConfig): Promise<operations.CreateFieldLevelEncryptionProfile20190326Response>;
    /**
     * createInvalidation20190326 - Create a new invalidation.
    **/
    createInvalidation20190326(req: operations.CreateInvalidation20190326Request, config?: AxiosRequestConfig): Promise<operations.CreateInvalidation20190326Response>;
    /**
     * createPublicKey20190326 - Add a new public key to CloudFront to use, for example, for field-level encryption. You can add a maximum of 10 public keys with one AWS account.
    **/
    createPublicKey20190326(req: operations.CreatePublicKey20190326Request, config?: AxiosRequestConfig): Promise<operations.CreatePublicKey20190326Response>;
    /**
     * createStreamingDistribution20190326 - <p>Creates a new RTMP distribution. An RTMP distribution is similar to a web distribution, but an RTMP distribution streams media files using the Adobe Real-Time Messaging Protocol (RTMP) instead of serving files using HTTP. </p> <p>To create a new distribution, submit a <code>POST</code> request to the <i>CloudFront API version</i>/distribution resource. The request body must include a document with a <i>StreamingDistributionConfig</i> element. The response echoes the <code>StreamingDistributionConfig</code> element and returns other information about the RTMP distribution.</p> <p>To get the status of your request, use the <i>GET StreamingDistribution</i> API action. When the value of <code>Enabled</code> is <code>true</code> and the value of <code>Status</code> is <code>Deployed</code>, your distribution is ready. A distribution usually deploys in less than 15 minutes.</p> <p>For more information about web distributions, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-rtmp.html">Working with RTMP Distributions</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <important> <p>Beginning with the 2012-05-05 version of the CloudFront API, we made substantial changes to the format of the XML document that you include in the request body when you create or update a web distribution or an RTMP distribution, and when you invalidate objects. With previous versions of the API, we discovered that it was too easy to accidentally delete one or more values for an element that accepts multiple values, for example, CNAMEs and trusted signers. Our changes for the 2012-05-05 release are intended to prevent these accidental deletions and to notify you when there's a mismatch between the number of values you say you're specifying in the <code>Quantity</code> element and the number of values specified.</p> </important>
    **/
    createStreamingDistribution20190326(req: operations.CreateStreamingDistribution20190326Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistribution20190326Response>;
    /**
     * createStreamingDistributionWithTags20190326 - Create a new streaming distribution with tags.
    **/
    createStreamingDistributionWithTags20190326(req: operations.CreateStreamingDistributionWithTags20190326Request, config?: AxiosRequestConfig): Promise<operations.CreateStreamingDistributionWithTags20190326Response>;
    /**
     * deleteCloudFrontOriginAccessIdentity20190326 - Delete an origin access identity.
    **/
    deleteCloudFrontOriginAccessIdentity20190326(req: operations.DeleteCloudFrontOriginAccessIdentity20190326Request, config?: AxiosRequestConfig): Promise<operations.DeleteCloudFrontOriginAccessIdentity20190326Response>;
    /**
     * deleteDistribution20190326 - Delete a distribution.
    **/
    deleteDistribution20190326(req: operations.DeleteDistribution20190326Request, config?: AxiosRequestConfig): Promise<operations.DeleteDistribution20190326Response>;
    /**
     * deleteFieldLevelEncryptionConfig20190326 - Remove a field-level encryption configuration.
    **/
    deleteFieldLevelEncryptionConfig20190326(req: operations.DeleteFieldLevelEncryptionConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.DeleteFieldLevelEncryptionConfig20190326Response>;
    /**
     * deleteFieldLevelEncryptionProfile20190326 - Remove a field-level encryption profile.
    **/
    deleteFieldLevelEncryptionProfile20190326(req: operations.DeleteFieldLevelEncryptionProfile20190326Request, config?: AxiosRequestConfig): Promise<operations.DeleteFieldLevelEncryptionProfile20190326Response>;
    /**
     * deletePublicKey20190326 - Remove a public key you previously added to CloudFront.
    **/
    deletePublicKey20190326(req: operations.DeletePublicKey20190326Request, config?: AxiosRequestConfig): Promise<operations.DeletePublicKey20190326Response>;
    /**
     * deleteStreamingDistribution20190326 - <p>Delete a streaming distribution. To delete an RTMP distribution using the CloudFront API, perform the following steps.</p> <p> <b>To delete an RTMP distribution using the CloudFront API</b>:</p> <ol> <li> <p>Disable the RTMP distribution.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to get the current configuration and the <code>Etag</code> header for the distribution. </p> </li> <li> <p>Update the XML document that was returned in the response to your <code>GET Streaming Distribution Config</code> request to change the value of <code>Enabled</code> to <code>false</code>.</p> </li> <li> <p>Submit a <code>PUT Streaming Distribution Config</code> request to update the configuration for your distribution. In the request body, include the XML document that you updated in Step 3. Then set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to the <code>PUT Streaming Distribution Config</code> request to confirm that the distribution was successfully disabled.</p> </li> <li> <p>Submit a <code>GET Streaming Distribution Config</code> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> <li> <p>Submit a <code>DELETE Streaming Distribution</code> request. Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GET Streaming Distribution Config</code> request in Step 2.</p> </li> <li> <p>Review the response to your <code>DELETE Streaming Distribution</code> request to confirm that the distribution was successfully deleted.</p> </li> </ol> <p>For information about deleting a distribution using the CloudFront console, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/HowToDeleteDistribution.html">Deleting a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p>
    **/
    deleteStreamingDistribution20190326(req: operations.DeleteStreamingDistribution20190326Request, config?: AxiosRequestConfig): Promise<operations.DeleteStreamingDistribution20190326Response>;
    /**
     * getCloudFrontOriginAccessIdentity20190326 - Get the information about an origin access identity.
    **/
    getCloudFrontOriginAccessIdentity20190326(req: operations.GetCloudFrontOriginAccessIdentity20190326Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentity20190326Response>;
    /**
     * getCloudFrontOriginAccessIdentityConfig20190326 - Get the configuration information about an origin access identity.
    **/
    getCloudFrontOriginAccessIdentityConfig20190326(req: operations.GetCloudFrontOriginAccessIdentityConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.GetCloudFrontOriginAccessIdentityConfig20190326Response>;
    /**
     * getDistribution20190326 - Get the information about a distribution.
    **/
    getDistribution20190326(req: operations.GetDistribution20190326Request, config?: AxiosRequestConfig): Promise<operations.GetDistribution20190326Response>;
    /**
     * getDistributionConfig20190326 - Get the configuration information about a distribution.
    **/
    getDistributionConfig20190326(req: operations.GetDistributionConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.GetDistributionConfig20190326Response>;
    /**
     * getFieldLevelEncryption20190326 - Get the field-level encryption configuration information.
    **/
    getFieldLevelEncryption20190326(req: operations.GetFieldLevelEncryption20190326Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryption20190326Response>;
    /**
     * getFieldLevelEncryptionConfig20190326 - Get the field-level encryption configuration information.
    **/
    getFieldLevelEncryptionConfig20190326(req: operations.GetFieldLevelEncryptionConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionConfig20190326Response>;
    /**
     * getFieldLevelEncryptionProfile20190326 - Get the field-level encryption profile information.
    **/
    getFieldLevelEncryptionProfile20190326(req: operations.GetFieldLevelEncryptionProfile20190326Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionProfile20190326Response>;
    /**
     * getFieldLevelEncryptionProfileConfig20190326 - Get the field-level encryption profile configuration information.
    **/
    getFieldLevelEncryptionProfileConfig20190326(req: operations.GetFieldLevelEncryptionProfileConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.GetFieldLevelEncryptionProfileConfig20190326Response>;
    /**
     * getInvalidation20190326 - Get the information about an invalidation.
    **/
    getInvalidation20190326(req: operations.GetInvalidation20190326Request, config?: AxiosRequestConfig): Promise<operations.GetInvalidation20190326Response>;
    /**
     * getPublicKey20190326 - Get the public key information.
    **/
    getPublicKey20190326(req: operations.GetPublicKey20190326Request, config?: AxiosRequestConfig): Promise<operations.GetPublicKey20190326Response>;
    /**
     * getPublicKeyConfig20190326 - Return public key configuration informaation
    **/
    getPublicKeyConfig20190326(req: operations.GetPublicKeyConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.GetPublicKeyConfig20190326Response>;
    /**
     * getStreamingDistribution20190326 - Gets information about a specified RTMP distribution, including the distribution configuration.
    **/
    getStreamingDistribution20190326(req: operations.GetStreamingDistribution20190326Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistribution20190326Response>;
    /**
     * getStreamingDistributionConfig20190326 - Get the configuration information about a streaming distribution.
    **/
    getStreamingDistributionConfig20190326(req: operations.GetStreamingDistributionConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.GetStreamingDistributionConfig20190326Response>;
    /**
     * listCloudFrontOriginAccessIdentities20190326 - Lists origin access identities.
    **/
    listCloudFrontOriginAccessIdentities20190326(req: operations.ListCloudFrontOriginAccessIdentities20190326Request, config?: AxiosRequestConfig): Promise<operations.ListCloudFrontOriginAccessIdentities20190326Response>;
    /**
     * listDistributions20190326 - List CloudFront distributions.
    **/
    listDistributions20190326(req: operations.ListDistributions20190326Request, config?: AxiosRequestConfig): Promise<operations.ListDistributions20190326Response>;
    /**
     * listDistributionsByWebAclId20190326 - List the distributions that are associated with a specified AWS WAF web ACL.
    **/
    listDistributionsByWebAclId20190326(req: operations.ListDistributionsByWebAclId20190326Request, config?: AxiosRequestConfig): Promise<operations.ListDistributionsByWebAclId20190326Response>;
    /**
     * listFieldLevelEncryptionConfigs20190326 - List all field-level encryption configurations that have been created in CloudFront for this account.
    **/
    listFieldLevelEncryptionConfigs20190326(req: operations.ListFieldLevelEncryptionConfigs20190326Request, config?: AxiosRequestConfig): Promise<operations.ListFieldLevelEncryptionConfigs20190326Response>;
    /**
     * listFieldLevelEncryptionProfiles20190326 - Request a list of field-level encryption profiles that have been created in CloudFront for this account.
    **/
    listFieldLevelEncryptionProfiles20190326(req: operations.ListFieldLevelEncryptionProfiles20190326Request, config?: AxiosRequestConfig): Promise<operations.ListFieldLevelEncryptionProfiles20190326Response>;
    /**
     * listInvalidations20190326 - Lists invalidation batches.
    **/
    listInvalidations20190326(req: operations.ListInvalidations20190326Request, config?: AxiosRequestConfig): Promise<operations.ListInvalidations20190326Response>;
    /**
     * listPublicKeys20190326 - List all public keys that have been added to CloudFront for this account.
    **/
    listPublicKeys20190326(req: operations.ListPublicKeys20190326Request, config?: AxiosRequestConfig): Promise<operations.ListPublicKeys20190326Response>;
    /**
     * listStreamingDistributions20190326 - List streaming distributions.
    **/
    listStreamingDistributions20190326(req: operations.ListStreamingDistributions20190326Request, config?: AxiosRequestConfig): Promise<operations.ListStreamingDistributions20190326Response>;
    /**
     * listTagsForResource20190326 - List tags for a CloudFront resource.
    **/
    listTagsForResource20190326(req: operations.ListTagsForResource20190326Request, config?: AxiosRequestConfig): Promise<operations.ListTagsForResource20190326Response>;
    /**
     * tagResource20190326 - Add tags to a CloudFront resource.
    **/
    tagResource20190326(req: operations.TagResource20190326Request, config?: AxiosRequestConfig): Promise<operations.TagResource20190326Response>;
    /**
     * untagResource20190326 - Remove tags from a CloudFront resource.
    **/
    untagResource20190326(req: operations.UntagResource20190326Request, config?: AxiosRequestConfig): Promise<operations.UntagResource20190326Response>;
    /**
     * updateCloudFrontOriginAccessIdentity20190326 - Update an origin access identity.
    **/
    updateCloudFrontOriginAccessIdentity20190326(req: operations.UpdateCloudFrontOriginAccessIdentity20190326Request, config?: AxiosRequestConfig): Promise<operations.UpdateCloudFrontOriginAccessIdentity20190326Response>;
    /**
     * updateDistribution20190326 - <p>Updates the configuration for a web distribution. </p> <important> <p>When you update a distribution, there are more required fields than when you create a distribution. When you update your distribution by using this API action, follow the steps here to get the current configuration and then make your updates, to make sure that you include all of the required fields. To view a summary, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-overview-required-fields.html">Required Fields for Create Distribution and Update Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> </important> <p>The update process includes getting the current distribution configuration, updating the XML document that is returned to make your changes, and then submitting an <code>UpdateDistribution</code> request to make the updates.</p> <p>For information about updating a distribution using the CloudFront console instead, see <a href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-web-creating-console.html">Creating a Distribution</a> in the <i>Amazon CloudFront Developer Guide</i>.</p> <p> <b>To update a web distribution using the CloudFront API</b> </p> <ol> <li> <p>Submit a <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistributionConfig.html">GetDistributionConfig</a> request to get the current configuration and an <code>Etag</code> header for the distribution.</p> <note> <p>If you update the distribution again, you must get a new <code>Etag</code> header.</p> </note> </li> <li> <p>Update the XML document that was returned in the response to your <code>GetDistributionConfig</code> request to include your changes. </p> <important> <p>When you edit the XML file, be aware of the following:</p> <ul> <li> <p>You must strip out the ETag parameter that is returned.</p> </li> <li> <p>Additional fields are required when you update a distribution. There may be fields included in the XML file for features that you haven't configured for your distribution. This is expected and required to successfully update the distribution.</p> </li> <li> <p>You can't change the value of <code>CallerReference</code>. If you try to change this value, CloudFront returns an <code>IllegalUpdate</code> error. </p> </li> <li> <p>The new configuration replaces the existing configuration; the values that you specify in an <code>UpdateDistribution</code> request are not merged into your existing configuration. When you add, delete, or replace values in an element that allows multiple values (for example, <code>CNAME</code>), you must specify all of the values that you want to appear in the updated distribution. In addition, you must update the corresponding <code>Quantity</code> element.</p> </li> </ul> </important> </li> <li> <p>Submit an <code>UpdateDistribution</code> request to update the configuration for your distribution:</p> <ul> <li> <p>In the request body, include the XML document that you updated in Step 2. The request body must include an XML document with a <code>DistributionConfig</code> element.</p> </li> <li> <p>Set the value of the HTTP <code>If-Match</code> header to the value of the <code>ETag</code> header that CloudFront returned when you submitted the <code>GetDistributionConfig</code> request in Step 1.</p> </li> </ul> </li> <li> <p>Review the response to the <code>UpdateDistribution</code> request to confirm that the configuration was successfully updated.</p> </li> <li> <p>Optional: Submit a <a href="https://docs.aws.amazon.com/cloudfront/latest/APIReference/API_GetDistribution.html">GetDistribution</a> request to confirm that your changes have propagated. When propagation is complete, the value of <code>Status</code> is <code>Deployed</code>.</p> </li> </ol>
    **/
    updateDistribution20190326(req: operations.UpdateDistribution20190326Request, config?: AxiosRequestConfig): Promise<operations.UpdateDistribution20190326Response>;
    /**
     * updateFieldLevelEncryptionConfig20190326 - Update a field-level encryption configuration.
    **/
    updateFieldLevelEncryptionConfig20190326(req: operations.UpdateFieldLevelEncryptionConfig20190326Request, config?: AxiosRequestConfig): Promise<operations.UpdateFieldLevelEncryptionConfig20190326Response>;
    /**
     * updateFieldLevelEncryptionProfile20190326 - Update a field-level encryption profile.
    **/
    updateFieldLevelEncryptionProfile20190326(req: operations.UpdateFieldLevelEncryptionProfile20190326Request, config?: AxiosRequestConfig): Promise<operations.UpdateFieldLevelEncryptionProfile20190326Response>;
    /**
     * updatePublicKey20190326 - Update public key information. Note that the only value you can change is the comment.
    **/
    updatePublicKey20190326(req: operations.UpdatePublicKey20190326Request, config?: AxiosRequestConfig): Promise<operations.UpdatePublicKey20190326Response>;
    /**
     * updateStreamingDistribution20190326 - Update a streaming distribution.
    **/
    updateStreamingDistribution20190326(req: operations.UpdateStreamingDistribution20190326Request, config?: AxiosRequestConfig): Promise<operations.UpdateStreamingDistribution20190326Response>;
}
export {};
