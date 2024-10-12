# BuildBetaNotificationResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BuildBetaNotification**](BuildBetaNotification.md) |  | 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.build_beta_notification_response import BuildBetaNotificationResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaNotificationResponse from a JSON string
build_beta_notification_response_instance = BuildBetaNotificationResponse.from_json(json)
# print the JSON string representation of the object
print(BuildBetaNotificationResponse.to_json())

# convert the object into a dict
build_beta_notification_response_dict = build_beta_notification_response_instance.to_dict()
# create an instance of BuildBetaNotificationResponse from a dict
build_beta_notification_response_from_dict = BuildBetaNotificationResponse.from_dict(build_beta_notification_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


