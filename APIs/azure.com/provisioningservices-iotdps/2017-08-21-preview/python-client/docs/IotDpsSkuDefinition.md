# IotDpsSkuDefinition

SKU definition in terms of tier and units.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.iot_dps_sku_definition import IotDpsSkuDefinition

# TODO update the JSON string below
json = "{}"
# create an instance of IotDpsSkuDefinition from a JSON string
iot_dps_sku_definition_instance = IotDpsSkuDefinition.from_json(json)
# print the JSON string representation of the object
print(IotDpsSkuDefinition.to_json())

# convert the object into a dict
iot_dps_sku_definition_dict = iot_dps_sku_definition_instance.to_dict()
# create an instance of IotDpsSkuDefinition from a dict
iot_dps_sku_definition_from_dict = IotDpsSkuDefinition.from_dict(iot_dps_sku_definition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


