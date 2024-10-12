# BlueprintList

List of Blueprint definitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next page of results. | [optional] [readonly] 
**value** | [**List[Blueprint]**](Blueprint.md) | List of Blueprint definitions. | [optional] 

## Example

```python
from openapi_client.models.blueprint_list import BlueprintList

# TODO update the JSON string below
json = "{}"
# create an instance of BlueprintList from a JSON string
blueprint_list_instance = BlueprintList.from_json(json)
# print the JSON string representation of the object
print(BlueprintList.to_json())

# convert the object into a dict
blueprint_list_dict = blueprint_list_instance.to_dict()
# create an instance of BlueprintList from a dict
blueprint_list_from_dict = BlueprintList.from_dict(blueprint_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


