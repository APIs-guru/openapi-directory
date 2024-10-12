# PlanAcquisitionList

List of acquired plans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[PlanAcquisition]**](PlanAcquisition.md) | List of acquired plans. | [optional] 

## Example

```python
from openapi_client.models.plan_acquisition_list import PlanAcquisitionList

# TODO update the JSON string below
json = "{}"
# create an instance of PlanAcquisitionList from a JSON string
plan_acquisition_list_instance = PlanAcquisitionList.from_json(json)
# print the JSON string representation of the object
print(PlanAcquisitionList.to_json())

# convert the object into a dict
plan_acquisition_list_dict = plan_acquisition_list_instance.to_dict()
# create an instance of PlanAcquisitionList from a dict
plan_acquisition_list_from_dict = PlanAcquisitionList.from_dict(plan_acquisition_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


