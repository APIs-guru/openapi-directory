# GoogleCloudApigeeV1SecurityActionFlag

The message that should be set in the case of a Flag action.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**headers** | [**List[GoogleCloudApigeeV1SecurityActionHttpHeader]**](GoogleCloudApigeeV1SecurityActionHttpHeader.md) | Optional. A list of HTTP headers to be sent to the target in case of a FLAG SecurityAction. Limit 5 headers per SecurityAction. At least one is mandatory. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_action_flag import GoogleCloudApigeeV1SecurityActionFlag

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityActionFlag from a JSON string
google_cloud_apigee_v1_security_action_flag_instance = GoogleCloudApigeeV1SecurityActionFlag.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityActionFlag.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_action_flag_dict = google_cloud_apigee_v1_security_action_flag_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityActionFlag from a dict
google_cloud_apigee_v1_security_action_flag_from_dict = GoogleCloudApigeeV1SecurityActionFlag.from_dict(google_cloud_apigee_v1_security_action_flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


