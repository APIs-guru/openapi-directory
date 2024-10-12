# ListUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**private** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.list_update_request import ListUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ListUpdateRequest from a JSON string
list_update_request_instance = ListUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(ListUpdateRequest.to_json())

# convert the object into a dict
list_update_request_dict = list_update_request_instance.to_dict()
# create an instance of ListUpdateRequest from a dict
list_update_request_from_dict = ListUpdateRequest.from_dict(list_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


