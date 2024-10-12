# ApplicationGatewaySku

SKU of application gateway

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**capacity** | **int** | Capacity (instance count) of application gateway | [optional] 
**name** | **str** | Name of application gateway SKU | [optional] 
**tier** | **str** | Tier of application gateway | [optional] 

## Example

```python
from openapi_client.models.application_gateway_sku import ApplicationGatewaySku

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationGatewaySku from a JSON string
application_gateway_sku_instance = ApplicationGatewaySku.from_json(json)
# print the JSON string representation of the object
print(ApplicationGatewaySku.to_json())

# convert the object into a dict
application_gateway_sku_dict = application_gateway_sku_instance.to_dict()
# create an instance of ApplicationGatewaySku from a dict
application_gateway_sku_from_dict = ApplicationGatewaySku.from_dict(application_gateway_sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


