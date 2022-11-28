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
    
    req := operations.BatchGetNamedQueryRequest{
        Headers: operations.BatchGetNamedQueryHeaders{
            XAmzAlgorithm: "ad",
            XAmzContentSha256: "magni",
            XAmzCredential: "voluptas",
            XAmzDate: "odio",
            XAmzSecurityToken: "aliquid",
            XAmzSignature: "nostrum",
            XAmzSignedHeaders: "et",
            XAmzTarget: "AmazonAthena.BatchGetNamedQuery",
        },
        Request: shared.BatchGetNamedQueryInput{
            NamedQueryIds: []string{
                "nostrum",
                "illum",
                "aut",
            },
        },
    }
    
    res, err := s.Sdk.BatchGetNamedQuery(ctx, req)
    if err != nil {
        log.Fatal(err)
    }

    if res.BatchGetNamedQueryOutput != nil {
        // handle response
    }
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## SDK Available Operations

### SDK SDK

* `BatchGetNamedQuery` - Returns the details of a single named query or a list of up to 50 queries, which you provide as an array of query ID strings. Requires you to have access to the workgroup in which the queries were saved. Use <a>ListNamedQueriesInput</a> to get the list of named query IDs in the specified workgroup. If information could not be retrieved for a submitted query ID, information about the query ID submitted is listed under <a>UnprocessedNamedQueryId</a>. Named queries differ from executed queries. Use <a>BatchGetQueryExecutionInput</a> to get details about each unique query execution, and <a>ListQueryExecutionsInput</a> to get a list of query execution IDs.
* `BatchGetQueryExecution` - Returns the details of a single query execution or a list of up to 50 query executions, which you provide as an array of query execution ID strings. Requires you to have access to the workgroup in which the queries ran. To get a list of query execution IDs, use <a>ListQueryExecutionsInput$WorkGroup</a>. Query executions differ from named (saved) queries. Use <a>BatchGetNamedQueryInput</a> to get details about named queries.
* `CreateDataCatalog` - Creates (registers) a data catalog with the specified name and properties. Catalogs created are visible to all users of the same Amazon Web Services account.
* `CreateNamedQuery` - <p>Creates a named query in the specified workgroup. Requires that you have access to the workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `CreatePreparedStatement` - Creates a prepared statement for use with SQL queries in Athena.
* `CreateWorkGroup` - Creates a workgroup with the specified name.
* `DeleteDataCatalog` - Deletes a data catalog.
* `DeleteNamedQuery` - <p>Deletes the named query if you have access to the workgroup in which the query was saved.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `DeletePreparedStatement` - Deletes the prepared statement with the specified name from the specified workgroup.
* `DeleteWorkGroup` - Deletes the workgroup with the specified name. The primary workgroup cannot be deleted.
* `GetDataCatalog` - Returns the specified data catalog.
* `GetDatabase` - Returns a database object for the specified database and data catalog.
* `GetNamedQuery` - Returns information about a single query. Requires that you have access to the workgroup in which the query was saved.
* `GetPreparedStatement` - Retrieves the prepared statement with the specified name from the specified workgroup.
* `GetQueryExecution` - Returns information about a single execution of a query if you have access to the workgroup in which the query ran. Each time a query executes, information about the query execution is saved with a unique ID.
* `GetQueryResults` - <p>Streams the results of a single query execution specified by <code>QueryExecutionId</code> from the Athena query results location in Amazon S3. For more information, see <a href="https://docs.aws.amazon.com/athena/latest/ug/querying.html">Query Results</a> in the <i>Amazon Athena User Guide</i>. This request does not execute the query but returns results. Use <a>StartQueryExecution</a> to run a query.</p> <p>To stream query results successfully, the IAM principal with permission to call <code>GetQueryResults</code> also must have permissions to the Amazon S3 <code>GetObject</code> action for the Athena query results location.</p> <important> <p>IAM principals with permission to the Amazon S3 <code>GetObject</code> action for the query results location are able to retrieve query results from Amazon S3 even if permission to the <code>GetQueryResults</code> action is denied. To restrict user or role access, ensure that Amazon S3 permissions to the Athena query location are denied.</p> </important>
* `GetTableMetadata` - Returns table metadata for the specified catalog, database, and table.
* `GetWorkGroup` - Returns information about the workgroup with the specified name.
* `ListDataCatalogs` - Lists the data catalogs in the current Amazon Web Services account.
* `ListDatabases` - Lists the databases in the specified data catalog.
* `ListEngineVersions` - Returns a list of engine versions that are available to choose from, including the Auto option.
* `ListNamedQueries` - <p>Provides a list of available query IDs only for queries saved in the specified workgroup. Requires that you have access to the specified workgroup. If a workgroup is not specified, lists the saved queries for the primary workgroup.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `ListPreparedStatements` - Lists the prepared statements in the specfied workgroup.
* `ListQueryExecutions` - <p>Provides a list of available query execution IDs for the queries in the specified workgroup. If a workgroup is not specified, returns a list of query execution IDs for the primary workgroup. Requires you to have access to the workgroup in which the queries ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `ListTableMetadata` - Lists the metadata for the tables in the specified data catalog database.
* `ListTagsForResource` - Lists the tags associated with an Athena workgroup or data catalog resource.
* `ListWorkGroups` - Lists available workgroups for the account.
* `StartQueryExecution` - Runs the SQL query statements contained in the <code>Query</code>. Requires you to have access to the workgroup in which the query ran. Running queries against an external catalog requires <a>GetDataCatalog</a> permission to the catalog. For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.
* `StopQueryExecution` - <p>Stops a query execution. Requires you to have access to the workgroup in which the query ran.</p> <p>For code samples using the Amazon Web Services SDK for Java, see <a href="http://docs.aws.amazon.com/athena/latest/ug/code-samples.html">Examples and Code Samples</a> in the <i>Amazon Athena User Guide</i>.</p>
* `TagResource` - Adds one or more tags to an Athena resource. A tag is a label that you assign to a resource. In Athena, a resource can be a workgroup or data catalog. Each tag consists of a key and an optional value, both of which you define. For example, you can use tags to categorize Athena workgroups or data catalogs by purpose, owner, or environment. Use a consistent set of tag keys to make it easier to search and filter workgroups or data catalogs in your account. For best practices, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">Tagging Best Practices</a>. Tag keys can be from 1 to 128 UTF-8 Unicode characters, and tag values can be from 0 to 256 UTF-8 Unicode characters. Tags can use letters and numbers representable in UTF-8, and the following characters: + - = . _ : / @. Tag keys and values are case-sensitive. Tag keys must be unique per resource. If you specify more than one tag, separate them by commas.
* `UntagResource` - Removes one or more tags from a data catalog or workgroup resource.
* `UpdateDataCatalog` - Updates the data catalog that has the specified name.
* `UpdatePreparedStatement` - Updates a prepared statement.
* `UpdateWorkGroup` - Updates the workgroup with the specified name. The workgroup's name cannot be changed.

<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
