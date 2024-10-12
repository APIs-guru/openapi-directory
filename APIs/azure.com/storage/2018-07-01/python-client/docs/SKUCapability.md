# SKUCapability

The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of capability, The capability information in the specified SKU, including file encryption, network ACLs, change notification, etc. | [optional] [readonly] 
**value** | **str** | A string value to indicate states of given capability. Possibly &#39;true&#39; or &#39;false&#39;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sku_capability import SKUCapability

# TODO update the JSON string below
json = "{}"
# create an instance of SKUCapability from a JSON string
sku_capability_instance = SKUCapability.from_json(json)
# print the JSON string representation of the object
print(SKUCapability.to_json())

# convert the object into a dict
sku_capability_dict = sku_capability_instance.to_dict()
# create an instance of SKUCapability from a dict
sku_capability_from_dict = SKUCapability.from_dict(sku_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


