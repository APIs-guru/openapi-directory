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
    
    req := operations.AddFacetToObjectRequest{
        Headers: operations.AddFacetToObjectHeaders{
            XAmzAlgorithm: "qui",
            XAmzContentSha256: "doloribus",
            XAmzCredential: "ad",
            XAmzDate: "minus",
            XAmzSecurityToken: "sit",
            XAmzSignature: "est",
            XAmzSignedHeaders: "voluptas",
            XAmzDataPartition: "quisquam",
        },
        Request: operations.AddFacetToObjectRequestBody{
            ObjectAttributeList: []shared.AttributeKeyAndValue{
                shared.AttributeKeyAndValue{
                    Key: shared.AttributeKey{
                        FacetName: "dolor",
                        Name: "nihil",
                        SchemaArn: "error",
                    },
                    Value: shared.TypedAttributeValue{
                        BinaryValue: "sunt",
                        BooleanValue: false,
                        DatetimeValue: "2019-10-18T15:53:18Z",
                        NumberValue: "dolores",
                        StringValue: "quae",
                    },
                },
            },
            ObjectReference: operations.AddFacetToObjectRequestBodyObjectReference{
                Selector: "id",
            },
            SchemaFacet: operations.AddFacetToObjectRequestBodySchemaFacet{
                FacetName: "eaque",
                SchemaArn: "et",
            },
        },
    }
    
    res, err := s.Sdk.AddFacetToObject(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.AddFacetToObjectResponse != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `AddFacetToObject` - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* `ApplySchema` - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* `AttachObject` - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* `AttachPolicy` - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* `AttachToIndex` - Attaches the specified object to the specified index.
* `AttachTypedLink` - Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `BatchRead` - Performs all the read operations in a batch. 
* `BatchWrite` - Performs all the write operations in a batch. Either all the operations succeed or none.
* `CreateDirectory` - <p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
* `CreateFacet` - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* `CreateIndex` - Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.
* `CreateObject` - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* `CreateSchema` - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* `CreateTypedLinkFacet` - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `DeleteDirectory` - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* `DeleteFacet` - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* `DeleteObject` - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
* `DeleteSchema` - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* `DeleteTypedLinkFacet` - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `DetachFromIndex` - Detaches the specified object from the specified index.
* `DetachObject` - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* `DetachPolicy` - Detaches a policy from an object.
* `DetachTypedLink` - Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `DisableDirectory` - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* `EnableDirectory` - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* `GetAppliedSchemaVersion` - Returns current applied schema version ARN, including the minor version in use.
* `GetDirectory` - Retrieves metadata about a directory.
* `GetFacet` - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* `GetLinkAttributes` - Retrieves attributes that are associated with a typed link.
* `GetObjectAttributes` - Retrieves attributes within a facet that are associated with an object.
* `GetObjectInformation` - Retrieves metadata about an object.
* `GetSchemaAsJSON` - Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* `GetTypedLinkFacetInformation` - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `ListAppliedSchemaArns` - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* `ListAttachedIndices` - Lists indices attached to the specified object.
* `ListDevelopmentSchemaArns` - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* `ListDirectories` - Lists directories created within an account.
* `ListFacetAttributes` - Retrieves attributes attached to the facet.
* `ListFacetNames` - Retrieves the names of facets that exist in a schema.
* `ListIncomingTypedLinks` - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `ListIndex` - Lists objects attached to the specified index.
* `ListManagedSchemaArns` - Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
* `ListObjectAttributes` - Lists all attributes that are associated with an object. 
* `ListObjectChildren` - Returns a paginated list of child objects that are associated with a given object.
* `ListObjectParentPaths` - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* `ListObjectParents` - Lists parent objects that are associated with a given object in pagination fashion.
* `ListObjectPolicies` - Returns policies attached to an object in pagination fashion.
* `ListOutgoingTypedLinks` - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `ListPolicyAttachments` - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* `ListPublishedSchemaArns` - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* `ListTagsForResource` - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* `ListTypedLinkFacetAttributes` - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `ListTypedLinkFacetNames` - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `LookupPolicy` - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
* `PublishSchema` - Publishes a development schema with a major version and a recommended minor version.
* `PutSchemaFromJSON` - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* `RemoveFacetFromObject` - Removes the specified facet from the specified object.
* `TagResource` - An API operation for adding tags to a resource.
* `UntagResource` - An API operation for removing tags from a resource.
* `UpdateFacet` - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* `UpdateLinkAttributes` - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* `UpdateObjectAttributes` - Updates a given object's attributes.
* `UpdateSchema` - Updates the schema name with a new name. Only development schema names can be updated.
* `UpdateTypedLinkFacet` - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `UpgradeAppliedSchema` - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
* `UpgradePublishedSchema` - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
