# ResourceHealthMetadataListDefaultResponseError

Error model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Standardized string to programmatically identify the error. | [optional] [readonly] 
**details** | [**List[ResourceHealthMetadataListDefaultResponseErrorDetailsInner]**](ResourceHealthMetadataListDefaultResponseErrorDetailsInner.md) |  | [optional] 
**innererror** | **str** | More information to debug error. | [optional] [readonly] 
**message** | **str** | Detailed error description and debugging information. | [optional] [readonly] 
**target** | **str** | Detailed error description and debugging information. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_health_metadata_list_default_response_error import ResourceHealthMetadataListDefaultResponseError

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceHealthMetadataListDefaultResponseError from a JSON string
resource_health_metadata_list_default_response_error_instance = ResourceHealthMetadataListDefaultResponseError.from_json(json)
# print the JSON string representation of the object
print(ResourceHealthMetadataListDefaultResponseError.to_json())

# convert the object into a dict
resource_health_metadata_list_default_response_error_dict = resource_health_metadata_list_default_response_error_instance.to_dict()
# create an instance of ResourceHealthMetadataListDefaultResponseError from a dict
resource_health_metadata_list_default_response_error_from_dict = ResourceHealthMetadataListDefaultResponseError.from_dict(resource_health_metadata_list_default_response_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


