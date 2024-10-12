# GoogleCloudDialogflowV2FulfillmentGenericWebService

Represents configuration for a generic web service. Dialogflow supports two mechanisms for authentications: - Basic authentication with username and password. - Authentication with additional authentication headers. More information could be found at: https://cloud.google.com/dialogflow/docs/fulfillment-configure.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_cloud_function** | **bool** | Optional. Indicates if generic web service is created through Cloud Functions integration. Defaults to false. is_cloud_function is deprecated. Cloud functions can be configured by its uri as a regular web service now. | [optional] 
**password** | **str** | Optional. The password for HTTP Basic authentication. | [optional] 
**request_headers** | **Dict[str, str]** | Optional. The HTTP request headers to send together with fulfillment requests. | [optional] 
**uri** | **str** | Required. The fulfillment URI for receiving POST requests. It must use https protocol. | [optional] 
**username** | **str** | Optional. The user name for HTTP Basic authentication. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_fulfillment_generic_web_service import GoogleCloudDialogflowV2FulfillmentGenericWebService

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2FulfillmentGenericWebService from a JSON string
google_cloud_dialogflow_v2_fulfillment_generic_web_service_instance = GoogleCloudDialogflowV2FulfillmentGenericWebService.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2FulfillmentGenericWebService.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_fulfillment_generic_web_service_dict = google_cloud_dialogflow_v2_fulfillment_generic_web_service_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2FulfillmentGenericWebService from a dict
google_cloud_dialogflow_v2_fulfillment_generic_web_service_from_dict = GoogleCloudDialogflowV2FulfillmentGenericWebService.from_dict(google_cloud_dialogflow_v2_fulfillment_generic_web_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


