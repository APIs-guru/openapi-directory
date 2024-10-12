# ListRuntimesResponse

Response for the `ListRuntimes` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**runtimes** | [**List[Runtime]**](Runtime.md) | The runtimes that match the request. | [optional] 

## Example

```python
from openapi_client.models.list_runtimes_response import ListRuntimesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRuntimesResponse from a JSON string
list_runtimes_response_instance = ListRuntimesResponse.from_json(json)
# print the JSON string representation of the object
print(ListRuntimesResponse.to_json())

# convert the object into a dict
list_runtimes_response_dict = list_runtimes_response_instance.to_dict()
# create an instance of ListRuntimesResponse from a dict
list_runtimes_response_from_dict = ListRuntimesResponse.from_dict(list_runtimes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


