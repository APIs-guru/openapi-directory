# AppStoreVersionPhasedReleaseResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**AppStoreVersionPhasedRelease**](AppStoreVersionPhasedRelease.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.app_store_version_phased_release_response import AppStoreVersionPhasedReleaseResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppStoreVersionPhasedReleaseResponse from a JSON string
app_store_version_phased_release_response_instance = AppStoreVersionPhasedReleaseResponse.from_json(json)
# print the JSON string representation of the object
print(AppStoreVersionPhasedReleaseResponse.to_json())

# convert the object into a dict
app_store_version_phased_release_response_dict = app_store_version_phased_release_response_instance.to_dict()
# create an instance of AppStoreVersionPhasedReleaseResponse from a dict
app_store_version_phased_release_response_from_dict = AppStoreVersionPhasedReleaseResponse.from_dict(app_store_version_phased_release_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


