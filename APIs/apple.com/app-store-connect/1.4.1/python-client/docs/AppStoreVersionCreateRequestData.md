# AppStoreVersionCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**AppStoreVersionCreateRequestDataAttributes**](AppStoreVersionCreateRequestDataAttributes.md) |  | 
**relationships** | [**AppStoreVersionCreateRequestDataRelationships**](AppStoreVersionCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.app_store_version_create_request_data import AppStoreVersionCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionCreateRequestData from a JSON string
app_store_version_create_request_data_instance = AppStoreVersionCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionCreateRequestData.to_json())

# convert the object into a dict
app_store_version_create_request_data_dict = app_store_version_create_request_data_instance.to_dict()
# create an instance of AppStoreVersionCreateRequestData from a dict
app_store_version_create_request_data_from_dict = AppStoreVersionCreateRequestData.from_dict(app_store_version_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


