# SignalRCreateParameters

Parameters for SignalR service create/update operation.    Keep the same schema as AzSignalR.Models.SignalRResource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Azure GEO region: e.g. West US | East US | North Central US | South Central US | West Europe | North Europe | East Asia | Southeast Asia | etc.   The geo region of a resource never changes after it is created. | 
**properties** | [**SignalRCreateOrUpdateProperties**](SignalRCreateOrUpdateProperties.md) |  | [optional] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | A list of key value pairs that describe the resource. | [optional] 

## Example

```python
from openapi_client.models.signal_r_create_parameters import SignalRCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRCreateParameters from a JSON string
signal_r_create_parameters_instance = SignalRCreateParameters.from_json(json)
# print the JSON string representation of the object
print(SignalRCreateParameters.to_json())

# convert the object into a dict
signal_r_create_parameters_dict = signal_r_create_parameters_instance.to_dict()
# create an instance of SignalRCreateParameters from a dict
signal_r_create_parameters_from_dict = SignalRCreateParameters.from_dict(signal_r_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


