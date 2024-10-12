# OfferDisplay


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailed_terms** | **str** | Conditions required for successful redemption of the offer. | [optional] 

## Example

```python
from openapi_client.models.offer_display import OfferDisplay

# TODO update the JSON string below
json = "{}"
# create an instance of OfferDisplay from a JSON string
offer_display_instance = OfferDisplay.from_json(json)
# print the JSON string representation of the object
print(OfferDisplay.to_json())

# convert the object into a dict
offer_display_dict = offer_display_instance.to_dict()
# create an instance of OfferDisplay from a dict
offer_display_from_dict = OfferDisplay.from_dict(offer_display_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


