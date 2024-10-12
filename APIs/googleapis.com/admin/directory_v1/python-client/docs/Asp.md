# Asp

An application-specific password (ASP) is used with applications that do not accept a verification code when logging into the application on certain devices. The ASP access code is used instead of the login and password you commonly use when accessing an application through a browser. For more information about ASPs and how to create one, see the [help center](https://support.google.com/a/answer/2537800#asp).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code_id** | **int** | The unique ID of the ASP. | [optional] 
**creation_time** | **str** | The time when the ASP was created. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. | [optional] 
**etag** | **str** | ETag of the ASP. | [optional] 
**kind** | **str** | The type of the API resource. This is always &#x60;admin#directory#asp&#x60;. | [optional] [default to 'admin#directory#asp']
**last_time_used** | **str** | The time when the ASP was last used. Expressed in [Unix time](https://en.wikipedia.org/wiki/Epoch_time) format. | [optional] 
**name** | **str** | The name of the application that the user, represented by their &#x60;userId&#x60;, entered when the ASP was created. | [optional] 
**user_key** | **str** | The unique ID of the user who issued the ASP. | [optional] 

## Example

```python
from openapi_client.models.asp import Asp

# TODO update the JSON string below
json = "{}"
# create an instance of Asp from a JSON string
asp_instance = Asp.from_json(json)
# print the JSON string representation of the object
print(Asp.to_json())

# convert the object into a dict
asp_dict = asp_instance.to_dict()
# create an instance of Asp from a dict
asp_from_dict = Asp.from_dict(asp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


