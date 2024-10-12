# ConfigurationSpec

ConfigurationSpec holds the desired state of the Configuration (from the client).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**template** | [**RevisionTemplate**](RevisionTemplate.md) |  | [optional] 

## Example

```python
from openapi_client.models.configuration_spec import ConfigurationSpec

# TODO update the JSON string below
json = "{}"
# create an instance of ConfigurationSpec from a JSON string
configuration_spec_instance = ConfigurationSpec.from_json(json)
# print the JSON string representation of the object
print(ConfigurationSpec.to_json())

# convert the object into a dict
configuration_spec_dict = configuration_spec_instance.to_dict()
# create an instance of ConfigurationSpec from a dict
configuration_spec_from_dict = ConfigurationSpec.from_dict(configuration_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


