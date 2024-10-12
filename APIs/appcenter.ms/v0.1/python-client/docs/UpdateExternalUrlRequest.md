# UpdateExternalUrlRequest

A request containing information for creating an externally hosted release.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_download_url** | **str** | The external URL to the release&#39;s binary. | 

## Example

```python
from openapi_client.models.update_external_url_request import UpdateExternalUrlRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateExternalUrlRequest from a JSON string
update_external_url_request_instance = UpdateExternalUrlRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateExternalUrlRequest.to_json())

# convert the object into a dict
update_external_url_request_dict = update_external_url_request_instance.to_dict()
# create an instance of UpdateExternalUrlRequest from a dict
update_external_url_request_from_dict = UpdateExternalUrlRequest.from_dict(update_external_url_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


