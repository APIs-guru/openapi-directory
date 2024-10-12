# AppStoreVersionAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_store_state** | [**AppStoreVersionState**](AppStoreVersionState.md) |  | [optional] 
**copyright** | **str** |  | [optional] 
**created_date** | **datetime** |  | [optional] 
**downloadable** | **bool** |  | [optional] 
**earliest_release_date** | **datetime** |  | [optional] 
**platform** | [**Platform**](Platform.md) |  | [optional] 
**release_type** | **str** |  | [optional] 
**uses_idfa** | **bool** |  | [optional] 
**version_string** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_store_version_attributes import AppStoreVersionAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionAttributes from a JSON string
app_store_version_attributes_instance = AppStoreVersionAttributes.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionAttributes.to_json())

# convert the object into a dict
app_store_version_attributes_dict = app_store_version_attributes_instance.to_dict()
# create an instance of AppStoreVersionAttributes from a dict
app_store_version_attributes_from_dict = AppStoreVersionAttributes.from_dict(app_store_version_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


