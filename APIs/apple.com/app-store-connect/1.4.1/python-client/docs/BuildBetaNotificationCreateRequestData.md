# BuildBetaNotificationCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**relationships** | [**BetaAppReviewSubmissionCreateRequestDataRelationships**](BetaAppReviewSubmissionCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.build_beta_notification_create_request_data import BuildBetaNotificationCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BuildBetaNotificationCreateRequestData from a JSON string
build_beta_notification_create_request_data_instance = BuildBetaNotificationCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(BuildBetaNotificationCreateRequestData.to_json())

# convert the object into a dict
build_beta_notification_create_request_data_dict = build_beta_notification_create_request_data_instance.to_dict()
# create an instance of BuildBetaNotificationCreateRequestData from a dict
build_beta_notification_create_request_data_from_dict = BuildBetaNotificationCreateRequestData.from_dict(build_beta_notification_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


