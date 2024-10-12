# SecuritySchemeDefinition


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.security_scheme_definition import SecuritySchemeDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of SecuritySchemeDefinition from a JSON string
security_scheme_definition_instance = SecuritySchemeDefinition.from_json(json)
# print the JSON string representation of the object
print(SecuritySchemeDefinition.to_json())

# convert the object into a dict
security_scheme_definition_dict = security_scheme_definition_instance.to_dict()
# create an instance of SecuritySchemeDefinition from a dict
security_scheme_definition_from_dict = SecuritySchemeDefinition.from_dict(security_scheme_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


