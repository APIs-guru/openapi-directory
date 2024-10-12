# EgressControlConfig

Egress control config for connector runtime. These configurations define the rules to identify which outbound domains/hosts needs to be whitelisted. It may be a static information for a particular connector version or it is derived from the configurations provided by the customer in Connection resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**backends** | **str** | Static Comma separated backends which are common for all Connection resources. Supported formats for each backend are host:port or just host (host can be ip address or domain name). | [optional] 
**extraction_rules** | [**ExtractionRules**](ExtractionRules.md) |  | [optional] 

## Example

```python
from openapi_client.models.egress_control_config import EgressControlConfig

# TODO update the JSON string below
json = "{}"
# create an instance of EgressControlConfig from a JSON string
egress_control_config_instance = EgressControlConfig.from_json(json)
# print the JSON string representation of the object
print(EgressControlConfig.to_json())

# convert the object into a dict
egress_control_config_dict = egress_control_config_instance.to_dict()
# create an instance of EgressControlConfig from a dict
egress_control_config_from_dict = EgressControlConfig.from_dict(egress_control_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


