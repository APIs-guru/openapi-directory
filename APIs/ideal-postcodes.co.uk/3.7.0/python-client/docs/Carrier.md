# Carrier


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | Country that number is associated with. In ISO 3166-1 alpha-2 format. | 
**name** | **str** | The full name of the carrier that number is associated with. | 
**network_code** | **str** | The [Mobile Country Code](https://en.wikipedia.org/wiki/Mobile_country_code) for the carrier. | 
**network_type** | **str** | Type of network that number is associated with. | 

## Example

```python
from openapi_client.models.carrier import Carrier

# TODO update the JSON string below
json = "{}"
# create an instance of Carrier from a JSON string
carrier_instance = Carrier.from_json(json)
# print the JSON string representation of the object
print(Carrier.to_json())

# convert the object into a dict
carrier_dict = carrier_instance.to_dict()
# create an instance of Carrier from a dict
carrier_from_dict = Carrier.from_dict(carrier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


