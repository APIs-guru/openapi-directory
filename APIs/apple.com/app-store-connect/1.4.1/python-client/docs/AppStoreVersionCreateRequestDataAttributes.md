# AppStoreVersionCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**copyright** | **str** |  | [optional] 
**earliest_release_date** | **datetime** |  | [optional] 
**platform** | [**Platform**](Platform.md) |  | 
**release_type** | **str** |  | [optional] 
**uses_idfa** | **bool** |  | [optional] 
**version_string** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_create_request_data_attributes import AppStoreVersionCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionCreateRequestDataAttributes from a JSON string
app_store_version_create_request_data_attributes_instance = AppStoreVersionCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionCreateRequestDataAttributes.to_json())

# convert the object into a dict
app_store_version_create_request_data_attributes_dict = app_store_version_create_request_data_attributes_instance.to_dict()
# create an instance of AppStoreVersionCreateRequestDataAttributes from a dict
app_store_version_create_request_data_attributes_from_dict = AppStoreVersionCreateRequestDataAttributes.from_dict(app_store_version_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


