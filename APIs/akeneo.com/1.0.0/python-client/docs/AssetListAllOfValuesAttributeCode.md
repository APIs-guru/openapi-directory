# AssetListAllOfValuesAttributeCode


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**channel** | **str** | Channel code of the asset attribute value | [optional] 
**data** | **object** | Asset attribute value. See &lt;a href&#x3D;&#39;/concepts/asset-manager.html#the-data-format&#39;&gt;the &#x60;data&#x60; format&lt;/a&gt; section for more details. | [optional] 
**locale** | **str** | Locale code of the asset attribute value | [optional] 

## Example

```python
from openapi_client.models.asset_list_all_of_values_attribute_code import AssetListAllOfValuesAttributeCode

# TODO update the JSON string below
json = "{}"
# create an instance of AssetListAllOfValuesAttributeCode from a JSON string
asset_list_all_of_values_attribute_code_instance = AssetListAllOfValuesAttributeCode.from_json(json)
# print the JSON string representation of the object
print(AssetListAllOfValuesAttributeCode.to_json())

# convert the object into a dict
asset_list_all_of_values_attribute_code_dict = asset_list_all_of_values_attribute_code_instance.to_dict()
# create an instance of AssetListAllOfValuesAttributeCode from a dict
asset_list_all_of_values_attribute_code_from_dict = AssetListAllOfValuesAttributeCode.from_dict(asset_list_all_of_values_attribute_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


