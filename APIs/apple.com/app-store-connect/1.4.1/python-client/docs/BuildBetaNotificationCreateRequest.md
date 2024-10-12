# BuildBetaNotificationCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BuildBetaNotificationCreateRequestData**](BuildBetaNotificationCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.build_beta_notification_create_request import BuildBetaNotificationCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaNotificationCreateRequest from a JSON string
build_beta_notification_create_request_instance = BuildBetaNotificationCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BuildBetaNotificationCreateRequest.to_json())

# convert the object into a dict
build_beta_notification_create_request_dict = build_beta_notification_create_request_instance.to_dict()
# create an instance of BuildBetaNotificationCreateRequest from a dict
build_beta_notification_create_request_from_dict = BuildBetaNotificationCreateRequest.from_dict(build_beta_notification_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


