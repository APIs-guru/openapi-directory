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
import { BatchCreatePartitionRequest, BatchCreatePartitionResponse } from "openapi/src/sdk/models/operations";
import { AxiosError } from "axios";

const sdk = new SDK(WithSecurity(
  security: {
    hmac: {
      apiKey: "YOUR_API_KEY_HERE",
    },
  }
));
    
const req: BatchCreatePartitionRequest = {
  headers: {
    xAmzAlgorithm: "iste",
    xAmzContentSha256: "deleniti",
    xAmzCredential: "libero",
    xAmzDate: "saepe",
    xAmzSecurityToken: "et",
    xAmzSignature: "corporis",
    xAmzSignedHeaders: "a",
    xAmzTarget: "AWSGlue.BatchCreatePartition",
  },
  request: {
    catalogId: "numquam",
    databaseName: "dolores",
    partitionInputList: [
      {
        lastAccessTime: "1997-09-15T17:21:50Z",
        lastAnalyzedTime: "2012-08-01T13:42:31Z",
        parameters: {
          "repudiandae": "quo",
          "omnis": "adipisci",
        },
        storageDescriptor: {
          bucketColumns: [
            "qui",
          ],
          columns: [
            {
              comment: "in",
              name: "et",
              parameters: {
                "eos": "quas",
                "commodi": "eum",
                "ex": "aut",
              },
              type: "deleniti",
            },
            {
              comment: "quam",
              name: "in",
              parameters: {
                "aperiam": "molestiae",
              },
              type: "molestias",
            },
            {
              comment: "magnam",
              name: "voluptatem",
              parameters: {
                "et": "recusandae",
              },
              type: "error",
            },
          ],
          compressed: false,
          inputFormat: "et",
          location: "ratione",
          numberOfBuckets: 3189238340560411873,
          outputFormat: "in",
          parameters: {
            "dolores": "perferendis",
          },
          schemaReference: {
            schemaId: {
              registryName: "laboriosam",
              schemaArn: "numquam",
              schemaName: "necessitatibus",
            },
            schemaVersionId: "aperiam",
            schemaVersionNumber: 5993925161476307471,
          },
          serdeInfo: {
            name: "velit",
            parameters: {
              "hic": "quis",
              "sunt": "quo",
              "eveniet": "veniam",
            },
            serializationLibrary: "reiciendis",
          },
          skewedInfo: {
            skewedColumnNames: [
              "dolor",
              "maiores",
            ],
            skewedColumnValueLocationMaps: {
              "pariatur": "ad",
              "aperiam": "earum",
              "ea": "earum",
            },
            skewedColumnValues: [
              "error",
              "ipsa",
              "sint",
            ],
          },
          sortColumns: [
            {
              column: "qui",
              sortOrder: 6086645338585357339,
            },
            {
              column: "neque",
              sortOrder: 2732100335356235297,
            },
            {
              column: "ab",
              sortOrder: 3152036969321635858,
            },
          ],
          storedAsSubDirectories: true,
        },
        values: [
          "enim",
          "dignissimos",
          "rerum",
        ],
      },
      {
        lastAccessTime: "1985-07-03T17:55:52Z",
        lastAnalyzedTime: "1993-02-24T02:19:50Z",
        parameters: {
          "ut": "assumenda",
        },
        storageDescriptor: {
          bucketColumns: [
            "aut",
          ],
          columns: [
            {
              comment: "amet",
              name: "et",
              parameters: {
                "voluptatem": "nesciunt",
              },
              type: "natus",
            },
            {
              comment: "quasi",
              name: "et",
              parameters: {
                "autem": "quod",
                "impedit": "nostrum",
              },
              type: "repudiandae",
            },
            {
              comment: "dicta",
              name: "vero",
              parameters: {
                "delectus": "nam",
              },
              type: "deleniti",
            },
          ],
          compressed: false,
          inputFormat: "eius",
          location: "consequuntur",
          numberOfBuckets: 5084441811407222667,
          outputFormat: "laudantium",
          parameters: {
            "ullam": "quis",
          },
          schemaReference: {
            schemaId: {
              registryName: "facilis",
              schemaArn: "fugit",
              schemaName: "aut",
            },
            schemaVersionId: "id",
            schemaVersionNumber: 1104912452871584628,
          },
          serdeInfo: {
            name: "dicta",
            parameters: {
              "molestiae": "aliquam",
              "quos": "omnis",
              "illum": "repellat",
            },
            serializationLibrary: "id",
          },
          skewedInfo: {
            skewedColumnNames: [
              "possimus",
              "eius",
            ],
            skewedColumnValueLocationMaps: {
              "adipisci": "quasi",
            },
            skewedColumnValues: [
              "in",
              "fuga",
              "nemo",
            ],
          },
          sortColumns: [
            {
              column: "suscipit",
              sortOrder: 4754108277802182697,
            },
            {
              column: "ratione",
              sortOrder: 5969817432109258462,
            },
          ],
          storedAsSubDirectories: false,
        },
        values: [
          "autem",
        ],
      },
      {
        lastAccessTime: "1998-10-04T05:25:30Z",
        lastAnalyzedTime: "2010-02-05T01:48:43Z",
        parameters: {
          "recusandae": "quos",
        },
        storageDescriptor: {
          bucketColumns: [
            "veniam",
          ],
          columns: [
            {
              comment: "harum",
              name: "et",
              parameters: {
                "aliquam": "vel",
              },
              type: "cumque",
            },
          ],
          compressed: true,
          inputFormat: "earum",
          location: "quisquam",
          numberOfBuckets: 5627190705484135544,
          outputFormat: "id",
          parameters: {
            "esse": "dolores",
            "cum": "consequuntur",
          },
          schemaReference: {
            schemaId: {
              registryName: "vero",
              schemaArn: "quia",
              schemaName: "cupiditate",
            },
            schemaVersionId: "sed",
            schemaVersionNumber: 3120941714676877055,
          },
          serdeInfo: {
            name: "expedita",
            parameters: {
              "excepturi": "ut",
              "ipsa": "sit",
              "aliquid": "eos",
            },
            serializationLibrary: "itaque",
          },
          skewedInfo: {
            skewedColumnNames: [
              "soluta",
            ],
            skewedColumnValueLocationMaps: {
              "vel": "iusto",
              "voluptatum": "illo",
              "exercitationem": "aut",
            },
            skewedColumnValues: [
              "voluptate",
              "harum",
              "in",
            ],
          },
          sortColumns: [
            {
              column: "ut",
              sortOrder: 4835256354221490868,
            },
            {
              column: "sit",
              sortOrder: 7361183010849730604,
            },
          ],
          storedAsSubDirectories: false,
        },
        values: [
          "cum",
        ],
      },
    ],
    tableName: "dicta",
  },
};

sdk.sdk.batchCreatePartition(req).then((res: BatchCreatePartitionResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batchCreatePartition` - Creates one or more partitions in a batch operation.
* `batchDeleteConnection` - Deletes a list of connection definitions from the Data Catalog.
* `batchDeletePartition` - Deletes one or more partitions in a batch operation.
* `batchDeleteTable` - <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* `batchDeleteTableVersion` - Deletes a specified batch of versions of a table.
* `batchGetBlueprints` - Retrieves information about a list of blueprints.
* `batchGetCrawlers` - Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batchGetDevEndpoints` - Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batchGetJobs` - Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags. 
* `batchGetPartition` - Retrieves partitions in a batch request.
* `batchGetTriggers` - Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batchGetWorkflows` - Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batchStopJobRun` - Stops one or more job runs for a specified job definition.
* `batchUpdatePartition` - Updates one or more partitions in a batch operation.
* `cancelMlTaskRun` - Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. 
* `checkSchemaVersionValidity` - Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.
* `createBlueprint` - Registers a blueprint with Glue.
* `createClassifier` - Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
* `createConnection` - Creates a connection definition in the Data Catalog.
* `createCrawler` - Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
* `createDatabase` - Creates a new database in a Data Catalog.
* `createDevEndpoint` - Creates a new development endpoint.
* `createJob` - Creates a new job definition.
* `createMlTransform` - <p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
* `createPartition` - Creates a new partition.
* `createPartitionIndex` - Creates a specified partition index in an existing table.
* `createRegistry` - Creates a new registry which may be used to hold a collection of schemas.
* `createSchema` - <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
* `createScript` - Transforms a directed acyclic graph (DAG) into code.
* `createSecurityConfiguration` - Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
* `createTable` - Creates a new table definition in the Data Catalog.
* `createTrigger` - Creates a new trigger.
* `createUserDefinedFunction` - Creates a new function definition in the Data Catalog.
* `createWorkflow` - Creates a new workflow.
* `deleteBlueprint` - Deletes an existing blueprint.
* `deleteClassifier` - Removes a classifier from the Data Catalog.
* `deleteColumnStatisticsForPartition` - <p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
* `deleteColumnStatisticsForTable` - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
* `deleteConnection` - Deletes a connection from the Data Catalog.
* `deleteCrawler` - Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
* `deleteDatabase` - <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
* `deleteDevEndpoint` - Deletes a specified development endpoint.
* `deleteJob` - Deletes a specified job definition. If the job definition is not found, no exception is thrown.
* `deleteMlTransform` - Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.
* `deletePartition` - Deletes a specified partition.
* `deletePartitionIndex` - Deletes a specified partition index from an existing table.
* `deleteRegistry` - Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. 
* `deleteResourcePolicy` - Deletes a specified policy.
* `deleteSchema` - Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.
* `deleteSchemaVersions` - <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
* `deleteSecurityConfiguration` - Deletes a specified security configuration.
* `deleteTable` - <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* `deleteTableVersion` - Deletes a specified version of a table.
* `deleteTrigger` - Deletes a specified trigger. If the trigger is not found, no exception is thrown.
* `deleteUserDefinedFunction` - Deletes an existing function definition from the Data Catalog.
* `deleteWorkflow` - Deletes a workflow.
* `getBlueprint` - Retrieves the details of a blueprint.
* `getBlueprintRun` - Retrieves the details of a blueprint run.
* `getBlueprintRuns` - Retrieves the details of blueprint runs for a specified blueprint.
* `getCatalogImportStatus` - Retrieves the status of a migration operation.
* `getClassifier` - Retrieve a classifier by name.
* `getClassifiers` - Lists all classifier objects in the Data Catalog.
* `getColumnStatisticsForPartition` - <p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
* `getColumnStatisticsForTable` - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
* `getConnection` - Retrieves a connection definition from the Data Catalog.
* `getConnections` - Retrieves a list of connection definitions from the Data Catalog.
* `getCrawler` - Retrieves metadata for a specified crawler.
* `getCrawlerMetrics` - Retrieves metrics about specified crawlers.
* `getCrawlers` - Retrieves metadata for all crawlers defined in the customer account.
* `getDataCatalogEncryptionSettings` - Retrieves the security configuration for a specified catalog.
* `getDatabase` - Retrieves the definition of a specified database.
* `getDatabases` - Retrieves all databases defined in a given Data Catalog.
* `getDataflowGraph` - Transforms a Python script into a directed acyclic graph (DAG). 
* `getDevEndpoint` - <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* `getDevEndpoints` - <p>Retrieves all the development endpoints in this AWS account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* `getJob` - Retrieves an existing job definition.
* `getJobBookmark` - Returns information on a job bookmark entry.
* `getJobRun` - Retrieves the metadata for a given job run.
* `getJobRuns` - Retrieves metadata for all runs of a given job definition.
* `getJobs` - Retrieves all current job definitions.
* `getMlTaskRun` - Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
* `getMlTaskRuns` - <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
* `getMlTransform` - Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
* `getMlTransforms` - Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
* `getMapping` - Creates mappings.
* `getPartition` - Retrieves information about a specified partition.
* `getPartitionIndexes` - Retrieves the partition indexes associated with a table.
* `getPartitions` - Retrieves information about the partitions in a table.
* `getPlan` - Gets code to perform a specified mapping.
* `getRegistry` - Describes the specified registry in detail.
* `getResourcePolicies` - <p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>
* `getResourcePolicy` - Retrieves a specified resource policy.
* `getSchema` - Describes the specified schema in detail.
* `getSchemaByDefinition` - Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.
* `getSchemaVersion` - Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.
* `getSchemaVersionsDiff` - <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
* `getSecurityConfiguration` - Retrieves a specified security configuration.
* `getSecurityConfigurations` - Retrieves a list of all security configurations.
* `getTable` - Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
* `getTableVersion` - Retrieves a specified version of a table.
* `getTableVersions` - Retrieves a list of strings that identify available versions of a specified table.
* `getTables` - Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
* `getTags` - Retrieves a list of tags associated with a resource.
* `getTrigger` - Retrieves the definition of a trigger.
* `getTriggers` - Gets all the triggers associated with a job.
* `getUserDefinedFunction` - Retrieves a specified function definition from the Data Catalog.
* `getUserDefinedFunctions` - Retrieves multiple function definitions from the Data Catalog.
* `getWorkflow` - Retrieves resource metadata for a workflow.
* `getWorkflowRun` - Retrieves the metadata for a given workflow run. 
* `getWorkflowRunProperties` - Retrieves the workflow run properties which were set during the run.
* `getWorkflowRuns` - Retrieves metadata for all runs of a given workflow.
* `importCatalogToGlue` - Imports an existing Amazon Athena Data Catalog to Glue.
* `listBlueprints` - Lists all the blueprint names in an account.
* `listCrawlers` - <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `listDevEndpoints` - <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `listJobs` - <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `listMlTransforms` -  Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved. 
* `listRegistries` - Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.
* `listSchemaVersions` - Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.
* `listSchemas` - <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
* `listTriggers` - <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `listWorkflows` - Lists names of workflows created in the account.
* `putDataCatalogEncryptionSettings` - Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
* `putResourcePolicy` - Sets the Data Catalog resource policy for access control.
* `putSchemaVersionMetadata` - Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
* `putWorkflowRunProperties` - Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
* `querySchemaVersionMetadata` - Queries for the schema version metadata information. 
* `registerSchemaVersion` - <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
* `removeSchemaVersionMetadata` - Removes a key value pair from the schema version metadata for the specified schema version ID.
* `resetJobBookmark` - Resets a bookmark entry.
* `resumeWorkflowRun` - Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.
* `searchTables` - <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
* `startBlueprintRun` - Starts a new run of the specified blueprint.
* `startCrawler` - Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
* `startCrawlerSchedule` - Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
* `startExportLabelsTaskRun` - Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
* `startImportLabelsTaskRun` - <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
* `startJobRun` - Starts a job run using a job definition.
* `startMlEvaluationTaskRun` - <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
* `startMlLabelingSetGenerationTaskRun` - <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
* `startTrigger` - Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
* `startWorkflowRun` - Starts a new run of the specified workflow.
* `stopCrawler` - If the specified crawler is running, stops the crawl.
* `stopCrawlerSchedule` - Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
* `stopTrigger` - Stops a specified trigger.
* `stopWorkflowRun` - Stops the execution of the specified workflow run.
* `tagResource` - Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.
* `untagResource` - Removes tags from a resource.
* `updateBlueprint` - Updates a registered blueprint.
* `updateClassifier` - Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
* `updateColumnStatisticsForPartition` - <p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
* `updateColumnStatisticsForTable` - <p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
* `updateConnection` - Updates a connection definition in the Data Catalog.
* `updateCrawler` - Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
* `updateCrawlerSchedule` - Updates the schedule of a crawler using a <code>cron</code> expression. 
* `updateDatabase` - Updates an existing database definition in a Data Catalog.
* `updateDevEndpoint` - Updates a specified development endpoint.
* `updateJob` - Updates an existing job definition.
* `updateMlTransform` - <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
* `updatePartition` - Updates a partition.
* `updateRegistry` - Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. 
* `updateSchema` - <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>
* `updateTable` - Updates a metadata table in the Data Catalog.
* `updateTrigger` - Updates a trigger definition.
* `updateUserDefinedFunction` - Updates an existing function definition in the Data Catalog.
* `updateWorkflow` - Updates an existing workflow.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
