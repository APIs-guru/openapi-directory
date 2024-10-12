# CategoryAssignedTargetingOptionDetails

Assigned category targeting option details. This will be populated in the category_details field when targeting_type is `TARGETING_TYPE_CATEGORY`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Output only. The display name of the category. | [optional] [readonly] 
**negative** | **bool** | Indicates if this option is being negatively targeted. | [optional] 
**targeting_option_id** | **str** | Required. The targeting_option_id field when targeting_type is &#x60;TARGETING_TYPE_CATEGORY&#x60;. | [optional] 

## Example

```python
from openapi_client.models.category_assigned_targeting_option_details import CategoryAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CategoryAssignedTargetingOptionDetails from a JSON string
category_assigned_targeting_option_details_instance = CategoryAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(CategoryAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
category_assigned_targeting_option_details_dict = category_assigned_targeting_option_details_instance.to_dict()
# create an instance of CategoryAssignedTargetingOptionDetails from a dict
category_assigned_targeting_option_details_from_dict = CategoryAssignedTargetingOptionDetails.from_dict(category_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


