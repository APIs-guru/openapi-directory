# ResourceHealthMetadataListDefaultResponse

App Service error response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**ResourceHealthMetadataListDefaultResponseError**](ResourceHealthMetadataListDefaultResponseError.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_health_metadata_list_default_response import ResourceHealthMetadataListDefaultResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceHealthMetadataListDefaultResponse from a JSON string
resource_health_metadata_list_default_response_instance = ResourceHealthMetadataListDefaultResponse.from_json(json)
# print the JSON string representation of the object
print(ResourceHealthMetadataListDefaultResponse.to_json())

# convert the object into a dict
resource_health_metadata_list_default_response_dict = resource_health_metadata_list_default_response_instance.to_dict()
# create an instance of ResourceHealthMetadataListDefaultResponse from a dict
resource_health_metadata_list_default_response_from_dict = ResourceHealthMetadataListDefaultResponse.from_dict(resource_health_metadata_list_default_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


