# IotDpsSkuDefinitionListResult

List of available SKUs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | [**List[IotDpsSkuDefinition]**](IotDpsSkuDefinition.md) | The list of SKUs | [optional] 

## Example

```python
from openapi_client.models.iot_dps_sku_definition_list_result import IotDpsSkuDefinitionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IotDpsSkuDefinitionListResult from a JSON string
iot_dps_sku_definition_list_result_instance = IotDpsSkuDefinitionListResult.from_json(json)
# print the JSON string representation of the object
print(IotDpsSkuDefinitionListResult.to_json())

# convert the object into a dict
iot_dps_sku_definition_list_result_dict = iot_dps_sku_definition_list_result_instance.to_dict()
# create an instance of IotDpsSkuDefinitionListResult from a dict
iot_dps_sku_definition_list_result_from_dict = IotDpsSkuDefinitionListResult.from_dict(iot_dps_sku_definition_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


