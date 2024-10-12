# ReleasePublishErrorResponse

ReleasePublishErrorResponse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_log_available** | **bool** | boolean property to tell if logs are available for download | [optional] 
**message** | **str** | error Details | [optional] 

## Example

```python
from openapi_client.models.release_publish_error_response import ReleasePublishErrorResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReleasePublishErrorResponse from a JSON string
release_publish_error_response_instance = ReleasePublishErrorResponse.from_json(json)
# print the JSON string representation of the object
print(ReleasePublishErrorResponse.to_json())

# convert the object into a dict
release_publish_error_response_dict = release_publish_error_response_instance.to_dict()
# create an instance of ReleasePublishErrorResponse from a dict
release_publish_error_response_from_dict = ReleasePublishErrorResponse.from_dict(release_publish_error_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


