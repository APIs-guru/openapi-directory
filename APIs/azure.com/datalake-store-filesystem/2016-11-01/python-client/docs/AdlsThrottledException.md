# AdlsThrottledException

A WebHDFS exception thrown indicating that the request is being throttled. Reducing the number of requests or request size helps to mitigate this error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_throttled_exception import AdlsThrottledException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsThrottledException from a JSON string
adls_throttled_exception_instance = AdlsThrottledException.from_json(json)
# print the JSON string representation of the object
print(AdlsThrottledException.to_json())

# convert the object into a dict
adls_throttled_exception_dict = adls_throttled_exception_instance.to_dict()
# create an instance of AdlsThrottledException from a dict
adls_throttled_exception_from_dict = AdlsThrottledException.from_dict(adls_throttled_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


