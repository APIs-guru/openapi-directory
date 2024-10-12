# GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction

Setting a parameter value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameter** | **str** | Display name of the parameter. | [optional] 
**value** | **object** | The new value of the parameter. A null value clears the parameter. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_fulfillment_set_parameter_action import GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction from a JSON string
google_cloud_dialogflow_cx_v3beta1_fulfillment_set_parameter_action_instance = GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_fulfillment_set_parameter_action_dict = google_cloud_dialogflow_cx_v3beta1_fulfillment_set_parameter_action_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction from a dict
google_cloud_dialogflow_cx_v3beta1_fulfillment_set_parameter_action_from_dict = GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction.from_dict(google_cloud_dialogflow_cx_v3beta1_fulfillment_set_parameter_action_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


