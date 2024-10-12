# AssetListAllOfValues

Asset attributes values, see the <a href='/concepts/asset-manager.html#focus-on-the-asset-values'>Focus on the asset values</a> section for more details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute_code** | [**List[AssetListAllOfValuesAttributeCode]**](AssetListAllOfValuesAttributeCode.md) |  | [optional] 

## Example

```python
from openapi_client.models.asset_list_all_of_values import AssetListAllOfValues

# TODO update the JSON string below
json = "{}"
# create an instance of AssetListAllOfValues from a JSON string
asset_list_all_of_values_instance = AssetListAllOfValues.from_json(json)
# print the JSON string representation of the object
print(AssetListAllOfValues.to_json())

# convert the object into a dict
asset_list_all_of_values_dict = asset_list_all_of_values_instance.to_dict()
# create an instance of AssetListAllOfValues from a dict
asset_list_all_of_values_from_dict = AssetListAllOfValues.from_dict(asset_list_all_of_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


