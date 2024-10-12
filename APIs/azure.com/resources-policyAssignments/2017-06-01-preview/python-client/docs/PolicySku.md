# PolicySku

The policy sku.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the policy sku. Possible values are A0 and A1. | 
**tier** | **str** | The policy sku tier. Possible values are Free and Standard. | [optional] 

## Example

```python
from openapi_client.models.policy_sku import PolicySku

# TODO update the JSON string below
json = "{}"
# create an instance of PolicySku from a JSON string
policy_sku_instance = PolicySku.from_json(json)
# print the JSON string representation of the object
print(PolicySku.to_json())

# convert the object into a dict
policy_sku_dict = policy_sku_instance.to_dict()
# create an instance of PolicySku from a dict
policy_sku_from_dict = PolicySku.from_dict(policy_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


