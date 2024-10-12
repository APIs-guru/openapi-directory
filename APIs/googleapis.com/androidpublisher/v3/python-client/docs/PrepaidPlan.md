# PrepaidPlan

Information related to a prepaid plan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_extend_after_time** | **str** | If present, this is the time after which top up purchases are allowed for the prepaid plan. Will not be present for expired prepaid plans. | [optional] 

## Example

```python
from openapi_client.models.prepaid_plan import PrepaidPlan

# TODO update the JSON string below
json = "{}"
# create an instance of PrepaidPlan from a JSON string
prepaid_plan_instance = PrepaidPlan.from_json(json)
# print the JSON string representation of the object
print(PrepaidPlan.to_json())

# convert the object into a dict
prepaid_plan_dict = prepaid_plan_instance.to_dict()
# create an instance of PrepaidPlan from a dict
prepaid_plan_from_dict = PrepaidPlan.from_dict(prepaid_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


