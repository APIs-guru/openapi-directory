# ProductDeploymentsInternalState

Resource type internal state

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_access_role_assignment_id** | **str** | The current external access role assignment identifier | [optional] 
**intermediate_vault_id** | **str** | The intermediate vault resource identifier | [optional] 
**intermediate_vault_uri** | **str** | The intermediate vault Uri. | [optional] 
**job_id** | **str** | The latest deployment job identifier | [optional] 

## Example

```python
from openapi_client.models.product_deployments_internal_state import ProductDeploymentsInternalState

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeploymentsInternalState from a JSON string
product_deployments_internal_state_instance = ProductDeploymentsInternalState.from_json(json)
# print the JSON string representation of the object
print(ProductDeploymentsInternalState.to_json())

# convert the object into a dict
product_deployments_internal_state_dict = product_deployments_internal_state_instance.to_dict()
# create an instance of ProductDeploymentsInternalState from a dict
product_deployments_internal_state_from_dict = ProductDeploymentsInternalState.from_dict(product_deployments_internal_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


