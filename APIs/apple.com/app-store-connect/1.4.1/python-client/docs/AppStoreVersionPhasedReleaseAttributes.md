# AppStoreVersionPhasedReleaseAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_day_number** | **int** |  | [optional] 
**phased_release_state** | [**PhasedReleaseState**](PhasedReleaseState.md) |  | [optional] 
**start_date** | **datetime** |  | [optional] 
**total_pause_duration** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_phased_release_attributes import AppStoreVersionPhasedReleaseAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionPhasedReleaseAttributes from a JSON string
app_store_version_phased_release_attributes_instance = AppStoreVersionPhasedReleaseAttributes.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionPhasedReleaseAttributes.to_json())

# convert the object into a dict
app_store_version_phased_release_attributes_dict = app_store_version_phased_release_attributes_instance.to_dict()
# create an instance of AppStoreVersionPhasedReleaseAttributes from a dict
app_store_version_phased_release_attributes_from_dict = AppStoreVersionPhasedReleaseAttributes.from_dict(app_store_version_phased_release_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


