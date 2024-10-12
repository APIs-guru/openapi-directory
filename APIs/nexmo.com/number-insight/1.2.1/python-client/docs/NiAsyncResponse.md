# NiAsyncResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | 
**name** | **str** |  | 
**tag** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.ni_async_response import NiAsyncResponse

# TODO update the JSON string below
json = "{}"
# create an instance of NiAsyncResponse from a JSON string
ni_async_response_instance = NiAsyncResponse.from_json(json)
# print the JSON string representation of the object
print(NiAsyncResponse.to_json())

# convert the object into a dict
ni_async_response_dict = ni_async_response_instance.to_dict()
# create an instance of NiAsyncResponse from a dict
ni_async_response_from_dict = NiAsyncResponse.from_dict(ni_async_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


