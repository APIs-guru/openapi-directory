# SKUCapability

Features/user capabilities associated with the sku

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Capability/Feature ID | [optional] 
**value** | **str** | Details about the feature/capability | [optional] 

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


