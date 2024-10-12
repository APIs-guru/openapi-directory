# AppStoreVersionPhasedRelease


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreVersionPhasedReleaseAttributes**](AppStoreVersionPhasedReleaseAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_phased_release import AppStoreVersionPhasedRelease

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionPhasedRelease from a JSON string
app_store_version_phased_release_instance = AppStoreVersionPhasedRelease.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionPhasedRelease.to_json())

# convert the object into a dict
app_store_version_phased_release_dict = app_store_version_phased_release_instance.to_dict()
# create an instance of AppStoreVersionPhasedRelease from a dict
app_store_version_phased_release_from_dict = AppStoreVersionPhasedRelease.from_dict(app_store_version_phased_release_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


