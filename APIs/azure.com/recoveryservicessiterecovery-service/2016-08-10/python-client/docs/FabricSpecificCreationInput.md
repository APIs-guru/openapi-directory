# FabricSpecificCreationInput

Fabric provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the class type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.fabric_specific_creation_input import FabricSpecificCreationInput

# TODO update the JSON string below
json = "{}"
# create an instance of FabricSpecificCreationInput from a JSON string
fabric_specific_creation_input_instance = FabricSpecificCreationInput.from_json(json)
# print the JSON string representation of the object
print(FabricSpecificCreationInput.to_json())

# convert the object into a dict
fabric_specific_creation_input_dict = fabric_specific_creation_input_instance.to_dict()
# create an instance of FabricSpecificCreationInput from a dict
fabric_specific_creation_input_from_dict = FabricSpecificCreationInput.from_dict(fabric_specific_creation_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


