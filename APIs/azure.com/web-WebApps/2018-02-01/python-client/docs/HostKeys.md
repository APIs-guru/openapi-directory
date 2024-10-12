# HostKeys

Functions host level keys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**function_keys** | **Dict[str, str]** | Host level function keys. | [optional] 
**master_key** | **str** | Secret key. | [optional] 
**system_keys** | **Dict[str, str]** | System keys. | [optional] 

## Example

```python
from openapi_client.models.host_keys import HostKeys

# TODO update the JSON string below
json = "{}"
# create an instance of HostKeys from a JSON string
host_keys_instance = HostKeys.from_json(json)
# print the JSON string representation of the object
print(HostKeys.to_json())

# convert the object into a dict
host_keys_dict = host_keys_instance.to_dict()
# create an instance of HostKeys from a dict
host_keys_from_dict = HostKeys.from_dict(host_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


