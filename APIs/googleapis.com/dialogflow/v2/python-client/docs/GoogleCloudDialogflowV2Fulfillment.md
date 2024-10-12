# GoogleCloudDialogflowV2Fulfillment

By default, your agent responds to a matched intent with a static response. As an alternative, you can provide a more dynamic response by using fulfillment. When you enable fulfillment for an intent, Dialogflow responds to that intent by calling a service that you define. For example, if an end-user wants to schedule a haircut on Friday, your service can check your database and respond to the end-user with availability information for Friday. For more information, see the [fulfillment guide](https://cloud.google.com/dialogflow/docs/fulfillment-overview).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Optional. The human-readable name of the fulfillment, unique within the agent. This field is not used for Fulfillment in an Environment. | [optional] 
**enabled** | **bool** | Optional. Whether fulfillment is enabled. | [optional] 
**features** | [**List[GoogleCloudDialogflowV2FulfillmentFeature]**](GoogleCloudDialogflowV2FulfillmentFeature.md) | Optional. The field defines whether the fulfillment is enabled for certain features. | [optional] 
**generic_web_service** | [**GoogleCloudDialogflowV2FulfillmentGenericWebService**](GoogleCloudDialogflowV2FulfillmentGenericWebService.md) |  | [optional] 
**name** | **str** | Required. The unique identifier of the fulfillment. Supported formats: - &#x60;projects//agent/fulfillment&#x60; - &#x60;projects//locations//agent/fulfillment&#x60; This field is not used for Fulfillment in an Environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_fulfillment import GoogleCloudDialogflowV2Fulfillment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2Fulfillment from a JSON string
google_cloud_dialogflow_v2_fulfillment_instance = GoogleCloudDialogflowV2Fulfillment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2Fulfillment.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_fulfillment_dict = google_cloud_dialogflow_v2_fulfillment_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2Fulfillment from a dict
google_cloud_dialogflow_v2_fulfillment_from_dict = GoogleCloudDialogflowV2Fulfillment.from_dict(google_cloud_dialogflow_v2_fulfillment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


