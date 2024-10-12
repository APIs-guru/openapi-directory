# OfferTermInfo

Describes the offer term.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**effective_date** | **datetime** | Indicates the date from which the offer term is effective. | [optional] 
**name** | **str** | Name of the offer term | 

## Example

```python
from openapi_client.models.offer_term_info import OfferTermInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OfferTermInfo from a JSON string
offer_term_info_instance = OfferTermInfo.from_json(json)
# print the JSON string representation of the object
print(OfferTermInfo.to_json())

# convert the object into a dict
offer_term_info_dict = offer_term_info_instance.to_dict()
# create an instance of OfferTermInfo from a dict
offer_term_info_from_dict = OfferTermInfo.from_dict(offer_term_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


