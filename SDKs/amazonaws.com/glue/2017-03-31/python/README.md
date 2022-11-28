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
    
req = operations.BatchCreatePartitionRequest(
    headers=operations.BatchCreatePartitionHeaders(
        x_amz_algorithm="iste",
        x_amz_content_sha256="deleniti",
        x_amz_credential="libero",
        x_amz_date="saepe",
        x_amz_security_token="et",
        x_amz_signature="corporis",
        x_amz_signed_headers="a",
        x_amz_target="AWSGlue.BatchCreatePartition",
    ),
    request=shared.BatchCreatePartitionRequest(
        catalog_id="numquam",
        database_name="dolores",
        partition_input_list=[
            shared.PartitionInput(
                last_access_time="1997-09-15T16:54:12Z",
                last_analyzed_time="2012-08-01T13:14:53Z",
                parameters={
                    "repudiandae": "quo",
                    "omnis": "adipisci",
                },
                storage_descriptor=shared.StorageDescriptor(
                    bucket_columns=[
                        "qui",
                    ],
                    columns=[
                        shared.Column(
                            comment="in",
                            name="et",
                            parameters={
                                "eos": "quas",
                                "commodi": "eum",
                                "ex": "aut",
                            },
                            type="deleniti",
                        ),
                        shared.Column(
                            comment="quam",
                            name="in",
                            parameters={
                                "aperiam": "molestiae",
                            },
                            type="molestias",
                        ),
                        shared.Column(
                            comment="magnam",
                            name="voluptatem",
                            parameters={
                                "et": "recusandae",
                            },
                            type="error",
                        ),
                    ],
                    compressed=False,
                    input_format="et",
                    location="ratione",
                    number_of_buckets=3189238340560411873,
                    output_format="in",
                    parameters={
                        "dolores": "perferendis",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="laboriosam",
                            schema_arn="numquam",
                            schema_name="necessitatibus",
                        ),
                        schema_version_id="aperiam",
                        schema_version_number=5993925161476307471,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="velit",
                        parameters={
                            "hic": "quis",
                            "sunt": "quo",
                            "eveniet": "veniam",
                        },
                        serialization_library="reiciendis",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "dolor",
                            "maiores",
                        ],
                        skewed_column_value_location_maps={
                            "pariatur": "ad",
                            "aperiam": "earum",
                            "ea": "earum",
                        },
                        skewed_column_values=[
                            "error",
                            "ipsa",
                            "sint",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="qui",
                            sort_order=6086645338585357339,
                        ),
                        shared.Order(
                            column="neque",
                            sort_order=2732100335356235297,
                        ),
                        shared.Order(
                            column="ab",
                            sort_order=3152036969321635858,
                        ),
                    ],
                    stored_as_sub_directories=True,
                ),
                values=[
                    "enim",
                    "dignissimos",
                    "rerum",
                ],
            ),
            shared.PartitionInput(
                last_access_time="1985-07-03T17:28:14Z",
                last_analyzed_time="1993-02-24T01:52:12Z",
                parameters={
                    "ut": "assumenda",
                },
                storage_descriptor=shared.StorageDescriptor(
                    bucket_columns=[
                        "aut",
                    ],
                    columns=[
                        shared.Column(
                            comment="amet",
                            name="et",
                            parameters={
                                "voluptatem": "nesciunt",
                            },
                            type="natus",
                        ),
                        shared.Column(
                            comment="quasi",
                            name="et",
                            parameters={
                                "autem": "quod",
                                "impedit": "nostrum",
                            },
                            type="repudiandae",
                        ),
                        shared.Column(
                            comment="dicta",
                            name="vero",
                            parameters={
                                "delectus": "nam",
                            },
                            type="deleniti",
                        ),
                    ],
                    compressed=False,
                    input_format="eius",
                    location="consequuntur",
                    number_of_buckets=5084441811407222667,
                    output_format="laudantium",
                    parameters={
                        "ullam": "quis",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="facilis",
                            schema_arn="fugit",
                            schema_name="aut",
                        ),
                        schema_version_id="id",
                        schema_version_number=1104912452871584628,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="dicta",
                        parameters={
                            "molestiae": "aliquam",
                            "quos": "omnis",
                            "illum": "repellat",
                        },
                        serialization_library="id",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "possimus",
                            "eius",
                        ],
                        skewed_column_value_location_maps={
                            "adipisci": "quasi",
                        },
                        skewed_column_values=[
                            "in",
                            "fuga",
                            "nemo",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="suscipit",
                            sort_order=4754108277802182697,
                        ),
                        shared.Order(
                            column="ratione",
                            sort_order=5969817432109258462,
                        ),
                    ],
                    stored_as_sub_directories=False,
                ),
                values=[
                    "autem",
                ],
            ),
            shared.PartitionInput(
                last_access_time="1998-10-04T04:57:52Z",
                last_analyzed_time="2010-02-05T01:21:05Z",
                parameters={
                    "recusandae": "quos",
                },
                storage_descriptor=shared.StorageDescriptor(
                    bucket_columns=[
                        "veniam",
                    ],
                    columns=[
                        shared.Column(
                            comment="harum",
                            name="et",
                            parameters={
                                "aliquam": "vel",
                            },
                            type="cumque",
                        ),
                    ],
                    compressed=True,
                    input_format="earum",
                    location="quisquam",
                    number_of_buckets=5627190705484135544,
                    output_format="id",
                    parameters={
                        "esse": "dolores",
                        "cum": "consequuntur",
                    },
                    schema_reference=shared.SchemaReference(
                        schema_id=shared.SchemaID(
                            registry_name="vero",
                            schema_arn="quia",
                            schema_name="cupiditate",
                        ),
                        schema_version_id="sed",
                        schema_version_number=3120941714676877055,
                    ),
                    serde_info=shared.SerDeInfo(
                        name="expedita",
                        parameters={
                            "excepturi": "ut",
                            "ipsa": "sit",
                            "aliquid": "eos",
                        },
                        serialization_library="itaque",
                    ),
                    skewed_info=shared.SkewedInfo(
                        skewed_column_names=[
                            "soluta",
                        ],
                        skewed_column_value_location_maps={
                            "vel": "iusto",
                            "voluptatum": "illo",
                            "exercitationem": "aut",
                        },
                        skewed_column_values=[
                            "voluptate",
                            "harum",
                            "in",
                        ],
                    ),
                    sort_columns=[
                        shared.Order(
                            column="ut",
                            sort_order=4835256354221490868,
                        ),
                        shared.Order(
                            column="sit",
                            sort_order=7361183010849730604,
                        ),
                    ],
                    stored_as_sub_directories=False,
                ),
                values=[
                    "cum",
                ],
            ),
        ],
        table_name="dicta",
    ),
)
    
res = s.sdk.batch_create_partition(req)

if res.batch_create_partition_response is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_create_partition` - Creates one or more partitions in a batch operation.
* `batch_delete_connection` - Deletes a list of connection definitions from the Data Catalog.
* `batch_delete_partition` - Deletes one or more partitions in a batch operation.
* `batch_delete_table` - <p>Deletes multiple tables at once.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* `batch_delete_table_version` - Deletes a specified batch of versions of a table.
* `batch_get_blueprints` - Retrieves information about a list of blueprints.
* `batch_get_crawlers` - Returns a list of resource metadata for a given list of crawler names. After calling the <code>ListCrawlers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batch_get_dev_endpoints` - Returns a list of resource metadata for a given list of development endpoint names. After calling the <code>ListDevEndpoints</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batch_get_jobs` - Returns a list of resource metadata for a given list of job names. After calling the <code>ListJobs</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags. 
* `batch_get_partition` - Retrieves partitions in a batch request.
* `batch_get_triggers` - Returns a list of resource metadata for a given list of trigger names. After calling the <code>ListTriggers</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batch_get_workflows` - Returns a list of resource metadata for a given list of workflow names. After calling the <code>ListWorkflows</code> operation, you can call this operation to access the data to which you have been granted permissions. This operation supports all IAM permissions, including permission conditions that uses tags.
* `batch_stop_job_run` - Stops one or more job runs for a specified job definition.
* `batch_update_partition` - Updates one or more partitions in a batch operation.
* `cancel_ml_task_run` - Cancels (stops) a task run. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can cancel a machine learning task run at any time by calling <code>CancelMLTaskRun</code> with a task run's parent transform's <code>TransformID</code> and the task run's <code>TaskRunId</code>. 
* `check_schema_version_validity` - Validates the supplied schema. This call has no side effects, it simply validates using the supplied schema using <code>DataFormat</code> as the format. Since it does not take a schema set name, no compatibility checks are performed.
* `create_blueprint` - Registers a blueprint with Glue.
* `create_classifier` - Creates a classifier in the user's account. This can be a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field of the request is present.
* `create_connection` - Creates a connection definition in the Data Catalog.
* `create_crawler` - Creates a new crawler with specified targets, role, configuration, and optional schedule. At least one crawl target must be specified, in the <code>s3Targets</code> field, the <code>jdbcTargets</code> field, or the <code>DynamoDBTargets</code> field.
* `create_database` - Creates a new database in a Data Catalog.
* `create_dev_endpoint` - Creates a new development endpoint.
* `create_job` - Creates a new job definition.
* `create_ml_transform` - <p>Creates an Glue machine learning transform. This operation creates the transform and all the necessary parameters to train it.</p> <p>Call this operation as the first step in the process of using a machine learning transform (such as the <code>FindMatches</code> transform) for deduplicating data. You can provide an optional <code>Description</code>, in addition to the parameters that you want to use for your algorithm.</p> <p>You must also specify certain parameters for the tasks that Glue runs on your behalf as part of learning from your data and creating a high-quality machine learning transform. These parameters include <code>Role</code>, and optionally, <code>AllocatedCapacity</code>, <code>Timeout</code>, and <code>MaxRetries</code>. For more information, see <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-jobs-job.html">Jobs</a>.</p>
* `create_partition` - Creates a new partition.
* `create_partition_index` - Creates a specified partition index in an existing table.
* `create_registry` - Creates a new registry which may be used to hold a collection of schemas.
* `create_schema` - <p>Creates a new schema set and registers the schema definition. Returns an error if the schema set already exists without actually registering the version.</p> <p>When the schema set is created, a version checkpoint will be set to the first version. Compatibility mode "DISABLED" restricts any additional schema versions from being added after the first schema version. For all other compatibility modes, validation of compatibility settings will be applied only from the second version onwards when the <code>RegisterSchemaVersion</code> API is used.</p> <p>When this API is called without a <code>RegistryId</code>, this will create an entry for a "default-registry" in the registry database tables, if it is not already present.</p>
* `create_script` - Transforms a directed acyclic graph (DAG) into code.
* `create_security_configuration` - Creates a new security configuration. A security configuration is a set of security properties that can be used by Glue. You can use a security configuration to encrypt data at rest. For information about using security configurations in Glue, see <a href="https://docs.aws.amazon.com/glue/latest/dg/encryption-security-configuration.html">Encrypting Data Written by Crawlers, Jobs, and Development Endpoints</a>.
* `create_table` - Creates a new table definition in the Data Catalog.
* `create_trigger` - Creates a new trigger.
* `create_user_defined_function` - Creates a new function definition in the Data Catalog.
* `create_workflow` - Creates a new workflow.
* `delete_blueprint` - Deletes an existing blueprint.
* `delete_classifier` - Removes a classifier from the Data Catalog.
* `delete_column_statistics_for_partition` - <p>Delete the partition column statistics of a column.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeletePartition</code>.</p>
* `delete_column_statistics_for_table` - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>DeleteTable</code>.</p>
* `delete_connection` - Deletes a connection from the Data Catalog.
* `delete_crawler` - Removes a specified crawler from the Glue Data Catalog, unless the crawler state is <code>RUNNING</code>.
* `delete_database` - <p>Removes a specified database from a Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that belong to the database.</p> </note>
* `delete_dev_endpoint` - Deletes a specified development endpoint.
* `delete_job` - Deletes a specified job definition. If the job definition is not found, no exception is thrown.
* `delete_ml_transform` - Deletes an Glue machine learning transform. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. If you no longer need a transform, you can delete it by calling <code>DeleteMLTransforms</code>. However, any Glue jobs that still reference the deleted transform will no longer succeed.
* `delete_partition` - Deletes a specified partition.
* `delete_partition_index` - Deletes a specified partition index from an existing table.
* `delete_registry` - Delete the entire registry including schema and all of its versions. To get the status of the delete operation, you can call the <code>GetRegistry</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the registry such as the <code>UpdateRegistry</code>, <code>CreateSchema</code>, <code>UpdateSchema</code>, and <code>RegisterSchemaVersion</code> APIs. 
* `delete_resource_policy` - Deletes a specified policy.
* `delete_schema` - Deletes the entire schema set, including the schema set and all of its versions. To get the status of the delete operation, you can call <code>GetSchema</code> API after the asynchronous call. Deleting a registry will deactivate all online operations for the schema, such as the <code>GetSchemaByDefinition</code>, and <code>RegisterSchemaVersion</code> APIs.
* `delete_schema_versions` - <p>Remove versions from the specified schema. A version number or range may be supplied. If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned. Calling the <code>GetSchemaVersions</code> API after this call will list the status of the deleted versions.</p> <p>When the range of version numbers contain check pointed version, the API will return a 409 conflict and will not proceed with the deletion. You have to remove the checkpoint first using the <code>DeleteSchemaCheckpoint</code> API before using this API.</p> <p>You cannot use the <code>DeleteSchemaVersions</code> API to delete the first schema version in the schema set. The first schema version can only be deleted by the <code>DeleteSchema</code> API. This operation will also delete the attached <code>SchemaVersionMetadata</code> under the schema versions. Hard deletes will be enforced on the database.</p> <p>If the compatibility mode forbids deleting of a version that is necessary, such as BACKWARDS_FULL, an error is returned.</p>
* `delete_security_configuration` - Deletes a specified security configuration.
* `delete_table` - <p>Removes a table definition from the Data Catalog.</p> <note> <p>After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p> <p>To ensure the immediate deletion of all related resources, before calling <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or <code>BatchDeletePartition</code>, to delete any resources that belong to the table.</p> </note>
* `delete_table_version` - Deletes a specified version of a table.
* `delete_trigger` - Deletes a specified trigger. If the trigger is not found, no exception is thrown.
* `delete_user_defined_function` - Deletes an existing function definition from the Data Catalog.
* `delete_workflow` - Deletes a workflow.
* `get_blueprint` - Retrieves the details of a blueprint.
* `get_blueprint_run` - Retrieves the details of a blueprint run.
* `get_blueprint_runs` - Retrieves the details of blueprint runs for a specified blueprint.
* `get_catalog_import_status` - Retrieves the status of a migration operation.
* `get_classifier` - Retrieve a classifier by name.
* `get_classifiers` - Lists all classifier objects in the Data Catalog.
* `get_column_statistics_for_partition` - <p>Retrieves partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetPartition</code>.</p>
* `get_column_statistics_for_table` - <p>Retrieves table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
* `get_connection` - Retrieves a connection definition from the Data Catalog.
* `get_connections` - Retrieves a list of connection definitions from the Data Catalog.
* `get_crawler` - Retrieves metadata for a specified crawler.
* `get_crawler_metrics` - Retrieves metrics about specified crawlers.
* `get_crawlers` - Retrieves metadata for all crawlers defined in the customer account.
* `get_data_catalog_encryption_settings` - Retrieves the security configuration for a specified catalog.
* `get_database` - Retrieves the definition of a specified database.
* `get_databases` - Retrieves all databases defined in a given Data Catalog.
* `get_dataflow_graph` - Transforms a Python script into a directed acyclic graph (DAG). 
* `get_dev_endpoint` - <p>Retrieves information about a specified development endpoint.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address, and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* `get_dev_endpoints` - <p>Retrieves all the development endpoints in this AWS account.</p> <note> <p>When you create a development endpoint in a virtual private cloud (VPC), Glue returns only a private IP address and the public IP address field is not populated. When you create a non-VPC development endpoint, Glue returns only a public IP address.</p> </note>
* `get_job` - Retrieves an existing job definition.
* `get_job_bookmark` - Returns information on a job bookmark entry.
* `get_job_run` - Retrieves the metadata for a given job run.
* `get_job_runs` - Retrieves metadata for all runs of a given job definition.
* `get_jobs` - Retrieves all current job definitions.
* `get_ml_task_run` - Gets details for a specific task run on a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can check the stats of any task run by calling <code>GetMLTaskRun</code> with the <code>TaskRunID</code> and its parent transform's <code>TransformID</code>.
* `get_ml_task_runs` - <p>Gets a list of runs for a machine learning transform. Machine learning task runs are asynchronous tasks that Glue runs on your behalf as part of various machine learning workflows. You can get a sortable, filterable list of machine learning task runs by calling <code>GetMLTaskRuns</code> with their parent transform's <code>TransformID</code> and other optional parameters as documented in this section.</p> <p>This operation returns a list of historic runs and must be paginated.</p>
* `get_ml_transform` - Gets an Glue machine learning transform artifact and all its corresponding metadata. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue. You can retrieve their metadata by calling <code>GetMLTransform</code>.
* `get_ml_transforms` - Gets a sortable, filterable list of existing Glue machine learning transforms. Machine learning transforms are a special type of transform that use machine learning to learn the details of the transformation to be performed by learning from examples provided by humans. These transformations are then saved by Glue, and you can retrieve their metadata by calling <code>GetMLTransforms</code>.
* `get_mapping` - Creates mappings.
* `get_partition` - Retrieves information about a specified partition.
* `get_partition_indexes` - Retrieves the partition indexes associated with a table.
* `get_partitions` - Retrieves information about the partitions in a table.
* `get_plan` - Gets code to perform a specified mapping.
* `get_registry` - Describes the specified registry in detail.
* `get_resource_policies` - <p>Retrieves the resource policies set on individual resources by Resource Access Manager during cross-account permission grants. Also retrieves the Data Catalog resource policy.</p> <p>If you enabled metadata encryption in Data Catalog settings, and you do not have permission on the KMS key, the operation can't return the Data Catalog resource policy.</p>
* `get_resource_policy` - Retrieves a specified resource policy.
* `get_schema` - Describes the specified schema in detail.
* `get_schema_by_definition` - Retrieves a schema by the <code>SchemaDefinition</code>. The schema definition is sent to the Schema Registry, canonicalized, and hashed. If the hash is matched within the scope of the <code>SchemaName</code> or ARN (or the default registry, if none is supplied), that schema’s metadata is returned. Otherwise, a 404 or NotFound error is returned. Schema versions in <code>Deleted</code> statuses will not be included in the results.
* `get_schema_version` - Get the specified schema by its unique ID assigned when a version of the schema is created or registered. Schema versions in Deleted status will not be included in the results.
* `get_schema_versions_diff` - <p>Fetches the schema version difference in the specified difference type between two stored schema versions in the Schema Registry.</p> <p>This API allows you to compare two schema versions between two schema definitions under the same schema.</p>
* `get_security_configuration` - Retrieves a specified security configuration.
* `get_security_configurations` - Retrieves a list of all security configurations.
* `get_table` - Retrieves the <code>Table</code> definition in a Data Catalog for a specified table.
* `get_table_version` - Retrieves a specified version of a table.
* `get_table_versions` - Retrieves a list of strings that identify available versions of a specified table.
* `get_tables` - Retrieves the definitions of some or all of the tables in a given <code>Database</code>.
* `get_tags` - Retrieves a list of tags associated with a resource.
* `get_trigger` - Retrieves the definition of a trigger.
* `get_triggers` - Gets all the triggers associated with a job.
* `get_user_defined_function` - Retrieves a specified function definition from the Data Catalog.
* `get_user_defined_functions` - Retrieves multiple function definitions from the Data Catalog.
* `get_workflow` - Retrieves resource metadata for a workflow.
* `get_workflow_run` - Retrieves the metadata for a given workflow run. 
* `get_workflow_run_properties` - Retrieves the workflow run properties which were set during the run.
* `get_workflow_runs` - Retrieves metadata for all runs of a given workflow.
* `import_catalog_to_glue` - Imports an existing Amazon Athena Data Catalog to Glue.
* `list_blueprints` - Lists all the blueprint names in an account.
* `list_crawlers` - <p>Retrieves the names of all crawler resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `list_dev_endpoints` - <p>Retrieves the names of all <code>DevEndpoint</code> resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `list_jobs` - <p>Retrieves the names of all job resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `list_ml_transforms` -  Retrieves a sortable, filterable list of existing Glue machine learning transforms in this Amazon Web Services account, or the resources with the specified tag. This operation takes the optional <code>Tags</code> field, which you can use as a filter of the responses so that tagged resources can be retrieved as a group. If you choose to use tag filtering, only resources with the tags are retrieved. 
* `list_registries` - Returns a list of registries that you have created, with minimal registry information. Registries in the <code>Deleting</code> status will not be included in the results. Empty results will be returned if there are no registries available.
* `list_schema_versions` - Returns a list of schema versions that you have created, with minimal information. Schema versions in Deleted status will not be included in the results. Empty results will be returned if there are no schema versions available.
* `list_schemas` - <p>Returns a list of schemas with minimal details. Schemas in Deleting status will not be included in the results. Empty results will be returned if there are no schemas available.</p> <p>When the <code>RegistryId</code> is not provided, all the schemas across registries will be part of the API response.</p>
* `list_triggers` - <p>Retrieves the names of all trigger resources in this Amazon Web Services account, or the resources with the specified tag. This operation allows you to see which resources are available in your account, and their names.</p> <p>This operation takes the optional <code>Tags</code> field, which you can use as a filter on the response so that tagged resources can be retrieved as a group. If you choose to use tags filtering, only resources with the tag are retrieved.</p>
* `list_workflows` - Lists names of workflows created in the account.
* `put_data_catalog_encryption_settings` - Sets the security configuration for a specified catalog. After the configuration has been set, the specified encryption is applied to every catalog write thereafter.
* `put_resource_policy` - Sets the Data Catalog resource policy for access control.
* `put_schema_version_metadata` - Puts the metadata key value pair for a specified schema version ID. A maximum of 10 key value pairs will be allowed per schema version. They can be added over one or more calls.
* `put_workflow_run_properties` - Puts the specified workflow run properties for the given workflow run. If a property already exists for the specified run, then it overrides the value otherwise adds the property to existing properties.
* `query_schema_version_metadata` - Queries for the schema version metadata information. 
* `register_schema_version` - <p>Adds a new version to the existing schema. Returns an error if new version of schema does not meet the compatibility requirements of the schema set. This API will not create a new schema set and will return a 404 error if the schema set is not already present in the Schema Registry.</p> <p>If this is the first schema definition to be registered in the Schema Registry, this API will store the schema version and return immediately. Otherwise, this call has the potential to run longer than other operations due to compatibility modes. You can call the <code>GetSchemaVersion</code> API with the <code>SchemaVersionId</code> to check compatibility modes.</p> <p>If the same schema definition is already stored in Schema Registry as a version, the schema ID of the existing schema is returned to the caller.</p>
* `remove_schema_version_metadata` - Removes a key value pair from the schema version metadata for the specified schema version ID.
* `reset_job_bookmark` - Resets a bookmark entry.
* `resume_workflow_run` - Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.
* `search_tables` - <p>Searches a set of tables based on properties in the table metadata as well as on the parent database. You can search against text or filter conditions. </p> <p>You can only get tables that you have access to based on the security policies defined in Lake Formation. You need at least a read-only access to the table for it to be returned. If you do not have access to all the columns in the table, these columns will not be searched against when returning the list of tables back to you. If you have access to the columns but not the data in the columns, those columns and the associated metadata for those columns will be included in the search. </p>
* `start_blueprint_run` - Starts a new run of the specified blueprint.
* `start_crawler` - Starts a crawl using the specified crawler, regardless of what is scheduled. If the crawler is already running, returns a <a href="https://docs.aws.amazon.com/glue/latest/dg/aws-glue-api-exceptions.html#aws-glue-api-exceptions-CrawlerRunningException">CrawlerRunningException</a>.
* `start_crawler_schedule` - Changes the schedule state of the specified crawler to <code>SCHEDULED</code>, unless the crawler is already running or the schedule state is already <code>SCHEDULED</code>.
* `start_export_labels_task_run` - Begins an asynchronous task to export all labeled data for a particular transform. This task is the only label-related API call that is not part of the typical active learning workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with all of your existing labels at the same time, such as when you want to remove or change labels that were previously submitted as truth. This API operation accepts the <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage Service (Amazon S3) path to export the labels to. The operation returns a <code>TaskRunId</code>. You can check on the status of your task run by calling the <code>GetMLTaskRun</code> API.
* `start_import_labels_task_run` - <p>Enables you to provide additional labels (examples of truth) to be used to teach the machine learning transform and improve its quality. This API operation is generally used as part of the active learning workflow that starts with the <code>StartMLLabelingSetGenerationTaskRun</code> call and that ultimately results in improving the quality of your machine learning transform. </p> <p>After the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue machine learning will have generated a series of questions for humans to answer. (Answering these questions is often called 'labeling' in the machine learning workflows). In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” After the labeling process is finished, users upload their answers/labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform use the new and improved labels and perform a higher-quality transformation.</p> <p>By default, <code>StartMLLabelingSetGenerationTaskRun</code> continually learns from and combines all labels that you upload unless you set <code>Replace</code> to true. If you set <code>Replace</code> to true, <code>StartImportLabelsTaskRun</code> deletes and forgets all previously uploaded labels and learns only from the exact set that you upload. Replacing labels can be helpful if you realize that you previously uploaded incorrect labels, and you believe that they are having a negative effect on your transform quality.</p> <p>You can check on the status of your task run by calling the <code>GetMLTaskRun</code> operation. </p>
* `start_job_run` - Starts a job run using a job definition.
* `start_ml_evaluation_task_run` - <p>Starts a task to estimate the quality of the transform. </p> <p>When you provide label sets as examples of truth, Glue machine learning uses some of those examples to learn from them. The rest of the labels are used as a test to estimate quality.</p> <p>Returns a unique identifier for the run. You can call <code>GetMLTaskRun</code> to get more information about the stats of the <code>EvaluationTaskRun</code>.</p>
* `start_ml_labeling_set_generation_task_run` - <p>Starts the active learning workflow for your machine learning transform to improve the transform's quality by generating label sets and adding labels.</p> <p>When the <code>StartMLLabelingSetGenerationTaskRun</code> finishes, Glue will have generated a "labeling set" or a set of questions for humans to answer.</p> <p>In the case of the <code>FindMatches</code> transform, these questions are of the form, “What is the correct way to group these rows together into groups composed entirely of matching records?” </p> <p>After the labeling process is finished, you can upload your labels with a call to <code>StartImportLabelsTaskRun</code>. After <code>StartImportLabelsTaskRun</code> finishes, all future runs of the machine learning transform will use the new and improved labels and perform a higher-quality transformation.</p>
* `start_trigger` - Starts an existing trigger. See <a href="https://docs.aws.amazon.com/glue/latest/dg/trigger-job.html">Triggering Jobs</a> for information about how different types of trigger are started.
* `start_workflow_run` - Starts a new run of the specified workflow.
* `stop_crawler` - If the specified crawler is running, stops the crawl.
* `stop_crawler_schedule` - Sets the schedule state of the specified crawler to <code>NOT_SCHEDULED</code>, but does not stop the crawler if it is already running.
* `stop_trigger` - Stops a specified trigger.
* `stop_workflow_run` - Stops the execution of the specified workflow run.
* `tag_resource` - Adds tags to a resource. A tag is a label you can assign to an Amazon Web Services resource. In Glue, you can tag only certain resources. For information about what resources you can tag, see <a href="https://docs.aws.amazon.com/glue/latest/dg/monitor-tags.html">Amazon Web Services Tags in Glue</a>.
* `untag_resource` - Removes tags from a resource.
* `update_blueprint` - Updates a registered blueprint.
* `update_classifier` - Modifies an existing classifier (a <code>GrokClassifier</code>, an <code>XMLClassifier</code>, a <code>JsonClassifier</code>, or a <code>CsvClassifier</code>, depending on which field is present).
* `update_column_statistics_for_partition` - <p>Creates or updates partition statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdatePartition</code>.</p>
* `update_column_statistics_for_table` - <p>Creates or updates table statistics of columns.</p> <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
* `update_connection` - Updates a connection definition in the Data Catalog.
* `update_crawler` - Updates a crawler. If a crawler is running, you must stop it using <code>StopCrawler</code> before updating it.
* `update_crawler_schedule` - Updates the schedule of a crawler using a <code>cron</code> expression. 
* `update_database` - Updates an existing database definition in a Data Catalog.
* `update_dev_endpoint` - Updates a specified development endpoint.
* `update_job` - Updates an existing job definition.
* `update_ml_transform` - <p>Updates an existing machine learning transform. Call this operation to tune the algorithm parameters to achieve better results.</p> <p>After calling this operation, you can call the <code>StartMLEvaluationTaskRun</code> operation to assess how well your new parameters achieved your goals (such as improving the quality of your machine learning transform, or making it more cost-effective).</p>
* `update_partition` - Updates a partition.
* `update_registry` - Updates an existing registry which is used to hold a collection of schemas. The updated properties relate to the registry, and do not modify any of the schemas within the registry. 
* `update_schema` - <p>Updates the description, compatibility setting, or version checkpoint for a schema set.</p> <p>For updating the compatibility setting, the call will not validate compatibility for the entire set of schema versions with the new compatibility setting. If the value for <code>Compatibility</code> is provided, the <code>VersionNumber</code> (a checkpoint) is also required. The API will validate the checkpoint version number for consistency.</p> <p>If the value for the <code>VersionNumber</code> (checkpoint) is provided, <code>Compatibility</code> is optional and this can be used to set/reset a checkpoint for the schema.</p> <p>This update will happen only if the schema is in the AVAILABLE state.</p>
* `update_table` - Updates a metadata table in the Data Catalog.
* `update_trigger` - Updates a trigger definition.
* `update_user_defined_function` - Updates an existing function definition in the Data Catalog.
* `update_workflow` - Updates an existing workflow.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
