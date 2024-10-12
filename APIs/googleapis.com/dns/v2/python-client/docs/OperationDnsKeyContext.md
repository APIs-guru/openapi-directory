# OperationDnsKeyContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**new_value** | [**DnsKey**](DnsKey.md) |  | [optional] 
**old_value** | [**DnsKey**](DnsKey.md) |  | [optional] 

## Example

```python
from openapi_client.models.operation_dns_key_context import OperationDnsKeyContext

# TODO update the JSON string below
json = "{}"
# create an instance of OperationDnsKeyContext from a JSON string
operation_dns_key_context_instance = OperationDnsKeyContext.from_json(json)
# print the JSON string representation of the object
print(OperationDnsKeyContext.to_json())

# convert the object into a dict
operation_dns_key_context_dict = operation_dns_key_context_instance.to_dict()
# create an instance of OperationDnsKeyContext from a dict
operation_dns_key_context_from_dict = OperationDnsKeyContext.from_dict(operation_dns_key_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


