# FabricCreationInput

Site details provided during the time of site creation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FabricCreationInputProperties**](FabricCreationInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.fabric_creation_input import FabricCreationInput

# TODO update the JSON string below
json = "{}"
# create an instance of FabricCreationInput from a JSON string
fabric_creation_input_instance = FabricCreationInput.from_json(json)
# print the JSON string representation of the object
print(FabricCreationInput.to_json())

# convert the object into a dict
fabric_creation_input_dict = fabric_creation_input_instance.to_dict()
# create an instance of FabricCreationInput from a dict
fabric_creation_input_from_dict = FabricCreationInput.from_dict(fabric_creation_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


