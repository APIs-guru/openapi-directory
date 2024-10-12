# QueryOptions

Query optimizer configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**optimizer_statistics_package** | **str** | An option to control the selection of optimizer statistics package. This parameter allows individual queries to use a different query optimizer statistics package. Specifying &#x60;latest&#x60; as a value instructs Cloud Spanner to use the latest generated statistics package. If not specified, Cloud Spanner uses the statistics package set at the database level options, or the latest package if the database option is not set. The statistics package requested by the query has to be exempt from garbage collection. This can be achieved with the following DDL statement: &#x60;&#x60;&#x60; ALTER STATISTICS SET OPTIONS (allow_gc&#x3D;false) &#x60;&#x60;&#x60; The list of available statistics packages can be queried from &#x60;INFORMATION_SCHEMA.SPANNER_STATISTICS&#x60;. Executing a SQL statement with an invalid optimizer statistics package or with a statistics package that allows garbage collection fails with an &#x60;INVALID_ARGUMENT&#x60; error. | [optional] 
**optimizer_version** | **str** | An option to control the selection of optimizer version. This parameter allows individual queries to pick different query optimizer versions. Specifying &#x60;latest&#x60; as a value instructs Cloud Spanner to use the latest supported query optimizer version. If not specified, Cloud Spanner uses the optimizer version set at the database level options. Any other positive integer (from the list of supported optimizer versions) overrides the default optimizer version for query execution. The list of supported optimizer versions can be queried from SPANNER_SYS.SUPPORTED_OPTIMIZER_VERSIONS. Executing a SQL statement with an invalid optimizer version fails with an &#x60;INVALID_ARGUMENT&#x60; error. See https://cloud.google.com/spanner/docs/query-optimizer/manage-query-optimizer for more information on managing the query optimizer. The &#x60;optimizer_version&#x60; statement hint has precedence over this setting. | [optional] 

## Example

```python
from openapi_client.models.query_options import QueryOptions

# TODO update the JSON string below
json = "{}"
# create an instance of QueryOptions from a JSON string
query_options_instance = QueryOptions.from_json(json)
# print the JSON string representation of the object
print(QueryOptions.to_json())

# convert the object into a dict
query_options_dict = query_options_instance.to_dict()
# create an instance of QueryOptions from a dict
query_options_from_dict = QueryOptions.from_dict(query_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


