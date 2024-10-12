# Connectivity

The ways in which the property provides guests with the ability to access the internet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**free_wifi** | **bool** | Free wifi. The hotel offers guests wifi for free. | [optional] 
**free_wifi_exception** | **str** | Free wifi exception. | [optional] 
**public_area_wifi_available** | **bool** | Public area wifi available. Guests have the ability to wirelessly connect to the internet in the areas of the hotel accessible to anyone. Can be free or for a fee. | [optional] 
**public_area_wifi_available_exception** | **str** | Public area wifi available exception. | [optional] 
**public_internet_terminal** | **bool** | Public internet terminal. An area of the hotel supplied with computers and designated for the purpose of providing guests with the ability to access the internet. | [optional] 
**public_internet_terminal_exception** | **str** | Public internet terminal exception. | [optional] 
**wifi_available** | **bool** | Wifi available. The hotel provides the ability for guests to wirelessly connect to the internet. Can be in the public areas of the hotel and/or in the guest rooms. Can be free or for a fee. | [optional] 
**wifi_available_exception** | **str** | Wifi available exception. | [optional] 

## Example

```python
from openapi_client.models.connectivity import Connectivity

# TODO update the JSON string below
json = "{}"
# create an instance of Connectivity from a JSON string
connectivity_instance = Connectivity.from_json(json)
# print the JSON string representation of the object
print(Connectivity.to_json())

# convert the object into a dict
connectivity_dict = connectivity_instance.to_dict()
# create an instance of Connectivity from a dict
connectivity_from_dict = Connectivity.from_dict(connectivity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


