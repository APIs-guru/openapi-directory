# CreateNetworkMappingInput

Create network mappings input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CreateNetworkMappingInputProperties**](CreateNetworkMappingInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.create_network_mapping_input import CreateNetworkMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of CreateNetworkMappingInput from a JSON string
create_network_mapping_input_instance = CreateNetworkMappingInput.from_json(json)
# print the JSON string representation of the object
print(CreateNetworkMappingInput.to_json())

# convert the object into a dict
create_network_mapping_input_dict = create_network_mapping_input_instance.to_dict()
# create an instance of CreateNetworkMappingInput from a dict
create_network_mapping_input_from_dict = CreateNetworkMappingInput.from_dict(create_network_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


