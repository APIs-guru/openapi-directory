# LuisApp

Exported Model - An exported LUIS Application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bing_entities** | **List[str]** | List of prebuilt intents. | [optional] 
**closed_lists** | [**List[ClosedList]**](ClosedList.md) | List of closed lists. | [optional] 
**composites** | [**List[HierarchicalModel]**](HierarchicalModel.md) | List of composite entities. | [optional] 
**culture** | **str** | The culture of the application. E.g.: en-us. | [optional] 
**desc** | **str** | The description of the application. | [optional] 
**entities** | [**List[HierarchicalModel]**](HierarchicalModel.md) | List of entities. | [optional] 
**intents** | [**List[HierarchicalModel]**](HierarchicalModel.md) | List of intents. | [optional] 
**model_features** | [**List[JSONModelFeature]**](JSONModelFeature.md) | List of model features. | [optional] 
**name** | **str** | The name of the application. | [optional] 
**regex_features** | [**List[JSONRegexFeature]**](JSONRegexFeature.md) | List of pattern features. | [optional] 
**utterances** | [**List[JSONUtterance]**](JSONUtterance.md) | List of sample utterances. | [optional] 
**version_id** | **str** | The version ID of the application that was exported. | [optional] 

## Example

```python
from openapi_client.models.luis_app import LuisApp

# TODO update the JSON string below
json = "{}"
# create an instance of LuisApp from a JSON string
luis_app_instance = LuisApp.from_json(json)
# print the JSON string representation of the object
print(LuisApp.to_json())

# convert the object into a dict
luis_app_dict = luis_app_instance.to_dict()
# create an instance of LuisApp from a dict
luis_app_from_dict = LuisApp.from_dict(luis_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


