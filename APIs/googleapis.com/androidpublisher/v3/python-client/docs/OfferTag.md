# OfferTag

Represents a custom tag specified for base plans and subscription offers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tag** | **str** | Must conform with RFC-1034. That is, this string can only contain lower-case letters (a-z), numbers (0-9), and hyphens (-), and be at most 20 characters. | [optional] 

## Example

```python
from openapi_client.models.offer_tag import OfferTag

# TODO update the JSON string below
json = "{}"
# create an instance of OfferTag from a JSON string
offer_tag_instance = OfferTag.from_json(json)
# print the JSON string representation of the object
print(OfferTag.to_json())

# convert the object into a dict
offer_tag_dict = offer_tag_instance.to_dict()
# create an instance of OfferTag from a dict
offer_tag_from_dict = OfferTag.from_dict(offer_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


