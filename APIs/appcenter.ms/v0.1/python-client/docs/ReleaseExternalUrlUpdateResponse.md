# ReleaseExternalUrlUpdateResponse

Response for updating release external url

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_download_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.release_external_url_update_response import ReleaseExternalUrlUpdateResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReleaseExternalUrlUpdateResponse from a JSON string
release_external_url_update_response_instance = ReleaseExternalUrlUpdateResponse.from_json(json)
# print the JSON string representation of the object
print(ReleaseExternalUrlUpdateResponse.to_json())

# convert the object into a dict
release_external_url_update_response_dict = release_external_url_update_response_instance.to_dict()
# create an instance of ReleaseExternalUrlUpdateResponse from a dict
release_external_url_update_response_from_dict = ReleaseExternalUrlUpdateResponse.from_dict(release_external_url_update_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


