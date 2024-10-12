# DomainMappingSpec

The desired state of the Domain Mapping.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**certificate_mode** | **str** | The mode of the certificate. | [optional] 
**force_override** | **bool** | If set, the mapping will override any mapping set before this spec was set. It is recommended that the user leaves this empty to receive an error warning about a potential conflict and only set it once the respective UI has given such a warning. | [optional] 
**route_name** | **str** | The name of the Knative Route that this DomainMapping applies to. The route must exist. | [optional] 

## Example

```python
from openapi_client.models.domain_mapping_spec import DomainMappingSpec

# TODO update the JSON string below
json = "{}"
# create an instance of DomainMappingSpec from a JSON string
domain_mapping_spec_instance = DomainMappingSpec.from_json(json)
# print the JSON string representation of the object
print(DomainMappingSpec.to_json())

# convert the object into a dict
domain_mapping_spec_dict = domain_mapping_spec_instance.to_dict()
# create an instance of DomainMappingSpec from a dict
domain_mapping_spec_from_dict = DomainMappingSpec.from_dict(domain_mapping_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


