# PublishedBlueprint

Represents a published blueprint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PublishedBlueprintProperties**](PublishedBlueprintProperties.md) |  | 
**id** | **str** | String Id used to locate any resource on Azure. | [optional] [readonly] 
**name** | **str** | Name of this resource. | [optional] [readonly] 
**type** | **str** | Type of this resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.published_blueprint import PublishedBlueprint

# TODO update the JSON string below
json = "{}"
# create an instance of PublishedBlueprint from a JSON string
published_blueprint_instance = PublishedBlueprint.from_json(json)
# print the JSON string representation of the object
print(PublishedBlueprint.to_json())

# convert the object into a dict
published_blueprint_dict = published_blueprint_instance.to_dict()
# create an instance of PublishedBlueprint from a dict
published_blueprint_from_dict = PublishedBlueprint.from_dict(published_blueprint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


