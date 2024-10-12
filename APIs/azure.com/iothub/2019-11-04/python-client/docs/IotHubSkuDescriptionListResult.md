# IotHubSkuDescriptionListResult

The JSON-serialized array of IotHubSkuDescription objects with a next link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The next link. | [optional] [readonly] 
**value** | [**List[IotHubSkuDescription]**](IotHubSkuDescription.md) | The array of IotHubSkuDescription. | [optional] 

## Example

```python
from openapi_client.models.iot_hub_sku_description_list_result import IotHubSkuDescriptionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of IotHubSkuDescriptionListResult from a JSON string
iot_hub_sku_description_list_result_instance = IotHubSkuDescriptionListResult.from_json(json)
# print the JSON string representation of the object
print(IotHubSkuDescriptionListResult.to_json())

# convert the object into a dict
iot_hub_sku_description_list_result_dict = iot_hub_sku_description_list_result_instance.to_dict()
# create an instance of IotHubSkuDescriptionListResult from a dict
iot_hub_sku_description_list_result_from_dict = IotHubSkuDescriptionListResult.from_dict(iot_hub_sku_description_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


