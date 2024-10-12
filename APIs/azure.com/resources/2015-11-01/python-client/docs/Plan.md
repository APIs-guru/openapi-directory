# Plan

Plan for the resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Gets or sets the plan ID. | [optional] 
**product** | **str** | Gets or sets the offer ID. | [optional] 
**promotion_code** | **str** | Gets or sets the promotion code. | [optional] 
**publisher** | **str** | Gets or sets the publisher ID. | [optional] 

## Example

```python
from openapi_client.models.plan import Plan

# TODO update the JSON string below
json = "{}"
# create an instance of Plan from a JSON string
plan_instance = Plan.from_json(json)
# print the JSON string representation of the object
print(Plan.to_json())

# convert the object into a dict
plan_dict = plan_instance.to_dict()
# create an instance of Plan from a dict
plan_from_dict = Plan.from_dict(plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


