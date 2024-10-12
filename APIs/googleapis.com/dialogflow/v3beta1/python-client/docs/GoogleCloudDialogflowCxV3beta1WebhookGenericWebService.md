# GoogleCloudDialogflowCxV3beta1WebhookGenericWebService

Represents configuration for a generic web service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ca_certs** | **List[bytearray]** | Optional. Specifies a list of allowed custom CA certificates (in DER format) for HTTPS verification. This overrides the default SSL trust store. If this is empty or unspecified, Dialogflow will use Google&#39;s default trust store to verify certificates. N.B. Make sure the HTTPS server certificates are signed with \&quot;subject alt name\&quot;. For instance a certificate can be self-signed using the following command, &#x60;&#x60;&#x60; openssl x509 -req -days 200 -in example.com.csr \\ -signkey example.com.key \\ -out example.com.crt \\ -extfile &lt;(printf \&quot;\\nsubjectAltName&#x3D;&#39;DNS:www.example.com&#39;\&quot;) &#x60;&#x60;&#x60; | [optional] 
**http_method** | **str** | Optional. HTTP method for the flexible webhook calls. Standard webhook always uses POST. | [optional] 
**parameter_mapping** | **Dict[str, str]** | Optional. Maps the values extracted from specific fields of the flexible webhook response into session parameters. - Key: session parameter name - Value: field path in the webhook response | [optional] 
**password** | **str** | The password for HTTP Basic authentication. | [optional] 
**request_body** | **str** | Optional. Defines a custom JSON object as request body to send to flexible webhook. | [optional] 
**request_headers** | **Dict[str, str]** | The HTTP request headers to send together with webhook requests. | [optional] 
**uri** | **str** | Required. The webhook URI for receiving POST requests. It must use https protocol. | [optional] 
**username** | **str** | The user name for HTTP Basic authentication. | [optional] 
**webhook_type** | **str** | Optional. Type of the webhook. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_webhook_generic_web_service import GoogleCloudDialogflowCxV3beta1WebhookGenericWebService

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookGenericWebService from a JSON string
google_cloud_dialogflow_cx_v3beta1_webhook_generic_web_service_instance = GoogleCloudDialogflowCxV3beta1WebhookGenericWebService.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1WebhookGenericWebService.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_webhook_generic_web_service_dict = google_cloud_dialogflow_cx_v3beta1_webhook_generic_web_service_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1WebhookGenericWebService from a dict
google_cloud_dialogflow_cx_v3beta1_webhook_generic_web_service_from_dict = GoogleCloudDialogflowCxV3beta1WebhookGenericWebService.from_dict(google_cloud_dialogflow_cx_v3beta1_webhook_generic_web_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


