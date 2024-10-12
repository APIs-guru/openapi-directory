# Application

The Application resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**achievement_count** | **int** | The number of achievements visible to the currently authenticated player. | [optional] 
**assets** | [**List[ImageAsset]**](ImageAsset.md) | The assets of the application. | [optional] 
**author** | **str** | The author of the application. | [optional] 
**category** | [**ApplicationCategory**](ApplicationCategory.md) |  | [optional] 
**description** | **str** | The description of the application. | [optional] 
**enabled_features** | **List[str]** | A list of features that have been enabled for the application. | [optional] 
**id** | **str** | The ID of the application. | [optional] 
**instances** | [**List[Instance]**](Instance.md) | The instances of the application. | [optional] 
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#application&#x60;. | [optional] 
**last_updated_timestamp** | **str** | The last updated timestamp of the application. | [optional] 
**leaderboard_count** | **int** | The number of leaderboards visible to the currently authenticated player. | [optional] 
**name** | **str** | The name of the application. | [optional] 
**theme_color** | **str** | A hint to the client UI for what color to use as an app-themed color. The color is given as an RGB triplet (e.g. \&quot;E0E0E0\&quot;). | [optional] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


