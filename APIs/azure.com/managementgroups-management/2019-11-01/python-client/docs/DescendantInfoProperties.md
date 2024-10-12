# DescendantInfoProperties

The generic properties of an descendant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | The friendly name of the management group. | [optional] 
**parent** | [**DescendantParentGroupInfo**](DescendantParentGroupInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.descendant_info_properties import DescendantInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of DescendantInfoProperties from a JSON string
descendant_info_properties_instance = DescendantInfoProperties.from_json(json)
# print the JSON string representation of the object
print(DescendantInfoProperties.to_json())

# convert the object into a dict
descendant_info_properties_dict = descendant_info_properties_instance.to_dict()
# create an instance of DescendantInfoProperties from a dict
descendant_info_properties_from_dict = DescendantInfoProperties.from_dict(descendant_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


