# DeactivateBasePlanRequest

Request message for DeactivateBasePlan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_plan_id** | **str** | Required. The unique base plan ID of the base plan to deactivate. | [optional] 
**latency_tolerance** | **str** | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. | [optional] 
**package_name** | **str** | Required. The parent app (package name) of the base plan to deactivate. | [optional] 
**product_id** | **str** | Required. The parent subscription (ID) of the base plan to deactivate. | [optional] 

## Example

```python
from openapi_client.models.deactivate_base_plan_request import DeactivateBasePlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeactivateBasePlanRequest from a JSON string
deactivate_base_plan_request_instance = DeactivateBasePlanRequest.from_json(json)
# print the JSON string representation of the object
print(DeactivateBasePlanRequest.to_json())

# convert the object into a dict
deactivate_base_plan_request_dict = deactivate_base_plan_request_instance.to_dict()
# create an instance of DeactivateBasePlanRequest from a dict
deactivate_base_plan_request_from_dict = DeactivateBasePlanRequest.from_dict(deactivate_base_plan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


