# AppStoreVersionCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreVersionCreateRequestData**](AppStoreVersionCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.app_store_version_create_request import AppStoreVersionCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionCreateRequest from a JSON string
app_store_version_create_request_instance = AppStoreVersionCreateRequest.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionCreateRequest.to_json())

# convert the object into a dict
app_store_version_create_request_dict = app_store_version_create_request_instance.to_dict()
# create an instance of AppStoreVersionCreateRequest from a dict
app_store_version_create_request_from_dict = AppStoreVersionCreateRequest.from_dict(app_store_version_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


