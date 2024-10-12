# AzureFabricCreationInput

Fabric provider specific settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | The Location. | [optional] 

## Example

```python
from openapi_client.models.azure_fabric_creation_input import AzureFabricCreationInput

# TODO update the JSON string below
json = "{}"
# create an instance of AzureFabricCreationInput from a JSON string
azure_fabric_creation_input_instance = AzureFabricCreationInput.from_json(json)
# print the JSON string representation of the object
print(AzureFabricCreationInput.to_json())

# convert the object into a dict
azure_fabric_creation_input_dict = azure_fabric_creation_input_instance.to_dict()
# create an instance of AzureFabricCreationInput from a dict
azure_fabric_creation_input_from_dict = AzureFabricCreationInput.from_dict(azure_fabric_creation_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


