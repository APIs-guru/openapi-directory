import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://profile.{region}.amazonaws.com", "https://profile.{region}.amazonaws.com", "http://profile.{region}.amazonaws.com.cn", "https://profile.{region}.amazonaws.com.cn"];
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
     * addProfileKey - <p>Associates a new key value with a specific profile, such as a Contact Trace Record (CTR) ContactId.</p> <p>A profile object can have a single unique key and any number of additional keys that can be used to identify the profile that it belongs to.</p>
    **/
    addProfileKey(req: operations.AddProfileKeyRequest, config?: AxiosRequestConfig): Promise<operations.AddProfileKeyResponse>;
    /**
     * createDomain - <p>Creates a domain, which is a container for all customer data, such as customer profile attributes, object types, profile keys, and encryption keys. You can create multiple domains, and each domain can have multiple third-party integrations.</p> <p>Each Amazon Connect instance can be associated with only one domain. Multiple Amazon Connect instances can be associated with one domain.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p>
    **/
    createDomain(req: operations.CreateDomainRequest, config?: AxiosRequestConfig): Promise<operations.CreateDomainResponse>;
    /**
     * createProfile - <p>Creates a standard profile.</p> <p>A standard profile represents the following attributes for a customer profile in a domain.</p>
    **/
    createProfile(req: operations.CreateProfileRequest, config?: AxiosRequestConfig): Promise<operations.CreateProfileResponse>;
    /**
     * deleteDomain - Deletes a specific domain and all of its customer data, such as customer profile attributes and their related objects.
    **/
    deleteDomain(req: operations.DeleteDomainRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDomainResponse>;
    /**
     * deleteIntegration - Removes an integration from a specific domain.
    **/
    deleteIntegration(req: operations.DeleteIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.DeleteIntegrationResponse>;
    /**
     * deleteProfile - Deletes the standard customer profile and all data pertaining to the profile.
    **/
    deleteProfile(req: operations.DeleteProfileRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileResponse>;
    /**
     * deleteProfileKey - Removes a searchable key from a customer profile.
    **/
    deleteProfileKey(req: operations.DeleteProfileKeyRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileKeyResponse>;
    /**
     * deleteProfileObject - Removes an object associated with a profile of a given ProfileObjectType.
    **/
    deleteProfileObject(req: operations.DeleteProfileObjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileObjectResponse>;
    /**
     * deleteProfileObjectType - Removes a ProfileObjectType from a specific domain as well as removes all the ProfileObjects of that type. It also disables integrations from this specific ProfileObjectType. In addition, it scrubs all of the fields of the standard profile that were populated from this ProfileObjectType.
    **/
    deleteProfileObjectType(req: operations.DeleteProfileObjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.DeleteProfileObjectTypeResponse>;
    /**
     * getDomain - Returns information about a specific domain.
    **/
    getDomain(req: operations.GetDomainRequest, config?: AxiosRequestConfig): Promise<operations.GetDomainResponse>;
    /**
     * getIntegration - Returns an integration for a domain.
    **/
    getIntegration(req: operations.GetIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.GetIntegrationResponse>;
    /**
     * getMatches - <p>This API is in preview release for Amazon Connect and subject to change.</p> <p>Before calling this API, use <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_UpdateDomain.html">UpdateDomain</a> to enable identity resolution: set <code>Matching</code> to true.</p> <p>GetMatches returns potentially matching profiles, based on the results of the latest run of a machine learning process. </p> <important> <p>Amazon Connect starts a batch process every Saturday at 12AM UTC to identify matching profiles. The results are returned up to seven days after the Saturday run.</p> </important> <p>Amazon Connect uses the following profile attributes to identify matches:</p> <ul> <li> <p>PhoneNumber</p> </li> <li> <p>HomePhoneNumber</p> </li> <li> <p>BusinessPhoneNumber</p> </li> <li> <p>MobilePhoneNumber</p> </li> <li> <p>EmailAddress</p> </li> <li> <p>PersonalEmailAddress</p> </li> <li> <p>BusinessEmailAddress</p> </li> <li> <p>FullName</p> </li> <li> <p>BusinessName</p> </li> </ul> <p>For example, two or more profiles—with spelling mistakes such as <b>John Doe</b> and <b>Jhn Doe</b>, or different casing email addresses such as <b>JOHN_DOE@ANYCOMPANY.COM</b> and <b>johndoe@anycompany.com</b>, or different phone number formats such as <b>555-010-0000</b> and <b>+1-555-010-0000</b>—can be detected as belonging to the same customer <b>John Doe</b> and merged into a unified profile.</p>
    **/
    getMatches(req: operations.GetMatchesRequest, config?: AxiosRequestConfig): Promise<operations.GetMatchesResponse>;
    /**
     * getProfileObjectType - Returns the object types for a specific domain.
    **/
    getProfileObjectType(req: operations.GetProfileObjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileObjectTypeResponse>;
    /**
     * getProfileObjectTypeTemplate - <p>Returns the template information for a specific object type.</p> <p>A template is a predefined ProfileObjectType, such as “Salesforce-Account” or “Salesforce-Contact.” When a user sends a ProfileObject, using the PutProfileObject API, with an ObjectTypeName that matches one of the TemplateIds, it uses the mappings from the template.</p>
    **/
    getProfileObjectTypeTemplate(req: operations.GetProfileObjectTypeTemplateRequest, config?: AxiosRequestConfig): Promise<operations.GetProfileObjectTypeTemplateResponse>;
    /**
     * listAccountIntegrations - Lists all of the integrations associated to a specific URI in the AWS account.
    **/
    listAccountIntegrations(req: operations.ListAccountIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListAccountIntegrationsResponse>;
    /**
     * listDomains - Returns a list of all the domains for an AWS account that have been created.
    **/
    listDomains(req: operations.ListDomainsRequest, config?: AxiosRequestConfig): Promise<operations.ListDomainsResponse>;
    /**
     * listIntegrations - Lists all of the integrations in your domain.
    **/
    listIntegrations(req: operations.ListIntegrationsRequest, config?: AxiosRequestConfig): Promise<operations.ListIntegrationsResponse>;
    /**
     * listProfileObjectTypeTemplates - Lists all of the template information for object types.
    **/
    listProfileObjectTypeTemplates(req: operations.ListProfileObjectTypeTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListProfileObjectTypeTemplatesResponse>;
    /**
     * listProfileObjectTypes - Lists all of the templates available within the service.
    **/
    listProfileObjectTypes(req: operations.ListProfileObjectTypesRequest, config?: AxiosRequestConfig): Promise<operations.ListProfileObjectTypesResponse>;
    /**
     * listProfileObjects - Returns a list of objects associated with a profile of a given ProfileObjectType.
    **/
    listProfileObjects(req: operations.ListProfileObjectsRequest, config?: AxiosRequestConfig): Promise<operations.ListProfileObjectsResponse>;
    /**
     * listTagsForResource - Displays the tags associated with an Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * mergeProfiles - <p>This API is in preview release for Amazon Connect and subject to change.</p> <p>Runs an AWS Lambda job that does the following:</p> <ol> <li> <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p> </li> <li> <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the main profile.</p> </li> <li> <p>Standard fields are merged as follows:</p> <ol> <li> <p>Fields are always "union"-ed if there are no conflicts in standard fields or attributeKeys.</p> </li> <li> <p>When there are conflicting fields:</p> <ol> <li> <p>If no <code>SourceProfileIds</code> entry is specified, the main Profile value is always taken. </p> </li> <li> <p>If a <code>SourceProfileIds</code> entry is specified, the specified profileId is always taken, even if it is a NULL value.</p> </li> </ol> </li> </ol> </li> </ol> <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which returns potentially matching profiles, or use it with the results of another matching system. After profiles have been merged, they cannot be separated (unmerged).</p>
    **/
    mergeProfiles(req: operations.MergeProfilesRequest, config?: AxiosRequestConfig): Promise<operations.MergeProfilesResponse>;
    /**
     * putIntegration - <p>Adds an integration between the service and a third-party service, which includes Amazon AppFlow and Amazon Connect.</p> <p>An integration can belong to only one domain.</p>
    **/
    putIntegration(req: operations.PutIntegrationRequest, config?: AxiosRequestConfig): Promise<operations.PutIntegrationResponse>;
    /**
     * putProfileObject - <p>Adds additional objects to customer profiles of a given ObjectType.</p> <p>When adding a specific profile object, like a Contact Trace Record (CTR), an inferred profile can get created if it is not mapped to an existing profile. The resulting profile will only have a phone number populated in the standard ProfileObject. Any additional CTRs with the same phone number will be mapped to the same inferred profile.</p> <p>When a ProfileObject is created and if a ProfileObjectType already exists for the ProfileObject, it will provide data to a standard profile depending on the ProfileObjectType definition.</p> <p>PutProfileObject needs an ObjectType, which can be created using PutProfileObjectType.</p>
    **/
    putProfileObject(req: operations.PutProfileObjectRequest, config?: AxiosRequestConfig): Promise<operations.PutProfileObjectResponse>;
    /**
     * putProfileObjectType - Defines a ProfileObjectType.
    **/
    putProfileObjectType(req: operations.PutProfileObjectTypeRequest, config?: AxiosRequestConfig): Promise<operations.PutProfileObjectTypeResponse>;
    /**
     * searchProfiles - Searches for profiles within a specific domain name using name, phone number, email address, account number, or a custom defined index.
    **/
    searchProfiles(req: operations.SearchProfilesRequest, config?: AxiosRequestConfig): Promise<operations.SearchProfilesResponse>;
    /**
     * tagResource - <p>Assigns one or more tags (key-value pairs) to the specified Amazon Connect Customer Profiles resource. Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.</p> <p>Tags don't have any semantic meaning to AWS and are interpreted strictly as strings of characters.</p> <p>You can use the TagResource action with a resource that already has tags. If you specify a new tag key, this tag is appended to the list of tags associated with the resource. If you specify a tag key that is already associated with the resource, the new tag value that you specify replaces the previous value for that tag.</p> <p>You can associate as many as 50 tags with a resource.</p>
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - Removes one or more tags from the specified Amazon Connect Customer Profiles resource. In Connect Customer Profiles, domains, profile object types, and integrations can be tagged.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateDomain - <p>Updates the properties of a domain, including creating or selecting a dead letter queue or an encryption key.</p> <p>After a domain is created, the name can’t be changed.</p> <p>Use this API or <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_CreateDomain.html">CreateDomain</a> to enable <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">identity resolution</a>: set <code>Matching</code> to true. </p>
    **/
    updateDomain(req: operations.UpdateDomainRequest, config?: AxiosRequestConfig): Promise<operations.UpdateDomainResponse>;
    /**
     * updateProfile - <p>Updates the properties of a profile. The ProfileId is required for updating a customer profile.</p> <p>When calling the UpdateProfile API, specifying an empty string value means that any existing value will be removed. Not specifying a string value means that any value already there will be kept.</p>
    **/
    updateProfile(req: operations.UpdateProfileRequest, config?: AxiosRequestConfig): Promise<operations.UpdateProfileResponse>;
}
export {};
