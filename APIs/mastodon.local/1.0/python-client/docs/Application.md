# Application

Represents an application that interfaces with the REST API to access accounts or post statuses.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** | Client ID key, to be used for obtaining OAuth tokens | [optional] 
**client_secret** | **str** | Client secret key, to be used for obtaining OAuth tokens | [optional] 
**name** | **str** | The name of your application. | 
**vapid_key** | **str** | Used for Push Streaming API. Returned with [POST /api/v1/apps](https://docs.joinmastodon.org/methods/apps/#create-an-application). Equivalent to [PushSubscription#server_key](https://docs.joinmastodon.org/entities/pushsubscription/#server_key) | [optional] 
**website** | **str** | The website associated with your application. Must be URL. | [optional] 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


