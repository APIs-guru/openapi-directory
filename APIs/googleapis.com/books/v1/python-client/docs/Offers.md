# Offers


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[OffersItemsInner]**](OffersItemsInner.md) | A list of offers. | [optional] 
**kind** | **str** | Resource type. | [optional] 

## Example

```python
from openapi_client.models.offers import Offers

# TODO update the JSON string below
json = "{}"
# create an instance of Offers from a JSON string
offers_instance = Offers.from_json(json)
# print the JSON string representation of the object
print(Offers.to_json())

# convert the object into a dict
offers_dict = offers_instance.to_dict()
# create an instance of Offers from a dict
offers_from_dict = Offers.from_dict(offers_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


