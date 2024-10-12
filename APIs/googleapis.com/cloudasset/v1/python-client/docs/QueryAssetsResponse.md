# QueryAssetsResponse

QueryAssets response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**done** | **bool** | The query response, which can be either an &#x60;error&#x60; or a valid &#x60;response&#x60;. If &#x60;done&#x60; &#x3D;&#x3D; &#x60;false&#x60; and the query result is being saved in a output, the output_config field will be set. If &#x60;done&#x60; &#x3D;&#x3D; &#x60;true&#x60;, exactly one of &#x60;error&#x60;, &#x60;query_result&#x60; or &#x60;output_config&#x60; will be set. | [optional] 
**error** | [**Status**](Status.md) |  | [optional] 
**job_reference** | **str** | Reference to a query job. | [optional] 
**output_config** | [**QueryAssetsOutputConfig**](QueryAssetsOutputConfig.md) |  | [optional] 
**query_result** | [**QueryResult**](QueryResult.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_assets_response import QueryAssetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryAssetsResponse from a JSON string
query_assets_response_instance = QueryAssetsResponse.from_json(json)
# print the JSON string representation of the object
print(QueryAssetsResponse.to_json())

# convert the object into a dict
query_assets_response_dict = query_assets_response_instance.to_dict()
# create an instance of QueryAssetsResponse from a dict
query_assets_response_from_dict = QueryAssetsResponse.from_dict(query_assets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


