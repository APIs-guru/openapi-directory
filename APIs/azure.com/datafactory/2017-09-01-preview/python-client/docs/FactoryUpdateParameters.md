# FactoryUpdateParameters

Parameters for updating a factory resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**identity** | [**FactoryIdentity**](FactoryIdentity.md) |  | [optional] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 

## Example

```python
from openapi_client.models.factory_update_parameters import FactoryUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of FactoryUpdateParameters from a JSON string
factory_update_parameters_instance = FactoryUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(FactoryUpdateParameters.to_json())

# convert the object into a dict
factory_update_parameters_dict = factory_update_parameters_instance.to_dict()
# create an instance of FactoryUpdateParameters from a dict
factory_update_parameters_from_dict = FactoryUpdateParameters.from_dict(factory_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


