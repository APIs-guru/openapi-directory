# AdlsError

Data Lake Store filesystem error containing a specific WebHDFS exception.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remote_exception** | [**AdlsRemoteException**](AdlsRemoteException.md) |  | [optional] 

## Example

```python
from openapi_client.models.adls_error import AdlsError

# TODO update the JSON string below
json = "{}"
# create an instance of AdlsError from a JSON string
adls_error_instance = AdlsError.from_json(json)
# print the JSON string representation of the object
print(AdlsError.to_json())

# convert the object into a dict
adls_error_dict = adls_error_instance.to_dict()
# create an instance of AdlsError from a dict
adls_error_from_dict = AdlsError.from_dict(adls_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


