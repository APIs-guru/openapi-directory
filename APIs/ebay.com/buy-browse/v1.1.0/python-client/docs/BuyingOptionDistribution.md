# BuyingOptionDistribution

The container that defines the fields for the buying options refinements. This container is returned when <b> fieldgroups</b> is set to <code>BUYING_OPTION_REFINEMENTS</code> or <code>FULL</code> in the request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**buying_option** | **str** | The container that returns the buying option type. This will be AUCTION or FIXED_PRICE or both. For details, see buyingOptions. | [optional] 
**match_count** | **int** | The number of items having this buying option. | [optional] 
**refinement_href** | **str** | The HATEOAS reference for this buying option. | [optional] 

## Example

```python
from openapi_client.models.buying_option_distribution import BuyingOptionDistribution

# TODO update the JSON string below
json = "{}"
# create an instance of BuyingOptionDistribution from a JSON string
buying_option_distribution_instance = BuyingOptionDistribution.from_json(json)
# print the JSON string representation of the object
print(BuyingOptionDistribution.to_json())

# convert the object into a dict
buying_option_distribution_dict = buying_option_distribution_instance.to_dict()
# create an instance of BuyingOptionDistribution from a dict
buying_option_distribution_from_dict = BuyingOptionDistribution.from_dict(buying_option_distribution_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


