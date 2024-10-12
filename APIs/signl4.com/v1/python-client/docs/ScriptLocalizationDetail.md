# ScriptLocalizationDetail


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config_metadata** | **object** |  | [optional] 
**data** | [**ScriptDescriptionData**](ScriptDescriptionData.md) |  | [optional] 
**language** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.script_localization_detail import ScriptLocalizationDetail

# TODO update the JSON string below
json = "{}"
# create an instance of ScriptLocalizationDetail from a JSON string
script_localization_detail_instance = ScriptLocalizationDetail.from_json(json)
# print the JSON string representation of the object
print(ScriptLocalizationDetail.to_json())

# convert the object into a dict
script_localization_detail_dict = script_localization_detail_instance.to_dict()
# create an instance of ScriptLocalizationDetail from a dict
script_localization_detail_from_dict = ScriptLocalizationDetail.from_dict(script_localization_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


