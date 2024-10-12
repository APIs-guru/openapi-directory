# ToggleRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** |  | [optional] 
**is_active** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.toggle_request import ToggleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ToggleRequest from a JSON string
toggle_request_instance = ToggleRequest.from_json(json)
# print the JSON string representation of the object
print(ToggleRequest.to_json())

# convert the object into a dict
toggle_request_dict = toggle_request_instance.to_dict()
# create an instance of ToggleRequest from a dict
toggle_request_from_dict = ToggleRequest.from_dict(toggle_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


