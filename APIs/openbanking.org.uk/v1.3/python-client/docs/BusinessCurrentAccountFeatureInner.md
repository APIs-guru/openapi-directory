# BusinessCurrentAccountFeatureInner

Account Features

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**existing_feature** | **bool** | Indicates whether the account has any feature | 
**feature_details** | [**List[BusinessCurrentAccountFeatureInnerFeatureDetailsInner]**](BusinessCurrentAccountFeatureInnerFeatureDetailsInner.md) | Feature details | [optional] 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date | [optional] 
**product_state** | **str** | Describes if the offering is promotional or a description of a future state. | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 

## Example

```python
from openapi_client.models.business_current_account_feature_inner import BusinessCurrentAccountFeatureInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountFeatureInner from a JSON string
business_current_account_feature_inner_instance = BusinessCurrentAccountFeatureInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountFeatureInner.to_json())

# convert the object into a dict
business_current_account_feature_inner_dict = business_current_account_feature_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountFeatureInner from a dict
business_current_account_feature_inner_from_dict = BusinessCurrentAccountFeatureInner.from_dict(business_current_account_feature_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


