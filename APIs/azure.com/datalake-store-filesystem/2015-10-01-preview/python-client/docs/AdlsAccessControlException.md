# AdlsAccessControlException

A WebHDFS exception thrown indicating that access is denied due to insufficient permissions. Thrown when a 403 error response code is returned (forbidden).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------

## Example

```python
from openapi_client.models.adls_access_control_exception import AdlsAccessControlException

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsAccessControlException from a JSON string
adls_access_control_exception_instance = AdlsAccessControlException.from_json(json)
# print the JSON string representation of the object
print(AdlsAccessControlException.to_json())

# convert the object into a dict
adls_access_control_exception_dict = adls_access_control_exception_instance.to_dict()
# create an instance of AdlsAccessControlException from a dict
adls_access_control_exception_from_dict = AdlsAccessControlException.from_dict(adls_access_control_exception_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


