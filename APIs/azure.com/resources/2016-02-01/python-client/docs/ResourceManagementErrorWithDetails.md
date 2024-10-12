# ResourceManagementErrorWithDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code returned from the server. | 
**details** | [**List[ResourceManagementErrorWithDetails]**](ResourceManagementErrorWithDetails.md) | Validation error. | [optional] 
**message** | **str** | The error message returned from the server. | 
**target** | **str** | The target of the error. | [optional] 

## Example

```python
from openapi_client.models.resource_management_error_with_details import ResourceManagementErrorWithDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceManagementErrorWithDetails from a JSON string
resource_management_error_with_details_instance = ResourceManagementErrorWithDetails.from_json(json)
# print the JSON string representation of the object
print(ResourceManagementErrorWithDetails.to_json())

# convert the object into a dict
resource_management_error_with_details_dict = resource_management_error_with_details_instance.to_dict()
# create an instance of ResourceManagementErrorWithDetails from a dict
resource_management_error_with_details_from_dict = ResourceManagementErrorWithDetails.from_dict(resource_management_error_with_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


