# ProductDeploymentResourceEntity

Product deployment entity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** | entity tag | [optional] 
**properties** | [**ProductDeploymentsProperties**](ProductDeploymentsProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.product_deployment_resource_entity import ProductDeploymentResourceEntity

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeploymentResourceEntity from a JSON string
product_deployment_resource_entity_instance = ProductDeploymentResourceEntity.from_json(json)
# print the JSON string representation of the object
print(ProductDeploymentResourceEntity.to_json())

# convert the object into a dict
product_deployment_resource_entity_dict = product_deployment_resource_entity_instance.to_dict()
# create an instance of ProductDeploymentResourceEntity from a dict
product_deployment_resource_entity_from_dict = ProductDeploymentResourceEntity.from_dict(product_deployment_resource_entity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


