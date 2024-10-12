# ResourceManagementError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Gets or sets the error code returned from the server. | 
**message** | **str** | Gets or sets the error message returned from the server. | 
**target** | **str** | Gets or sets the target of the error. | [optional] 

## Example

```python
from openapi_client.models.resource_management_error import ResourceManagementError

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceManagementError from a JSON string
resource_management_error_instance = ResourceManagementError.from_json(json)
# print the JSON string representation of the object
print(ResourceManagementError.to_json())

# convert the object into a dict
resource_management_error_dict = resource_management_error_instance.to_dict()
# create an instance of ResourceManagementError from a dict
resource_management_error_from_dict = ResourceManagementError.from_dict(resource_management_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


