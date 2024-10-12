# StreamingEndpointListResult

The StreamingEndpoint list result.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_count** | **int** | The number of result. | [optional] 
**odata_next_link** | **str** | Th link to the next set of results. Not empty if value contains incomplete list of StreamingEndpoints. | [optional] 
**value** | [**List[StreamingEndpoint]**](StreamingEndpoint.md) | The result of the List StreamingEndpoint operation. | [optional] 

## Example

```python
from openapi_client.models.streaming_endpoint_list_result import StreamingEndpointListResult

# TODO update the JSON string below
json = "{}"
# create an instance of StreamingEndpointListResult from a JSON string
streaming_endpoint_list_result_instance = StreamingEndpointListResult.from_json(json)
# print the JSON string representation of the object
print(StreamingEndpointListResult.to_json())

# convert the object into a dict
streaming_endpoint_list_result_dict = streaming_endpoint_list_result_instance.to_dict()
# create an instance of StreamingEndpointListResult from a dict
streaming_endpoint_list_result_from_dict = StreamingEndpointListResult.from_dict(streaming_endpoint_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


