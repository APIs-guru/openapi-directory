# GoogleCloudApigeeV1SecurityActionHttpHeader

An HTTP header.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The header name to be sent to the target. | [optional] 
**value** | **str** | The header value to be sent to the target. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_action_http_header import GoogleCloudApigeeV1SecurityActionHttpHeader

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityActionHttpHeader from a JSON string
google_cloud_apigee_v1_security_action_http_header_instance = GoogleCloudApigeeV1SecurityActionHttpHeader.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityActionHttpHeader.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_action_http_header_dict = google_cloud_apigee_v1_security_action_http_header_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityActionHttpHeader from a dict
google_cloud_apigee_v1_security_action_http_header_from_dict = GoogleCloudApigeeV1SecurityActionHttpHeader.from_dict(google_cloud_apigee_v1_security_action_http_header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


