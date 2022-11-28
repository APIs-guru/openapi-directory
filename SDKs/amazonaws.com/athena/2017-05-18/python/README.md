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
    
req = operations.BatchGetNamedQueryRequest(
    headers=operations.BatchGetNamedQueryHeaders(
        x_amz_algorithm="ad",
        x_amz_content_sha256="magni",
        x_amz_credential="voluptas",
        x_amz_date="odio",
        x_amz_security_token="aliquid",
        x_amz_signature="nostrum",
        x_amz_signed_headers="et",
        x_amz_target="AmazonAthena.BatchGetNamedQuery",
    ),
    request=shared.BatchGetNamedQueryInput(
        named_query_ids=[
            "nostrum",
            "illum",
            "aut",
        ],
    ),
)
    
res = s.sdk.batch_get_named_query(req)

if res.batch_get_named_query_output is not None:
    # handle response
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `batch_get_named_query` - Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.
* `batch_get_query_execution` - Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.
* `create_data_catalog` - Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.
* `create_named_query` - <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `create_prepared_statement` - Creates a prepared statement for use with SQL queries in Athena.
* `create_work_group` - Creates a workgroup with the specified name.
* `delete_data_catalog` - Deletes a data catalog.
* `delete_named_query` - <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `delete_prepared_statement` - Deletes the prepared statement with the specified name from the specified workgroup.
* `delete_work_group` - Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
* `get_data_catalog` - Returns the specified data catalog.
* `get_database` - Returns a database object for the specified database and data catalog.
* `get_named_query` - Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
* `get_prepared_statement` - Retrieves the prepared statement with the specified name from the specified workgroup.
* `get_query_execution` - Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
* `get_query_results` - <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
* `get_table_metadata` - Returns table metadata for the specified catalog, database, and table.
* `get_work_group` - Returns information about the workgroup with the specified name.
* `list_data_catalogs` - Lists the data catalogs in the current Amazon Web Services account.
* `list_databases` - Lists the databases in the specified data catalog.
* `list_engine_versions` - Returns a list of engine versions that are available to choose from, including the Auto option.
* `list_named_queries` - <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `list_prepared_statements` - Lists the prepared statements in the specfied workgroup.
* `list_query_executions` - <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `list_table_metadata` - Lists the metadata for the tables in the specified data catalog database.
* `list_tags_for_resource` - Lists the tags associated with an Athena workgroup or data catalog resource.
* `list_work_groups` - Lists available workgroups for the account.
* `start_query_execution` - Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
* `stop_query_execution` - <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `tag_resource` - Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
* `untag_resource` - Removes one or more tags from a data catalog or workgroup resource.
* `update_data_catalog` - Updates the data catalog that has the specified name.
* `update_prepared_statement` - Updates a prepared statement.
* `update_work_group` - Updates the workgroup with the specified name. The workgroup's name cannot be changed.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
