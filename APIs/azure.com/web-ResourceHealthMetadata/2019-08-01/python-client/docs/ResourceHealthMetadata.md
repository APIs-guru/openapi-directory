# ResourceHealthMetadata

Used for getting ResourceHealthCheck settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | ResourceHealthMetadata resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.resource_health_metadata import ResourceHealthMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceHealthMetadata from a JSON string
resource_health_metadata_instance = ResourceHealthMetadata.from_json(json)
# print the JSON string representation of the object
print(ResourceHealthMetadata.to_json())

# convert the object into a dict
resource_health_metadata_dict = resource_health_metadata_instance.to_dict()
# create an instance of ResourceHealthMetadata from a dict
resource_health_metadata_from_dict = ResourceHealthMetadata.from_dict(resource_health_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


