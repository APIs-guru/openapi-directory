# ProductDeploymentsList

List of Product Deployments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[ProductDeploymentResourceEntity]**](ProductDeploymentResourceEntity.md) | List of Product Deployments. | [optional] 

## Example

```python
from openapi_client.models.product_deployments_list import ProductDeploymentsList

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeploymentsList from a JSON string
product_deployments_list_instance = ProductDeploymentsList.from_json(json)
# print the JSON string representation of the object
print(ProductDeploymentsList.to_json())

# convert the object into a dict
product_deployments_list_dict = product_deployments_list_instance.to_dict()
# create an instance of ProductDeploymentsList from a dict
product_deployments_list_from_dict = ProductDeploymentsList.from_dict(product_deployments_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


