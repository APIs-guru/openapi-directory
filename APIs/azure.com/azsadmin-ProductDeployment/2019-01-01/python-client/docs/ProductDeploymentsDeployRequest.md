# ProductDeploymentsDeployRequest

Parameters for deploy action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **str** | Deployment parameters, value in JToken | [optional] 
**version** | **str** | Generic Version object | [optional] 

## Example

```python
from openapi_client.models.product_deployments_deploy_request import ProductDeploymentsDeployRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeploymentsDeployRequest from a JSON string
product_deployments_deploy_request_instance = ProductDeploymentsDeployRequest.from_json(json)
# print the JSON string representation of the object
print(ProductDeploymentsDeployRequest.to_json())

# convert the object into a dict
product_deployments_deploy_request_dict = product_deployments_deploy_request_instance.to_dict()
# create an instance of ProductDeploymentsDeployRequest from a dict
product_deployments_deploy_request_from_dict = ProductDeploymentsDeployRequest.from_dict(product_deployments_deploy_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


