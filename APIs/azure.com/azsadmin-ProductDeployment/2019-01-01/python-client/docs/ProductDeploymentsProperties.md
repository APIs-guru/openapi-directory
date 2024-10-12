# ProductDeploymentsProperties

Product deployment resource properties

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | [**DeploymentInfo**](DeploymentInfo.md) |  | [optional] 
**error** | [**ProductDeploymentsPropertiesError**](ProductDeploymentsPropertiesError.md) |  | [optional] 
**external_access** | [**ExternalAccessInfo**](ExternalAccessInfo.md) |  | [optional] 
**internal_state** | [**ProductDeploymentsInternalState**](ProductDeploymentsInternalState.md) |  | [optional] 
**last_successful_deployment** | [**DeploymentInfo**](DeploymentInfo.md) |  | [optional] 
**product_id** | **str** | The product identifier | [optional] 
**provisioning_state** | **str** | The provisioning state | [optional] 
**secret_rotation** | [**SecretRotationInfo**](SecretRotationInfo.md) |  | [optional] 
**status** | [**DeploymentStatus**](DeploymentStatus.md) |  | [optional] 
**subscription_id** | **str** | The product subscription identifier | [optional] 

## Example

```python
from openapi_client.models.product_deployments_properties import ProductDeploymentsProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeploymentsProperties from a JSON string
product_deployments_properties_instance = ProductDeploymentsProperties.from_json(json)
# print the JSON string representation of the object
print(ProductDeploymentsProperties.to_json())

# convert the object into a dict
product_deployments_properties_dict = product_deployments_properties_instance.to_dict()
# create an instance of ProductDeploymentsProperties from a dict
product_deployments_properties_from_dict = ProductDeploymentsProperties.from_dict(product_deployments_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


