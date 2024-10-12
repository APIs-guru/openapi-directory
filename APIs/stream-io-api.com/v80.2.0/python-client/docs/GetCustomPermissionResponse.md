# GetCustomPermissionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**permission** | [**Permission**](Permission.md) |  | 

## Example

```python
from openapi_client.models.get_custom_permission_response import GetCustomPermissionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomPermissionResponse from a JSON string
get_custom_permission_response_instance = GetCustomPermissionResponse.from_json(json)
# print the JSON string representation of the object
print(GetCustomPermissionResponse.to_json())

# convert the object into a dict
get_custom_permission_response_dict = get_custom_permission_response_instance.to_dict()
# create an instance of GetCustomPermissionResponse from a dict
get_custom_permission_response_from_dict = GetCustomPermissionResponse.from_dict(get_custom_permission_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


