# EnterpriseCrmEventbusProtoAddress

Email address along with optional name and tokens. These tokens will be substituted for the variables in the form of [{var_name}], where var_name could be any string of no more than 32 bytes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Required. | [optional] 
**name** | **str** |  | [optional] 
**tokens** | [**List[EnterpriseCrmEventbusProtoToken]**](EnterpriseCrmEventbusProtoToken.md) |  | [optional] 

## Example

```python
from openapi_client.models.enterprise_crm_eventbus_proto_address import EnterpriseCrmEventbusProtoAddress

# TODO update the JSON string below
json = "{}"
# create an instance of EnterpriseCrmEventbusProtoAddress from a JSON string
enterprise_crm_eventbus_proto_address_instance = EnterpriseCrmEventbusProtoAddress.from_json(json)
# print the JSON string representation of the object
print(EnterpriseCrmEventbusProtoAddress.to_json())

# convert the object into a dict
enterprise_crm_eventbus_proto_address_dict = enterprise_crm_eventbus_proto_address_instance.to_dict()
# create an instance of EnterpriseCrmEventbusProtoAddress from a dict
enterprise_crm_eventbus_proto_address_from_dict = EnterpriseCrmEventbusProtoAddress.from_dict(enterprise_crm_eventbus_proto_address_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


