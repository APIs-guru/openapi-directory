# UpdateApplicationRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**answer_method** | **str** | The HTTP method used to make the request to &#x60;answer_url&#x60;. The default value is &#x60;GET&#x60;. | [optional] [default to 'GET']
**answer_url** | **str** | The URL where your webhook delivers the Nexmo Call Control Object that governs this call. As soon as your user answers a call Nexmo makes a request to &#x60;answer_url&#x60;. | [optional] 
**api_key** | **str** | You can find your API key in your [account overview](https://dashboard.nexmo.com/account-overview) | 
**api_secret** | **str** | You can find your API secret in your [account overview](https://dashboard.nexmo.com/account-overview) | 
**event_method** | **str** | The HTTP method used to send event information to &#x60;event_url&#x60;. The default value is POST. | [optional] [default to 'POST']
**event_url** | **str** | Nexmo sends event information asynchronously to this URL when status changes. | [optional] 
**name** | **str** | The name of your application. | 
**type** | **str** | The Nexmo product or products that you access with this application. Currently &#x60;voice&#x60; and &#x60;messages&#x60; application types are supported. You  can&#39;t change the type of application. | 

## Example

```python
from openapi_client.models.update_application_request import UpdateApplicationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateApplicationRequest from a JSON string
update_application_request_instance = UpdateApplicationRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateApplicationRequest.to_json())

# convert the object into a dict
update_application_request_dict = update_application_request_instance.to_dict()
# create an instance of UpdateApplicationRequest from a dict
update_application_request_from_dict = UpdateApplicationRequest.from_dict(update_application_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


