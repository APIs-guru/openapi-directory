# IosAppCrashed

Additional details for an iOS app crash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stack_trace** | [**StackTrace**](StackTrace.md) |  | [optional] 

## Example

```python
from openapi_client.models.ios_app_crashed import IosAppCrashed

# TODO update the JSON string below
json = "{}"
# create an instance of IosAppCrashed from a JSON string
ios_app_crashed_instance = IosAppCrashed.from_json(json)
# print the JSON string representation of the object
print(IosAppCrashed.to_json())

# convert the object into a dict
ios_app_crashed_dict = ios_app_crashed_instance.to_dict()
# create an instance of IosAppCrashed from a dict
ios_app_crashed_from_dict = IosAppCrashed.from_dict(ios_app_crashed_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


