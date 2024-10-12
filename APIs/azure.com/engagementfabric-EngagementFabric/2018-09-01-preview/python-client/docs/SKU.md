# SKU

The EngagementFabric SKU

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the SKU | 
**tier** | **str** | The price tier of the SKU | [optional] 

## Example

```python
from openapi_client.models.sku import SKU

# TODO update the JSON string below
json = "{}"
# create an instance of SKU from a JSON string
sku_instance = SKU.from_json(json)
# print the JSON string representation of the object
print(SKU.to_json())

# convert the object into a dict
sku_dict = sku_instance.to_dict()
# create an instance of SKU from a dict
sku_from_dict = SKU.from_dict(sku_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


