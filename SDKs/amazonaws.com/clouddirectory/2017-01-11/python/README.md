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
    
req = operations.AddFacetToObjectRequest(
    headers=operations.AddFacetToObjectHeaders(
        x_amz_algorithm="qui",
        x_amz_content_sha256="doloribus",
        x_amz_credential="ad",
        x_amz_date="minus",
        x_amz_security_token="sit",
        x_amz_signature="est",
        x_amz_signed_headers="voluptas",
        x_amz_data_partition="quisquam",
    ),
    request=operations.AddFacetToObjectRequestBody(
        object_attribute_list=[
            shared.AttributeKeyAndValue(
                key=shared.AttributeKey(
                    facet_name="dolor",
                    name="nihil",
                    schema_arn="error",
                ),
                value=shared.TypedAttributeValue(
                    binary_value="sunt",
                    boolean_value=False,
                    datetime_value="2019-10-18T17:18:39Z",
                    number_value="dolores",
                    string_value="quae",
                ),
            ),
        ],
        object_reference=operations.AddFacetToObjectRequestBodyObjectReference(
            selector="id",
        ),
        schema_facet=operations.AddFacetToObjectRequestBodySchemaFacet(
            facet_name="eaque",
            schema_arn="et",
        ),
    ),
)
    
res = s.sdk.add_facet_to_object(req)

if res.add_facet_to_object_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `add_facet_to_object` - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* `apply_schema` - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* `attach_object` - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* `attach_policy` - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* `attach_to_index` - Attaches the specified object to the specified index.
* `attach_typed_link` - Attaches a typed link to a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `batch_read` - Performs all the read operations in a batch. 
* `batch_write` - Performs all the write operations in a batch. Either all the operations succeed or none.
* `create_directory` - <p>Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.</p> <p>You can also quickly create a directory using a managed schema, called the <code>QuickStartSchema</code>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_managed.html">Managed Schema</a> in the <i>Amazon Cloud Directory Developer Guide</i>.</p>
* `create_facet` - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* `create_index` - Creates an index object. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/indexing_search.html">Indexing and search</a> for more information.
* `create_object` - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* `create_schema` - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* `create_typed_link_facet` - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `delete_directory` - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* `delete_facet` - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* `delete_object` - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted. The maximum number of attributes that can be deleted during an object deletion is 30. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/limits.html">Amazon Cloud Directory Limits</a>.
* `delete_schema` - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* `delete_typed_link_facet` - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `detach_from_index` - Detaches the specified object from the specified index.
* `detach_object` - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* `detach_policy` - Detaches a policy from an object.
* `detach_typed_link` - Detaches a typed link from a specified source and target object. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `disable_directory` - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* `enable_directory` - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* `get_applied_schema_version` - Returns current applied schema version ARN, including the minor version in use.
* `get_directory` - Retrieves metadata about a directory.
* `get_facet` - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* `get_link_attributes` - Retrieves attributes that are associated with a typed link.
* `get_object_attributes` - Retrieves attributes within a facet that are associated with an object.
* `get_object_information` - Retrieves metadata about an object.
* `get_schema_as_json` - Retrieves a JSON representation of the schema. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* `get_typed_link_facet_information` - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `list_applied_schema_arns` - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* `list_attached_indices` - Lists indices attached to the specified object.
* `list_development_schema_arns` - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* `list_directories` - Lists directories created within an account.
* `list_facet_attributes` - Retrieves attributes attached to the facet.
* `list_facet_names` - Retrieves the names of facets that exist in a schema.
* `list_incoming_typed_links` - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `list_index` - Lists objects attached to the specified index.
* `list_managed_schema_arns` - Lists the major version families of each managed schema. If a major version ARN is provided as SchemaArn, the minor version revisions in that family are listed instead.
* `list_object_attributes` - Lists all attributes that are associated with an object. 
* `list_object_children` - Returns a paginated list of child objects that are associated with a given object.
* `list_object_parent_paths` - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directorystructure.html">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* `list_object_parents` - Lists parent objects that are associated with a given object in pagination fashion.
* `list_object_policies` - Returns policies attached to an object in pagination fashion.
* `list_outgoing_typed_links` - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `list_policy_attachments` - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* `list_published_schema_arns` - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* `list_tags_for_resource` - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* `list_typed_link_facet_attributes` - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `list_typed_link_facet_names` - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `lookup_policy` - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/key_concepts_directory.html#key_concepts_policies">Policies</a>.
* `publish_schema` - Publishes a development schema with a major version and a recommended minor version.
* `put_schema_from_json` - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/schemas_jsonformat.html#schemas_json">JSON Schema Format</a> for more information.
* `remove_facet_from_object` - Removes the specified facet from the specified object.
* `tag_resource` - An API operation for adding tags to a resource.
* `untag_resource` - An API operation for removing tags from a resource.
* `update_facet` - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* `update_link_attributes` - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* `update_object_attributes` - Updates a given object's attributes.
* `update_schema` - Updates the schema name with a new name. Only development schema names can be updated.
* `update_typed_link_facet` - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="https://docs.aws.amazon.com/clouddirectory/latest/developerguide/directory_objects_links.html#directory_objects_links_typedlink">Typed Links</a>.
* `upgrade_applied_schema` - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
* `upgrade_published_schema` - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
