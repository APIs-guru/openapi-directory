# LegacyApp


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collaborators** | [**Dict[str, LegacyAppCollaboratorsValue]**](LegacyAppCollaboratorsValue.md) |  | [optional] 
**deployments** | **List[str]** |  | [optional] 
**name** | **str** | The app name. | [optional] 

## Example

```python
from openapi_client.models.legacy_app import LegacyApp

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyApp from a JSON string
legacy_app_instance = LegacyApp.from_json(json)
# print the JSON string representation of the object
print(LegacyApp.to_json())

# convert the object into a dict
legacy_app_dict = legacy_app_instance.to_dict()
# create an instance of LegacyApp from a dict
legacy_app_from_dict = LegacyApp.from_dict(legacy_app_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


