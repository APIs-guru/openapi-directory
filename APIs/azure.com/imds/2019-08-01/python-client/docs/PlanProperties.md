# PlanProperties

This contains the data about the plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | This is the Plan ID. | [optional] 
**product** | **str** | This is the product of the image from the Marketplace. | [optional] 
**publisher** | **str** | This is the publisher ID. | [optional] 

## Example

```python
from openapi_client.models.plan_properties import PlanProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PlanProperties from a JSON string
plan_properties_instance = PlanProperties.from_json(json)
# print the JSON string representation of the object
print(PlanProperties.to_json())

# convert the object into a dict
plan_properties_dict = plan_properties_instance.to_dict()
# create an instance of PlanProperties from a dict
plan_properties_from_dict = PlanProperties.from_dict(plan_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


