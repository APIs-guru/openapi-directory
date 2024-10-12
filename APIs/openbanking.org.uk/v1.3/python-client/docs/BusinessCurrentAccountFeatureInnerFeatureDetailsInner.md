# BusinessCurrentAccountFeatureInnerFeatureDetailsInner

Feature Details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**criteria_type** | **str** | Criteria that is required in order to be eligible for the feature | [optional] 
**date_of_change** | **str** | Date of the change if it refers to future terms | [optional] 
**feature_description** | **str** | A textual explanation of what the feature | [optional] 
**feature_name** | **str** | The name of the feature | [optional] 
**feature_sub_type** | **str** |  | [optional] 
**feature_type** | **str** | Type that represents the nature of the feature | [optional] 
**feature_value** | **str** | The value or values permissible for a specific feature for an individual product representing a product characteristic | [optional] 
**length_promotional_in_days** | **int** | Describes the length if only a duration is given instead of a date | [optional] 
**start_promotion_or_future_terms** | **str** | Describes the start date | [optional] 
**stop_promotion_or_future_terms** | **str** | Describes the end date | [optional] 

## Example

```python
from openapi_client.models.business_current_account_feature_inner_feature_details_inner import BusinessCurrentAccountFeatureInnerFeatureDetailsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BusinessCurrentAccountFeatureInnerFeatureDetailsInner from a JSON string
business_current_account_feature_inner_feature_details_inner_instance = BusinessCurrentAccountFeatureInnerFeatureDetailsInner.from_json(json)
# print the JSON string representation of the object
print(BusinessCurrentAccountFeatureInnerFeatureDetailsInner.to_json())

# convert the object into a dict
business_current_account_feature_inner_feature_details_inner_dict = business_current_account_feature_inner_feature_details_inner_instance.to_dict()
# create an instance of BusinessCurrentAccountFeatureInnerFeatureDetailsInner from a dict
business_current_account_feature_inner_feature_details_inner_from_dict = BusinessCurrentAccountFeatureInnerFeatureDetailsInner.from_dict(business_current_account_feature_inner_feature_details_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


