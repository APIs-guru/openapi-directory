# ProductDeploymentsPropertiesError

Error information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Error Code | [optional] 
**details** | **object** |  | [optional] 
**message** | **str** | Error Message | [optional] 

## Example

```python
from openapi_client.models.product_deployments_properties_error import ProductDeploymentsPropertiesError

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeploymentsPropertiesError from a JSON string
product_deployments_properties_error_instance = ProductDeploymentsPropertiesError.from_json(json)
# print the JSON string representation of the object
print(ProductDeploymentsPropertiesError.to_json())

# convert the object into a dict
product_deployments_properties_error_dict = product_deployments_properties_error_instance.to_dict()
# create an instance of ProductDeploymentsPropertiesError from a dict
product_deployments_properties_error_from_dict = ProductDeploymentsPropertiesError.from_dict(product_deployments_properties_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


