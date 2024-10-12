# CreateInboundRuleRequest



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rule** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.create_inbound_rule_request import CreateInboundRuleRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateInboundRuleRequest from a JSON string
create_inbound_rule_request_instance = CreateInboundRuleRequest.from_json(json)
# print the JSON string representation of the object
print(CreateInboundRuleRequest.to_json())

# convert the object into a dict
create_inbound_rule_request_dict = create_inbound_rule_request_instance.to_dict()
# create an instance of CreateInboundRuleRequest from a dict
create_inbound_rule_request_from_dict = CreateInboundRuleRequest.from_dict(create_inbound_rule_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


