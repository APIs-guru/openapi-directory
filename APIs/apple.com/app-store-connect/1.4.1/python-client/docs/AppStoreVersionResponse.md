# AppStoreVersionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreVersion**](AppStoreVersion.md) |  | 
**included** | [**List[AppStoreVersionResponseIncludedInner]**](AppStoreVersionResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_store_version_response import AppStoreVersionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionResponse from a JSON string
app_store_version_response_instance = AppStoreVersionResponse.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionResponse.to_json())

# convert the object into a dict
app_store_version_response_dict = app_store_version_response_instance.to_dict()
# create an instance of AppStoreVersionResponse from a dict
app_store_version_response_from_dict = AppStoreVersionResponse.from_dict(app_store_version_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


