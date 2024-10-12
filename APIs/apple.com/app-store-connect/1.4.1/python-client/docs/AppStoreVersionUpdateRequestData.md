# AppStoreVersionUpdateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreVersionUpdateRequestDataAttributes**](AppStoreVersionUpdateRequestDataAttributes.md) |  | [optional] 
**id** | **str** |  | 
**relationships** | [**AppStoreVersionUpdateRequestDataRelationships**](AppStoreVersionUpdateRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_update_request_data import AppStoreVersionUpdateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionUpdateRequestData from a JSON string
app_store_version_update_request_data_instance = AppStoreVersionUpdateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionUpdateRequestData.to_json())

# convert the object into a dict
app_store_version_update_request_data_dict = app_store_version_update_request_data_instance.to_dict()
# create an instance of AppStoreVersionUpdateRequestData from a dict
app_store_version_update_request_data_from_dict = AppStoreVersionUpdateRequestData.from_dict(app_store_version_update_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


