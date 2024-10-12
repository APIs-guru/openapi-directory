# PublishedBlueprintList

List of published blueprint definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next page of results. | [optional] [readonly] 
**value** | [**List[PublishedBlueprint]**](PublishedBlueprint.md) | List of published blueprint definitions. | [optional] 

## Example

```python
from openapi_client.models.published_blueprint_list import PublishedBlueprintList

# TODO update the JSON string below
json = "{}"
# create an instance of PublishedBlueprintList from a JSON string
published_blueprint_list_instance = PublishedBlueprintList.from_json(json)
# print the JSON string representation of the object
print(PublishedBlueprintList.to_json())

# convert the object into a dict
published_blueprint_list_dict = published_blueprint_list_instance.to_dict()
# create an instance of PublishedBlueprintList from a dict
published_blueprint_list_from_dict = PublishedBlueprintList.from_dict(published_blueprint_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


