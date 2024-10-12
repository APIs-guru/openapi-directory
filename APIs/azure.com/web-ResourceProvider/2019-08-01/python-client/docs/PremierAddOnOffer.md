# PremierAddOnOffer

Premier add-on offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | PremierAddOnOffer resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.premier_add_on_offer import PremierAddOnOffer

# TODO update the JSON string below
json = "{}"
# create an instance of PremierAddOnOffer from a JSON string
premier_add_on_offer_instance = PremierAddOnOffer.from_json(json)
# print the JSON string representation of the object
print(PremierAddOnOffer.to_json())

# convert the object into a dict
premier_add_on_offer_dict = premier_add_on_offer_instance.to_dict()
# create an instance of PremierAddOnOffer from a dict
premier_add_on_offer_from_dict = PremierAddOnOffer.from_dict(premier_add_on_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


