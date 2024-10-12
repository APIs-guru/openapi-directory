# AppliedInventoriesParametersServicePlan


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_parameters** | **object** | The provider specific parameters needed to compute list of used service inventories | [optional] 

## Example

```python
from openapi_client.models.applied_inventories_parameters_service_plan import AppliedInventoriesParametersServicePlan

# TODO update the JSON string below
json = "{}"
# create an instance of AppliedInventoriesParametersServicePlan from a JSON string
applied_inventories_parameters_service_plan_instance = AppliedInventoriesParametersServicePlan.from_json(json)
# print the JSON string representation of the object
print(AppliedInventoriesParametersServicePlan.to_json())

# convert the object into a dict
applied_inventories_parameters_service_plan_dict = applied_inventories_parameters_service_plan_instance.to_dict()
# create an instance of AppliedInventoriesParametersServicePlan from a dict
applied_inventories_parameters_service_plan_from_dict = AppliedInventoriesParametersServicePlan.from_dict(applied_inventories_parameters_service_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


