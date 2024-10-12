# ProductDeploymentsBootStrapRequest

Parameters for bootstrap action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | Generic Version object | [optional] 

## Example

```python
from openapi_client.models.product_deployments_boot_strap_request import ProductDeploymentsBootStrapRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ProductDeploymentsBootStrapRequest from a JSON string
product_deployments_boot_strap_request_instance = ProductDeploymentsBootStrapRequest.from_json(json)
# print the JSON string representation of the object
print(ProductDeploymentsBootStrapRequest.to_json())

# convert the object into a dict
product_deployments_boot_strap_request_dict = product_deployments_boot_strap_request_instance.to_dict()
# create an instance of ProductDeploymentsBootStrapRequest from a dict
product_deployments_boot_strap_request_from_dict = ProductDeploymentsBootStrapRequest.from_dict(product_deployments_boot_strap_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


