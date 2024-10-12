# Benefits

Plan benefits to be displayed to customer

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**discounts** | [**List[BenefitsDiscountsInner]**](BenefitsDiscountsInner.md) | Discounts available for this plan | 
**incentives** | [**List[BenefitsIncentivesInner]**](BenefitsIncentivesInner.md) | Inventives available for this plan | 
**name** | **str** | Name of this section when rendering | 

## Example

```python
from openapi_client.models.benefits import Benefits

# TODO update the JSON string below
json = "{}"
# create an instance of Benefits from a JSON string
benefits_instance = Benefits.from_json(json)
# print the JSON string representation of the object
print(Benefits.to_json())

# convert the object into a dict
benefits_dict = benefits_instance.to_dict()
# create an instance of Benefits from a dict
benefits_from_dict = Benefits.from_dict(benefits_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


