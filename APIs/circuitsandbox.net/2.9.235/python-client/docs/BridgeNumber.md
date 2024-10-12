# BridgeNumber


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bridge_number** | **str** | The number that has to be called to join the real time session of a conversation | [optional] 
**country** | **str** | The country where the bridge is hosted | [optional] 
**is_most_used** | **bool** | Is most used | [optional] 
**locale** | **str** | The locale of the bridge | [optional] 
**name** | **str** | The name / identifier of the bridge | [optional] 
**type** | **str** | Information of the billing for the call, i.e. if the caller has to pay or not for the call | [optional] 

## Example

```python
from openapi_client.models.bridge_number import BridgeNumber

# TODO update the JSON string below
json = "{}"
# create an instance of BridgeNumber from a JSON string
bridge_number_instance = BridgeNumber.from_json(json)
# print the JSON string representation of the object
print(BridgeNumber.to_json())

# convert the object into a dict
bridge_number_dict = bridge_number_instance.to_dict()
# create an instance of BridgeNumber from a dict
bridge_number_from_dict = BridgeNumber.from_dict(bridge_number_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


