# FabricCreationInputProperties

Properties of site details provided during the time of site creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_details** | [**FabricSpecificCreationInput**](FabricSpecificCreationInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.fabric_creation_input_properties import FabricCreationInputProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FabricCreationInputProperties from a JSON string
fabric_creation_input_properties_instance = FabricCreationInputProperties.from_json(json)
# print the JSON string representation of the object
print(FabricCreationInputProperties.to_json())

# convert the object into a dict
fabric_creation_input_properties_dict = fabric_creation_input_properties_instance.to_dict()
# create an instance of FabricCreationInputProperties from a dict
fabric_creation_input_properties_from_dict = FabricCreationInputProperties.from_dict(fabric_creation_input_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


