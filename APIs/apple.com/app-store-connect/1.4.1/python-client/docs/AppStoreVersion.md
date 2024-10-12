# AppStoreVersion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreVersionAttributes**](AppStoreVersionAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**AppStoreVersionRelationships**](AppStoreVersionRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version import AppStoreVersion

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersion from a JSON string
app_store_version_instance = AppStoreVersion.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersion.to_json())

# convert the object into a dict
app_store_version_dict = app_store_version_instance.to_dict()
# create an instance of AppStoreVersion from a dict
app_store_version_from_dict = AppStoreVersion.from_dict(app_store_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


