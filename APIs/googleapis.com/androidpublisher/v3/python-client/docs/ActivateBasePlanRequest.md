# ActivateBasePlanRequest

Request message for ActivateBasePlan.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_plan_id** | **str** | Required. The unique base plan ID of the base plan to activate. | [optional] 
**latency_tolerance** | **str** | Optional. The latency tolerance for the propagation of this product update. Defaults to latency-sensitive. | [optional] 
**package_name** | **str** | Required. The parent app (package name) of the base plan to activate. | [optional] 
**product_id** | **str** | Required. The parent subscription (ID) of the base plan to activate. | [optional] 

## Example

```python
from openapi_client.models.activate_base_plan_request import ActivateBasePlanRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ActivateBasePlanRequest from a JSON string
activate_base_plan_request_instance = ActivateBasePlanRequest.from_json(json)
# print the JSON string representation of the object
print(ActivateBasePlanRequest.to_json())

# convert the object into a dict
activate_base_plan_request_dict = activate_base_plan_request_instance.to_dict()
# create an instance of ActivateBasePlanRequest from a dict
activate_base_plan_request_from_dict = ActivateBasePlanRequest.from_dict(activate_base_plan_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


