# ListUpdateResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListUpdateResponseData**](ListUpdateResponseData.md) |  | [optional] 
**errors** | [**List[Problem]**](Problem.md) |  | [optional] 

## Example

```python
from openapi_client.models.list_update_response import ListUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListUpdateResponse from a JSON string
list_update_response_instance = ListUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(ListUpdateResponse.to_json())

# convert the object into a dict
list_update_response_dict = list_update_response_instance.to_dict()
# create an instance of ListUpdateResponse from a dict
list_update_response_from_dict = ListUpdateResponse.from_dict(list_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


