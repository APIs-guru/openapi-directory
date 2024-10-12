# ListPermissionsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration of the request in human-readable format | 
**permissions** | [**List[Permission]**](Permission.md) |  | 

## Example

```python
from openapi_client.models.list_permissions_response import ListPermissionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListPermissionsResponse from a JSON string
list_permissions_response_instance = ListPermissionsResponse.from_json(json)
# print the JSON string representation of the object
print(ListPermissionsResponse.to_json())

# convert the object into a dict
list_permissions_response_dict = list_permissions_response_instance.to_dict()
# create an instance of ListPermissionsResponse from a dict
list_permissions_response_from_dict = ListPermissionsResponse.from_dict(list_permissions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


