# SkuEnumerationForNewResourceResult

An object that represents enumerating SKUs for new resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ResourceSku]**](ResourceSku.md) | The collection of available SKUs for new resources | [optional] 

## Example

```python
from openapi_client.models.sku_enumeration_for_new_resource_result import SkuEnumerationForNewResourceResult

# TODO update the JSON string below
json = "{}"
# create an instance of SkuEnumerationForNewResourceResult from a JSON string
sku_enumeration_for_new_resource_result_instance = SkuEnumerationForNewResourceResult.from_json(json)
# print the JSON string representation of the object
print(SkuEnumerationForNewResourceResult.to_json())

# convert the object into a dict
sku_enumeration_for_new_resource_result_dict = sku_enumeration_for_new_resource_result_instance.to_dict()
# create an instance of SkuEnumerationForNewResourceResult from a dict
sku_enumeration_for_new_resource_result_from_dict = SkuEnumerationForNewResourceResult.from_dict(sku_enumeration_for_new_resource_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


