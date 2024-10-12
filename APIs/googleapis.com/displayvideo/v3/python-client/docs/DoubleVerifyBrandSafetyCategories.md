# DoubleVerifyBrandSafetyCategories

Settings for brand safety controls.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**avoid_unknown_brand_safety_category** | **bool** | Unknown or unrateable. | [optional] 
**avoided_high_severity_categories** | **List[str]** | Brand safety high severity avoidance categories. | [optional] 
**avoided_medium_severity_categories** | **List[str]** | Brand safety medium severity avoidance categories. | [optional] 

## Example

```python
from openapi_client.models.double_verify_brand_safety_categories import DoubleVerifyBrandSafetyCategories

# TODO update the JSON string below
json = "{}"
# create an instance of DoubleVerifyBrandSafetyCategories from a JSON string
double_verify_brand_safety_categories_instance = DoubleVerifyBrandSafetyCategories.from_json(json)
# print the JSON string representation of the object
print(DoubleVerifyBrandSafetyCategories.to_json())

# convert the object into a dict
double_verify_brand_safety_categories_dict = double_verify_brand_safety_categories_instance.to_dict()
# create an instance of DoubleVerifyBrandSafetyCategories from a dict
double_verify_brand_safety_categories_from_dict = DoubleVerifyBrandSafetyCategories.from_dict(double_verify_brand_safety_categories_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


