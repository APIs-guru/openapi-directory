# UpdateNetworkMappingInput

Update network mapping input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateNetworkMappingInputProperties**](UpdateNetworkMappingInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_network_mapping_input import UpdateNetworkMappingInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateNetworkMappingInput from a JSON string
update_network_mapping_input_instance = UpdateNetworkMappingInput.from_json(json)
# print the JSON string representation of the object
print(UpdateNetworkMappingInput.to_json())

# convert the object into a dict
update_network_mapping_input_dict = update_network_mapping_input_instance.to_dict()
# create an instance of UpdateNetworkMappingInput from a dict
update_network_mapping_input_from_dict = UpdateNetworkMappingInput.from_dict(update_network_mapping_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


