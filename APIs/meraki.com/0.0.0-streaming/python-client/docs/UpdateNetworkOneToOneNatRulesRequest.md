# UpdateNetworkOneToOneNatRulesRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[UpdateNetworkOneToOneNatRulesRequestRulesInner]**](UpdateNetworkOneToOneNatRulesRequestRulesInner.md) | An array of 1:1 nat rules | 

## Example

```python
from openapi_client.models.update_network_one_to_one_nat_rules_request import UpdateNetworkOneToOneNatRulesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkOneToOneNatRulesRequest from a JSON string
update_network_one_to_one_nat_rules_request_instance = UpdateNetworkOneToOneNatRulesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkOneToOneNatRulesRequest.to_json())

# convert the object into a dict
update_network_one_to_one_nat_rules_request_dict = update_network_one_to_one_nat_rules_request_instance.to_dict()
# create an instance of UpdateNetworkOneToOneNatRulesRequest from a dict
update_network_one_to_one_nat_rules_request_from_dict = UpdateNetworkOneToOneNatRulesRequest.from_dict(update_network_one_to_one_nat_rules_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


