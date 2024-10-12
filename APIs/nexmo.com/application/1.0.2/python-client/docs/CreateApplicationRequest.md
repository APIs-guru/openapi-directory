# CreateApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_method** | **str** | The HTTP method used to make the request to &#x60;answer_url&#x60;. The default value is &#x60;GET&#x60;. | [optional] 
**answer_url** | **str** | The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to &#x60;answer_url&#x60;. Required for inbound calls only. | [optional] 
**api_key** | **str** | You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview) | 
**api_secret** | **str** | You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview) | 
**event_method** | **str** | The HTTP method used to send event information to &#x60;event_url&#x60;. The default value is &#x60;POST&#x60;. For &#x60;voice&#x60; type applications only. | [optional] 
**event_url** | **str** | Nexmo sends event information asynchronously to this URL when status changes for &#x60;voice&#x60; applications. Always required for &#x60;voice&#x60; applications. | [optional] 
**inbound_method** | **str** | The HTTP method used to send event information to &#x60;inbound_url&#x60;. The default value is &#x60;POST&#x60;. For &#x60;messages&#x60; type applications only. | [optional] 
**inbound_url** | **str** | Nexmo sends a request to this URL when an inbound message is received. Required for &#x60;messages&#x60; type applications only. | [optional] 
**name** | **str** | The name of your application. | 
**status_method** | **str** | The HTTP method used to send event information to &#x60;status_url&#x60;. The default value is &#x60;POST&#x60;. For &#x60;messages&#x60; type applications only. | [optional] 
**status_url** | **str** | Nexmo sends event information asynchronously to this URL when status changes. Required for &#x60;messages&#x60; type applications only. | [optional] 
**type** | **str** | The Nexmo product or products that you access with this application. Currently &#x60;voice&#x60; and &#x60;messages&#x60; application types are supported. | 

## Example

```python
from openapi_client.models.create_application_request import CreateApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateApplicationRequest from a JSON string
create_application_request_instance = CreateApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(CreateApplicationRequest.to_json())

# convert the object into a dict
create_application_request_dict = create_application_request_instance.to_dict()
# create an instance of CreateApplicationRequest from a dict
create_application_request_from_dict = CreateApplicationRequest.from_dict(create_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


