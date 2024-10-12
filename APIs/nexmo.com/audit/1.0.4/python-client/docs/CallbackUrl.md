# CallbackUrl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** | The HTTP method used to make a callback to your application | [optional] 
**url** | **str** | The URL used for a callback to your application | [optional] 

## Example

```python
from openapi_client.models.callback_url import CallbackUrl

# TODO update the JSON string below
json = "{}"
# create an instance of CallbackUrl from a JSON string
callback_url_instance = CallbackUrl.from_json(json)
# print the JSON string representation of the object
print(CallbackUrl.to_json())

# convert the object into a dict
callback_url_dict = callback_url_instance.to_dict()
# create an instance of CallbackUrl from a dict
callback_url_from_dict = CallbackUrl.from_dict(callback_url_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


