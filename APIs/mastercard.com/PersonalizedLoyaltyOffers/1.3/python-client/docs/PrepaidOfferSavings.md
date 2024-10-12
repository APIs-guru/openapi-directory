# PrepaidOfferSavings


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_saved** | **str** | Deprecated. | [optional] 
**num_available** | **str** | Deprecated. | [optional] 
**num_purchased** | **str** | Deprecated. | [optional] 
**potential_savings** | **str** | Deprecated. | [optional] 

## Example

```python
from openapi_client.models.prepaid_offer_savings import PrepaidOfferSavings

# TODO update the JSON string below
json = "{}"
# create an instance of PrepaidOfferSavings from a JSON string
prepaid_offer_savings_instance = PrepaidOfferSavings.from_json(json)
# print the JSON string representation of the object
print(PrepaidOfferSavings.to_json())

# convert the object into a dict
prepaid_offer_savings_dict = prepaid_offer_savings_instance.to_dict()
# create an instance of PrepaidOfferSavings from a dict
prepaid_offer_savings_from_dict = PrepaidOfferSavings.from_dict(prepaid_offer_savings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


