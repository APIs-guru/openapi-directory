# CategoryTargetingOptionDetails

Represents a targetable category. This will be populated in the category_details field of a TargetingOption when targeting_type is `TARGETING_TYPE_CATEGORY`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the category. | [optional] [readonly] 

## Example

```python
from openapi_client.models.category_targeting_option_details import CategoryTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryTargetingOptionDetails from a JSON string
category_targeting_option_details_instance = CategoryTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(CategoryTargetingOptionDetails.to_json())

# convert the object into a dict
category_targeting_option_details_dict = category_targeting_option_details_instance.to_dict()
# create an instance of CategoryTargetingOptionDetails from a dict
category_targeting_option_details_from_dict = CategoryTargetingOptionDetails.from_dict(category_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


