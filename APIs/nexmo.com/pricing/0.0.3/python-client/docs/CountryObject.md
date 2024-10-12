# CountryObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country_display_name** | **str** | Readable country name. | [optional] 
**country_name** | **str** | Readable country name. | [optional] 
**currency** | **str** | The currency that your account is being billed in (by default &#x60;Euros—EUR&#x60;). Can change in the Dashboard to US Dollars—USD. | [optional] 
**default_price** | **str** | The default price. | [optional] 
**dialing_prefix** | **str** | The dialling prefix. | [optional] 
**networks** | [**List[NetworkObject]**](NetworkObject.md) | An array of network objects | [optional] 

## Example

```python
from openapi_client.models.country_object import CountryObject

# TODO update the JSON string below
json = "{}"
# create an instance of CountryObject from a JSON string
country_object_instance = CountryObject.from_json(json)
# print the JSON string representation of the object
print(CountryObject.to_json())

# convert the object into a dict
country_object_dict = country_object_instance.to_dict()
# create an instance of CountryObject from a dict
country_object_from_dict = CountryObject.from_dict(country_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


