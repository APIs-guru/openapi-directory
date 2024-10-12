# SkaffoldModules

Skaffold Config modules and their remote source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configs** | **List[str]** | Optional. The Skaffold Config modules to use from the specified source. | [optional] 
**git** | [**SkaffoldGitSource**](SkaffoldGitSource.md) |  | [optional] 
**google_cloud_storage** | [**SkaffoldGCSSource**](SkaffoldGCSSource.md) |  | [optional] 

## Example

```python
from openapi_client.models.skaffold_modules import SkaffoldModules

# TODO update the JSON string below
json = "{}"
# create an instance of SkaffoldModules from a JSON string
skaffold_modules_instance = SkaffoldModules.from_json(json)
# print the JSON string representation of the object
print(SkaffoldModules.to_json())

# convert the object into a dict
skaffold_modules_dict = skaffold_modules_instance.to_dict()
# create an instance of SkaffoldModules from a dict
skaffold_modules_from_dict = SkaffoldModules.from_dict(skaffold_modules_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


