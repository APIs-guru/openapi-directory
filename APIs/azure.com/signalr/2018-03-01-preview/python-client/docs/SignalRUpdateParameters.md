# SignalRUpdateParameters

Parameters for SignalR service update operation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**SignalRCreateOrUpdateProperties**](SignalRCreateOrUpdateProperties.md) |  | [optional] 
**sku** | [**ResourceSku**](ResourceSku.md) |  | [optional] 
**tags** | **Dict[str, str]** | A list of key value pairs that describe the resource. | [optional] 

## Example

```python
from openapi_client.models.signal_r_update_parameters import SignalRUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRUpdateParameters from a JSON string
signal_r_update_parameters_instance = SignalRUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(SignalRUpdateParameters.to_json())

# convert the object into a dict
signal_r_update_parameters_dict = signal_r_update_parameters_instance.to_dict()
# create an instance of SignalRUpdateParameters from a dict
signal_r_update_parameters_from_dict = SignalRUpdateParameters.from_dict(signal_r_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


