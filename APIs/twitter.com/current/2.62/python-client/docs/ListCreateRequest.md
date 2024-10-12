# ListCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | 
**private** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.list_create_request import ListCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListCreateRequest from a JSON string
list_create_request_instance = ListCreateRequest.from_json(json)
# print the JSON string representation of the object
print(ListCreateRequest.to_json())

# convert the object into a dict
list_create_request_dict = list_create_request_instance.to_dict()
# create an instance of ListCreateRequest from a dict
list_create_request_from_dict = ListCreateRequest.from_dict(list_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


