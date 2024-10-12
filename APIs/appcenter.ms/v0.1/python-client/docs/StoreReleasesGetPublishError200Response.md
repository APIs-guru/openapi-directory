# StoreReleasesGetPublishError200Response

ReleasePublishErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_log_available** | **bool** | boolean property to tell if logs are available for download | [optional] 
**message** | **str** | error Details | [optional] 

## Example

```python
from openapi_client.models.store_releases_get_publish_error200_response import StoreReleasesGetPublishError200Response

# TODO update the JSON string below
json = "{}"
# create an instance of StoreReleasesGetPublishError200Response from a JSON string
store_releases_get_publish_error200_response_instance = StoreReleasesGetPublishError200Response.from_json(json)
# print the JSON string representation of the object
print(StoreReleasesGetPublishError200Response.to_json())

# convert the object into a dict
store_releases_get_publish_error200_response_dict = store_releases_get_publish_error200_response_instance.to_dict()
# create an instance of StoreReleasesGetPublishError200Response from a dict
store_releases_get_publish_error200_response_from_dict = StoreReleasesGetPublishError200Response.from_dict(store_releases_get_publish_error200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


