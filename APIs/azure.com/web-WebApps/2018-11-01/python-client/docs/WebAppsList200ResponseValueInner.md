# WebAppsList200ResponseValueInner

A web app, a mobile app backend, or an API app.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**WebAppsList200ResponseValueInnerIdentity**](WebAppsList200ResponseValueInnerIdentity.md) |  | [optional] 
**properties** | [**WebAppsList200ResponseValueInnerProperties**](WebAppsList200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.web_apps_list200_response_value_inner import WebAppsList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of WebAppsList200ResponseValueInner from a JSON string
web_apps_list200_response_value_inner_instance = WebAppsList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(WebAppsList200ResponseValueInner.to_json())

# convert the object into a dict
web_apps_list200_response_value_inner_dict = web_apps_list200_response_value_inner_instance.to_dict()
# create an instance of WebAppsList200ResponseValueInner from a dict
web_apps_list200_response_value_inner_from_dict = WebAppsList200ResponseValueInner.from_dict(web_apps_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


