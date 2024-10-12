# CallbackOptions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_request_url** | **str** | URL for the merchant endpoint that would be called to request updates. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. Deprecated. | [optional] 
**url** | **str** | The HTTPS url configured by the merchant. The URL should be hosted on HTTPS and robots.txt should allow the URL path to be accessible by UserAgent:Google-Valuables. | [optional] 

## Example

```python
from openapi_client.models.callback_options import CallbackOptions

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackOptions from a JSON string
callback_options_instance = CallbackOptions.from_json(json)
# print the JSON string representation of the object
print(CallbackOptions.to_json())

# convert the object into a dict
callback_options_dict = callback_options_instance.to_dict()
# create an instance of CallbackOptions from a dict
callback_options_from_dict = CallbackOptions.from_dict(callback_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


