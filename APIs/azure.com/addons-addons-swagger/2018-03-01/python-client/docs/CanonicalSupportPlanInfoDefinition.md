# CanonicalSupportPlanInfoDefinition

Definition object with the properties of a canonical plan

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Flag to indicate if this support plan type is currently enabled for the subscription. | [optional] 
**one_time_charge** | **str** | The one time charge status for the subscription. | [optional] 
**support_plan_type** | **str** | Support plan type. | [optional] 

## Example

```python
from openapi_client.models.canonical_support_plan_info_definition import CanonicalSupportPlanInfoDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of CanonicalSupportPlanInfoDefinition from a JSON string
canonical_support_plan_info_definition_instance = CanonicalSupportPlanInfoDefinition.from_json(json)
# print the JSON string representation of the object
print(CanonicalSupportPlanInfoDefinition.to_json())

# convert the object into a dict
canonical_support_plan_info_definition_dict = canonical_support_plan_info_definition_instance.to_dict()
# create an instance of CanonicalSupportPlanInfoDefinition from a dict
canonical_support_plan_info_definition_from_dict = CanonicalSupportPlanInfoDefinition.from_dict(canonical_support_plan_info_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


