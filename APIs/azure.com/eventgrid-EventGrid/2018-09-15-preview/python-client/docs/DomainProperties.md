# DomainProperties

Properties of the Domain

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**endpoint** | **str** | Endpoint for the domain. | [optional] [readonly] 
**input_schema** | **str** | This determines the format that Event Grid should expect for incoming events published to the domain. | [optional] 
**input_schema_mapping** | [**InputSchemaMapping**](InputSchemaMapping.md) |  | [optional] 
**provisioning_state** | **str** | Provisioning state of the domain. | [optional] [readonly] 

## Example

```python
from openapi_client.models.domain_properties import DomainProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DomainProperties from a JSON string
domain_properties_instance = DomainProperties.from_json(json)
# print the JSON string representation of the object
print(DomainProperties.to_json())

# convert the object into a dict
domain_properties_dict = domain_properties_instance.to_dict()
# create an instance of DomainProperties from a dict
domain_properties_from_dict = DomainProperties.from_dict(domain_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


