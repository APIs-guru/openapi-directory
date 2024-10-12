# CountrySpecification


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | [**Country**](Country.md) |  | [optional] 
**receiver** | [**Receiver**](Receiver.md) |  | [optional] 
**region** | **str** | The region this country belongs to. Within this region exchanging invoices is well defined. Between regions some care needs to be taken and Storecove may help in automatically converting some items. Contact us for details of inter-regional document exchange. | [optional] 
**sender** | [**Sender**](Sender.md) |  | [optional] 

## Example

```python
from openapi_client.models.country_specification import CountrySpecification

# TODO update the JSON string below
json = "{}"
# create an instance of CountrySpecification from a JSON string
country_specification_instance = CountrySpecification.from_json(json)
# print the JSON string representation of the object
print(CountrySpecification.to_json())

# convert the object into a dict
country_specification_dict = country_specification_instance.to_dict()
# create an instance of CountrySpecification from a dict
country_specification_from_dict = CountrySpecification.from_dict(country_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


