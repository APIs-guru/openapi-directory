# ProductDeploymentsUnlockRequest

Parameters for bootstrap action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**duration** | **str** | Duration in TimeSpan format(Define which ISO format) | [optional] 

## Example

```python
from openapi_client.models.product_deployments_unlock_request import ProductDeploymentsUnlockRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeploymentsUnlockRequest from a JSON string
product_deployments_unlock_request_instance = ProductDeploymentsUnlockRequest.from_json(json)
# print the JSON string representation of the object
print(ProductDeploymentsUnlockRequest.to_json())

# convert the object into a dict
product_deployments_unlock_request_dict = product_deployments_unlock_request_instance.to_dict()
# create an instance of ProductDeploymentsUnlockRequest from a dict
product_deployments_unlock_request_from_dict = ProductDeploymentsUnlockRequest.from_dict(product_deployments_unlock_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


