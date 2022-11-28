# openapi

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add openapi
```

### Yarn

```bash
yarn add openapi
```
<!-- End SDK Installation -->

<!-- Start SDK Example Usage -->
## SDK Example Usage

```typescript
import { SDK, WithSecurity} from "openapi";
import { AddFacetToObjectRequest, AddFacetToObjectResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: AddFacetToObjectRequest = {
  headers: {
    xAmzAlgorithm: "ex",
    xAmzContentSha256: "sint",
    xAmzCredential: "eos",
    xAmzDate: "quas",
    xAmzSecurityToken: "et",
    xAmzSignature: "temporibus",
    xAmzSignedHeaders: "voluptas",
    xAmzDataPartition: "tempora",
  },
  request: {
    objectAttributeList: [
      {
        key: {
          facetName: "deleniti",
          name: "eum",
          schemaArn: "ut",
        },
        value: {
          binaryValue: "dolorum",
          booleanValue: true,
          datetimeValue: "1976-08-08T08:04:02Z",
          numberValue: "inventore",
          stringValue: "exercitationem",
        },
      },
      {
        key: {
          facetName: "voluptas",
          name: "neque",
          schemaArn: "libero",
        },
        value: {
          binaryValue: "sit",
          booleanValue: false,
          datetimeValue: "2008-12-07T12:25:50Z",
          numberValue: "est",
          stringValue: "cupiditate",
        },
      },
    ],
    objectReference: {
      selector: "culpa",
    },
    schemaFacet: {
      facetName: "est",
      schemaArn: "veniam",
    },
  },
};

sdk.sdk.addFacetToObject(req).then((res: AddFacetToObjectResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `addFacetToObject` - Adds a new <a>Facet</a> to an object. An object can have more than one facet applied on it.
* `applySchema` - Copies the input published schema, at the specified version, into the <a>Directory</a> with the same name and version as that of the published schema.
* `attachObject` - <p>Attaches an existing object to another object. An object can be accessed in two ways:</p> <ol> <li> <p>Using the path</p> </li> <li> <p>Using <code>ObjectIdentifier</code> </p> </li> </ol>
* `attachPolicy` - Attaches a policy object to a regular object. An object can have a limited number of attached policies.
* `attachToIndex` - Attaches the specified object to the specified index.
* `attachTypedLink` - Attaches a typed link to a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `batchRead` - Performs all the read operations in a batch. 
* `batchWrite` - Performs all the write operations in a batch. Either all the operations succeed or none.
* `createDirectory` - Creates a <a>Directory</a> by copying the published schema into the directory. A directory cannot be created without a schema.
* `createFacet` - Creates a new <a>Facet</a> in a schema. Facet creation is allowed only in development or applied schemas.
* `createIndex` - Creates an index object. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_indexing.html">Indexing</a> for more information.
* `createObject` - Creates an object in a <a>Directory</a>. Additionally attaches the object to a parent, if a parent reference and <code>LinkName</code> is specified. An object is simply a collection of <a>Facet</a> attributes. You can also use this API call to create a policy object, if the facet from which you create the object is a policy facet. 
* `createSchema` - <p>Creates a new schema in a development state. A schema can exist in three phases:</p> <ul> <li> <p> <i>Development:</i> This is a mutable phase of the schema. All new schemas are in the development phase. Once the schema is finalized, it can be published.</p> </li> <li> <p> <i>Published:</i> Published schemas are immutable and have a version associated with them.</p> </li> <li> <p> <i>Applied:</i> Applied schemas are mutable in a way that allows you to add new schema facets. You can also add new, nonrequired attributes to existing schema facets. You can apply only published schemas to directories. </p> </li> </ul>
* `createTypedLinkFacet` - Creates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `deleteDirectory` - Deletes a directory. Only disabled directories can be deleted. A deleted directory cannot be undone. Exercise extreme caution when deleting directories.
* `deleteFacet` - Deletes a given <a>Facet</a>. All attributes and <a>Rule</a>s that are associated with the facet will be deleted. Only development schema facets are allowed deletion.
* `deleteObject` - Deletes an object and its associated attributes. Only objects with no children and no parents can be deleted.
* `deleteSchema` - Deletes a given schema. Schemas in a development and published state can only be deleted. 
* `deleteTypedLinkFacet` - Deletes a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `detachFromIndex` - Detaches the specified object from the specified index.
* `detachObject` - Detaches a given object from the parent object. The object that is to be detached from the parent is specified by the link name.
* `detachPolicy` - Detaches a policy from an object.
* `detachTypedLink` - Detaches a typed link from a specified source and target object. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `disableDirectory` - Disables the specified directory. Disabled directories cannot be read or written to. Only enabled directories can be disabled. Disabled directories may be reenabled.
* `enableDirectory` - Enables the specified directory. Only disabled directories can be enabled. Once enabled, the directory can then be read and written to.
* `getAppliedSchemaVersion` - Returns current applied schema version ARN, including the minor version in use.
* `getDirectory` - Retrieves metadata about a directory.
* `getFacet` - Gets details of the <a>Facet</a>, such as facet name, attributes, <a>Rule</a>s, or <code>ObjectType</code>. You can call this on all kinds of schema facets -- published, development, or applied.
* `getLinkAttributes` - Retrieves attributes that are associated with a typed link.
* `getObjectAttributes` - Retrieves attributes within a facet that are associated with an object.
* `getObjectInformation` - Retrieves metadata about an object.
* `getSchemaAsJson` - Retrieves a JSON representation of the schema. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
* `getTypedLinkFacetInformation` - Returns the identity attribute order for a specific <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `listAppliedSchemaArns` - Lists schema major versions applied to a directory. If <code>SchemaArn</code> is provided, lists the minor version.
* `listAttachedIndices` - Lists indices attached to the specified object.
* `listDevelopmentSchemaArns` - Retrieves each Amazon Resource Name (ARN) of schemas in the development state.
* `listDirectories` - Lists directories created within an account.
* `listFacetAttributes` - Retrieves attributes attached to the facet.
* `listFacetNames` - Retrieves the names of facets that exist in a schema.
* `listIncomingTypedLinks` - Returns a paginated list of all the incoming <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `listIndex` - Lists objects attached to the specified index.
* `listObjectAttributes` - Lists all attributes that are associated with an object. 
* `listObjectChildren` - Returns a paginated list of child objects that are associated with a given object.
* `listObjectParentPaths` - <p>Retrieves all available parent paths for any object type such as node, leaf node, policy node, and index node objects. For more information about objects, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#dirstructure">Directory Structure</a>.</p> <p>Use this API to evaluate all parents for an object. The call returns all objects from the root of the directory up to the requested object. The API returns the number of paths based on user-defined <code>MaxResults</code>, in case there are multiple paths to the parent. The order of the paths and nodes returned is consistent among multiple API calls unless the objects are deleted or moved. Paths not leading to the directory root are ignored from the target object.</p>
* `listObjectParents` - Lists parent objects that are associated with a given object in pagination fashion.
* `listObjectPolicies` - Returns policies attached to an object in pagination fashion.
* `listOutgoingTypedLinks` - Returns a paginated list of all the outgoing <a>TypedLinkSpecifier</a> information for an object. It also supports filtering by typed link facet and identity attributes. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `listPolicyAttachments` - Returns all of the <code>ObjectIdentifiers</code> to which a given policy is attached.
* `listPublishedSchemaArns` - Lists the major version families of each published schema. If a major version ARN is provided as <code>SchemaArn</code>, the minor version revisions in that family are listed instead.
* `listTagsForResource` - Returns tags for a resource. Tagging is currently supported only for directories with a limit of 50 tags per directory. All 50 tags are returned for a given directory with this API call.
* `listTypedLinkFacetAttributes` - Returns a paginated list of all attribute definitions for a particular <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `listTypedLinkFacetNames` - Returns a paginated list of <code>TypedLink</code> facet names for a particular schema. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `lookupPolicy` - Lists all policies from the root of the <a>Directory</a> to the object specified. If there are no policies present, an empty list is returned. If policies are present, and if some objects don't have the policies attached, it returns the <code>ObjectIdentifier</code> for such objects. If policies are present, it returns <code>ObjectIdentifier</code>, <code>policyId</code>, and <code>policyType</code>. Paths that don't lead to the root from the target object are ignored. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_key_concepts.html#policies">Policies</a>.
* `publishSchema` - Publishes a development schema with a major version and a recommended minor version.
* `putSchemaFromJson` - Allows a schema to be updated using JSON upload. Only available for development schemas. See <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/cd_schemas.html#jsonformat">JSON Schema Format</a> for more information.
* `removeFacetFromObject` - Removes the specified facet from the specified object.
* `tagResource` - An API operation for adding tags to a resource.
* `untagResource` - An API operation for removing tags from a resource.
* `updateFacet` - <p>Does the following:</p> <ol> <li> <p>Adds new <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Updates existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> <li> <p>Deletes existing <code>Attributes</code>, <code>Rules</code>, or <code>ObjectTypes</code>.</p> </li> </ol>
* `updateLinkAttributes` - Updates a given typed link’s attributes. Attributes to be updated must not contribute to the typed link’s identity, as defined by its <code>IdentityAttributeOrder</code>.
* `updateObjectAttributes` - Updates a given object's attributes.
* `updateSchema` - Updates the schema name with a new name. Only development schema names can be updated.
* `updateTypedLinkFacet` - Updates a <a>TypedLinkFacet</a>. For more information, see <a href="http://docs.aws.amazon.com/directoryservice/latest/admin-guide/objectsandlinks.html#typedlink">Typed link</a>.
* `upgradeAppliedSchema` - Upgrades a single directory in-place using the <code>PublishedSchemaArn</code> with schema updates found in <code>MinorVersion</code>. Backwards-compatible minor version upgrades are instantaneously available for readers on all objects in the directory. Note: This is a synchronous API call and upgrades only one schema on a given directory per call. To upgrade multiple directories from one schema, you would need to call this API on each directory.
* `upgradePublishedSchema` - Upgrades a published schema under a new minor version revision using the current contents of <code>DevelopmentSchemaArn</code>.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
