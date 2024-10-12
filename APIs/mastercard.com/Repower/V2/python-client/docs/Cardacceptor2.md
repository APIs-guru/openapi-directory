# Cardacceptor2

Card Acceptor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City of merchant&#39;s address. Details- String, 1-13 | 
**country** | **str** | The CountryIso3Code will be a three character value compliant with ISO 3166-1 and alpha-3 standards. Details- String, 3 | 
**name** | **str** | Point of sale merchant&#39;s name. Details- String, 1-22 | 
**postal_code** | **str** | The PostalCode is a value representing the zip code for the merchant&#39;s address. Details- String, 10 | [optional] 
**state** | **str** | State of the merchant&#39;s address. Details- String, 2 | 

## Example

```python
from openapi_client.models.cardacceptor2 import Cardacceptor2

# TODO update the JSON string below
json = "{}"
# create an instance of Cardacceptor2 from a JSON string
cardacceptor2_instance = Cardacceptor2.from_json(json)
# print the JSON string representation of the object
print(Cardacceptor2.to_json())

# convert the object into a dict
cardacceptor2_dict = cardacceptor2_instance.to_dict()
# create an instance of Cardacceptor2 from a dict
cardacceptor2_from_dict = Cardacceptor2.from_dict(cardacceptor2_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


