# GetCallbackUrlParameters

The callback url parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | [**KeyType**](KeyType.md) |  | [optional] 
**not_after** | **datetime** | The expiry time. | [optional] 

## Example

```python
from openapi_client.models.get_callback_url_parameters import GetCallbackUrlParameters

# TODO update the JSON string below
json = "{}"
# create an instance of GetCallbackUrlParameters from a JSON string
get_callback_url_parameters_instance = GetCallbackUrlParameters.from_json(json)
# print the JSON string representation of the object
print(GetCallbackUrlParameters.to_json())

# convert the object into a dict
get_callback_url_parameters_dict = get_callback_url_parameters_instance.to_dict()
# create an instance of GetCallbackUrlParameters from a dict
get_callback_url_parameters_from_dict = GetCallbackUrlParameters.from_dict(get_callback_url_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


