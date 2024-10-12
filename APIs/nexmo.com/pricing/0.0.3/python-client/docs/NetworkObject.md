# NetworkObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency** | **str** | The currency used for prices for this network. | [optional] 
**mcc** | **str** | The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) of the operator. | [optional] 
**mnc** | **str** | The Mobile Network Code of the operator. | [optional] 
**network_code** | **str** | The Mobile Country Code and Mobile Network Code combined to give a unique reference for the operator. | [optional] 
**network_name** | **str** | The company/organisational name of the operator. | [optional] 
**price** | **str** | The cost to send a message or make a call to this network | [optional] 
**type** | **str** | The type of network: mobile or landline. | [optional] 

## Example

```python
from openapi_client.models.network_object import NetworkObject

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkObject from a JSON string
network_object_instance = NetworkObject.from_json(json)
# print the JSON string representation of the object
print(NetworkObject.to_json())

# convert the object into a dict
network_object_dict = network_object_instance.to_dict()
# create an instance of NetworkObject from a dict
network_object_from_dict = NetworkObject.from_dict(network_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


