# CanonicalSupportPlanProperties

The properties of the Canonical support plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | The provisioning state of the resource. | [optional] 

## Example

```python
from openapi_client.models.canonical_support_plan_properties import CanonicalSupportPlanProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CanonicalSupportPlanProperties from a JSON string
canonical_support_plan_properties_instance = CanonicalSupportPlanProperties.from_json(json)
# print the JSON string representation of the object
print(CanonicalSupportPlanProperties.to_json())

# convert the object into a dict
canonical_support_plan_properties_dict = canonical_support_plan_properties_instance.to_dict()
# create an instance of CanonicalSupportPlanProperties from a dict
canonical_support_plan_properties_from_dict = CanonicalSupportPlanProperties.from_dict(canonical_support_plan_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


