import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
import { Security } from "./models/shared";
type OptsFunc = (sdk: SDK) => void;
export declare const ServerList: readonly ["http://clouddirectory.{region}.amazonaws.com", "https://clouddirectory.{region}.amazonaws.com", "http://clouddirectory.{region}.amazonaws.com.cn", "https://clouddirectory.{region}.amazonaws.com.cn"];
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
     * addFacetToObject - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
    **/
    addFacetToObject(req: operations.AddFacetToObjectRequest, config?: AxiosRequestConfig): Promise<operations.AddFacetToObjectResponse>;
    /**
     * applySchema - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
    **/
    applySchema(req: operations.ApplySchemaRequest, config?: AxiosRequestConfig): Promise<operations.ApplySchemaResponse>;
    /**
     * attachObject - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
    **/
    attachObject(req: operations.AttachObjectRequest, config?: AxiosRequestConfig): Promise<operations.AttachObjectResponse>;
    /**
     * attachPolicy - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
    **/
    attachPolicy(req: operations.AttachPolicyRequest, config?: AxiosRequestConfig): Promise<operations.AttachPolicyResponse>;
    /**
     * attachToIndex - Attaches the specified object to the specified index.
    **/
    attachToIndex(req: operations.AttachToIndexRequest, config?: AxiosRequestConfig): Promise<operations.AttachToIndexResponse>;
    /**
     * attachTypedLink - Attaches a typed link to a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    attachTypedLink(req: operations.AttachTypedLinkRequest, config?: AxiosRequestConfig): Promise<operations.AttachTypedLinkResponse>;
    /**
     * batchRead - Performs all the read operations in a batch.
    **/
    batchRead(req: operations.BatchReadRequest, config?: AxiosRequestConfig): Promise<operations.BatchReadResponse>;
    /**
     * batchWrite - Performs all the write operations in a batch. Either all the operations succeed or none.
    **/
    batchWrite(req: operations.BatchWriteRequest, config?: AxiosRequestConfig): Promise<operations.BatchWriteResponse>;
    /**
     * createDirectory - Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.
    **/
    createDirectory(req: operations.CreateDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.CreateDirectoryResponse>;
    /**
     * createFacet - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
    **/
    createFacet(req: operations.CreateFacetRequest, config?: AxiosRequestConfig): Promise<operations.CreateFacetResponse>;
    /**
     * createIndex - Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.
    **/
    createIndex(req: operations.CreateIndexRequest, config?: AxiosRequestConfig): Promise<operations.CreateIndexResponse>;
    /**
     * createObject - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet.
    **/
    createObject(req: operations.CreateObjectRequest, config?: AxiosRequestConfig): Promise<operations.CreateObjectResponse>;
    /**
     * createSchema - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
    **/
    createSchema(req: operations.CreateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.CreateSchemaResponse>;
    /**
     * createTypedLinkFacet - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    createTypedLinkFacet(req: operations.CreateTypedLinkFacetRequest, config?: AxiosRequestConfig): Promise<operations.CreateTypedLinkFacetResponse>;
    /**
     * deleteDirectory - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
    **/
    deleteDirectory(req: operations.DeleteDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.DeleteDirectoryResponse>;
    /**
     * deleteFacet - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
    **/
    deleteFacet(req: operations.DeleteFacetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteFacetResponse>;
    /**
     * deleteObject - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
    **/
    deleteObject(req: operations.DeleteObjectRequest, config?: AxiosRequestConfig): Promise<operations.DeleteObjectResponse>;
    /**
     * deleteSchema - Deletes a given schema. Schemas in a development and published state can only be deleted.
    **/
    deleteSchema(req: operations.DeleteSchemaRequest, config?: AxiosRequestConfig): Promise<operations.DeleteSchemaResponse>;
    /**
     * deleteTypedLinkFacet - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    deleteTypedLinkFacet(req: operations.DeleteTypedLinkFacetRequest, config?: AxiosRequestConfig): Promise<operations.DeleteTypedLinkFacetResponse>;
    /**
     * detachFromIndex - Detaches the specified object from the specified index.
    **/
    detachFromIndex(req: operations.DetachFromIndexRequest, config?: AxiosRequestConfig): Promise<operations.DetachFromIndexResponse>;
    /**
     * detachObject - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
    **/
    detachObject(req: operations.DetachObjectRequest, config?: AxiosRequestConfig): Promise<operations.DetachObjectResponse>;
    /**
     * detachPolicy - Detaches a policy from an object.
    **/
    detachPolicy(req: operations.DetachPolicyRequest, config?: AxiosRequestConfig): Promise<operations.DetachPolicyResponse>;
    /**
     * detachTypedLink - Detaches a typed link from a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    detachTypedLink(req: operations.DetachTypedLinkRequest, config?: AxiosRequestConfig): Promise<operations.DetachTypedLinkResponse>;
    /**
     * disableDirectory - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
    **/
    disableDirectory(req: operations.DisableDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.DisableDirectoryResponse>;
    /**
     * enableDirectory - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
    **/
    enableDirectory(req: operations.EnableDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.EnableDirectoryResponse>;
    /**
     * getAppliedSchemaVersion - Returns current applied schema version ARN, including the minor version in use.
    **/
    getAppliedSchemaVersion(req: operations.GetAppliedSchemaVersionRequest, config?: AxiosRequestConfig): Promise<operations.GetAppliedSchemaVersionResponse>;
    /**
     * getDirectory - Retrieves metadata about a directory.
    **/
    getDirectory(req: operations.GetDirectoryRequest, config?: AxiosRequestConfig): Promise<operations.GetDirectoryResponse>;
    /**
     * getFacet - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
    **/
    getFacet(req: operations.GetFacetRequest, config?: AxiosRequestConfig): Promise<operations.GetFacetResponse>;
    /**
     * getLinkAttributes - Retrieves attributes that are associated with a typed link.
    **/
    getLinkAttributes(req: operations.GetLinkAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetLinkAttributesResponse>;
    /**
     * getObjectAttributes - Retrieves attributes within a facet that are associated with an object.
    **/
    getObjectAttributes(req: operations.GetObjectAttributesRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectAttributesResponse>;
    /**
     * getObjectInformation - Retrieves metadata about an object.
    **/
    getObjectInformation(req: operations.GetObjectInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetObjectInformationResponse>;
    /**
     * getSchemaAsJson - Retrieves a JSON representation of the schema. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
    **/
    getSchemaAsJson(req: operations.GetSchemaAsJsonRequest, config?: AxiosRequestConfig): Promise<operations.GetSchemaAsJsonResponse>;
    /**
     * getTypedLinkFacetInformation - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    getTypedLinkFacetInformation(req: operations.GetTypedLinkFacetInformationRequest, config?: AxiosRequestConfig): Promise<operations.GetTypedLinkFacetInformationResponse>;
    /**
     * listAppliedSchemaArns - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
    **/
    listAppliedSchemaArns(req: operations.ListAppliedSchemaArnsRequest, config?: AxiosRequestConfig): Promise<operations.ListAppliedSchemaArnsResponse>;
    /**
     * listAttachedIndices - Lists indices attached to the specified object.
    **/
    listAttachedIndices(req: operations.ListAttachedIndicesRequest, config?: AxiosRequestConfig): Promise<operations.ListAttachedIndicesResponse>;
    /**
     * listDevelopmentSchemaArns - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
    **/
    listDevelopmentSchemaArns(req: operations.ListDevelopmentSchemaArnsRequest, config?: AxiosRequestConfig): Promise<operations.ListDevelopmentSchemaArnsResponse>;
    /**
     * listDirectories - Lists directories created within an account.
    **/
    listDirectories(req: operations.ListDirectoriesRequest, config?: AxiosRequestConfig): Promise<operations.ListDirectoriesResponse>;
    /**
     * listFacetAttributes - Retrieves attributes attached to the facet.
    **/
    listFacetAttributes(req: operations.ListFacetAttributesRequest, config?: AxiosRequestConfig): Promise<operations.ListFacetAttributesResponse>;
    /**
     * listFacetNames - Retrieves the names of facets that exist in a schema.
    **/
    listFacetNames(req: operations.ListFacetNamesRequest, config?: AxiosRequestConfig): Promise<operations.ListFacetNamesResponse>;
    /**
     * listIncomingTypedLinks - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    listIncomingTypedLinks(req: operations.ListIncomingTypedLinksRequest, config?: AxiosRequestConfig): Promise<operations.ListIncomingTypedLinksResponse>;
    /**
     * listIndex - Lists objects attached to the specified index.
    **/
    listIndex(req: operations.ListIndexRequest, config?: AxiosRequestConfig): Promise<operations.ListIndexResponse>;
    /**
     * listObjectAttributes - Lists all attributes that are associated with an object.
    **/
    listObjectAttributes(req: operations.ListObjectAttributesRequest, config?: AxiosRequestConfig): Promise<operations.ListObjectAttributesResponse>;
    /**
     * listObjectChildren - Returns a paginated list of child objects that are associated with a given object.
    **/
    listObjectChildren(req: operations.ListObjectChildrenRequest, config?: AxiosRequestConfig): Promise<operations.ListObjectChildrenResponse>;
    /**
     * listObjectParentPaths - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
    **/
    listObjectParentPaths(req: operations.ListObjectParentPathsRequest, config?: AxiosRequestConfig): Promise<operations.ListObjectParentPathsResponse>;
    /**
     * listObjectParents - Lists parent objects that are associated with a given object in pagination fashion.
    **/
    listObjectParents(req: operations.ListObjectParentsRequest, config?: AxiosRequestConfig): Promise<operations.ListObjectParentsResponse>;
    /**
     * listObjectPolicies - Returns policies attached to an object in pagination fashion.
    **/
    listObjectPolicies(req: operations.ListObjectPoliciesRequest, config?: AxiosRequestConfig): Promise<operations.ListObjectPoliciesResponse>;
    /**
     * listOutgoingTypedLinks - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    listOutgoingTypedLinks(req: operations.ListOutgoingTypedLinksRequest, config?: AxiosRequestConfig): Promise<operations.ListOutgoingTypedLinksResponse>;
    /**
     * listPolicyAttachments - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
    **/
    listPolicyAttachments(req: operations.ListPolicyAttachmentsRequest, config?: AxiosRequestConfig): Promise<operations.ListPolicyAttachmentsResponse>;
    /**
     * listPublishedSchemaArns - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
    **/
    listPublishedSchemaArns(req: operations.ListPublishedSchemaArnsRequest, config?: AxiosRequestConfig): Promise<operations.ListPublishedSchemaArnsResponse>;
    /**
     * listTagsForResource - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
    **/
    listTagsForResource(req: operations.ListTagsForResourceRequest, config?: AxiosRequestConfig): Promise<operations.ListTagsForResourceResponse>;
    /**
     * listTypedLinkFacetAttributes - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    listTypedLinkFacetAttributes(req: operations.ListTypedLinkFacetAttributesRequest, config?: AxiosRequestConfig): Promise<operations.ListTypedLinkFacetAttributesResponse>;
    /**
     * listTypedLinkFacetNames - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    listTypedLinkFacetNames(req: operations.ListTypedLinkFacetNamesRequest, config?: AxiosRequestConfig): Promise<operations.ListTypedLinkFacetNamesResponse>;
    /**
     * lookupPolicy - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
    **/
    lookupPolicy(req: operations.LookupPolicyRequest, config?: AxiosRequestConfig): Promise<operations.LookupPolicyResponse>;
    /**
     * publishSchema - Publishes a development schema with a major version and a recommended minor version.
    **/
    publishSchema(req: operations.PublishSchemaRequest, config?: AxiosRequestConfig): Promise<operations.PublishSchemaResponse>;
    /**
     * putSchemaFromJson - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
    **/
    putSchemaFromJson(req: operations.PutSchemaFromJsonRequest, config?: AxiosRequestConfig): Promise<operations.PutSchemaFromJsonResponse>;
    /**
     * removeFacetFromObject - Removes the specified facet from the specified object.
    **/
    removeFacetFromObject(req: operations.RemoveFacetFromObjectRequest, config?: AxiosRequestConfig): Promise<operations.RemoveFacetFromObjectResponse>;
    /**
     * tagResource - An API operation for adding tags to a resource.
    **/
    tagResource(req: operations.TagResourceRequest, config?: AxiosRequestConfig): Promise<operations.TagResourceResponse>;
    /**
     * untagResource - An API operation for removing tags from a resource.
    **/
    untagResource(req: operations.UntagResourceRequest, config?: AxiosRequestConfig): Promise<operations.UntagResourceResponse>;
    /**
     * updateFacet - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
    **/
    updateFacet(req: operations.UpdateFacetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateFacetResponse>;
    /**
     * updateLinkAttributes - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
    **/
    updateLinkAttributes(req: operations.UpdateLinkAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateLinkAttributesResponse>;
    /**
     * updateObjectAttributes - Updates a given object's attributes.
    **/
    updateObjectAttributes(req: operations.UpdateObjectAttributesRequest, config?: AxiosRequestConfig): Promise<operations.UpdateObjectAttributesResponse>;
    /**
     * updateSchema - Updates the schema name with a new name. Only development schema names can be updated.
    **/
    updateSchema(req: operations.UpdateSchemaRequest, config?: AxiosRequestConfig): Promise<operations.UpdateSchemaResponse>;
    /**
     * updateTypedLinkFacet - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
    **/
    updateTypedLinkFacet(req: operations.UpdateTypedLinkFacetRequest, config?: AxiosRequestConfig): Promise<operations.UpdateTypedLinkFacetResponse>;
    /**
     * upgradeAppliedSchema - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
    **/
    upgradeAppliedSchema(req: operations.UpgradeAppliedSchemaRequest, config?: AxiosRequestConfig): Promise<operations.UpgradeAppliedSchemaResponse>;
    /**
     * upgradePublishedSchema - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.
    **/
    upgradePublishedSchema(req: operations.UpgradePublishedSchemaRequest, config?: AxiosRequestConfig): Promise<operations.UpgradePublishedSchemaResponse>;
}
export {};
