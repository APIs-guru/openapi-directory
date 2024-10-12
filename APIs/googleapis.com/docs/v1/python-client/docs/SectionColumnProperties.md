# SectionColumnProperties

Properties that apply to a section's column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**padding_end** | [**Dimension**](Dimension.md) |  | [optional] 
**width** | [**Dimension**](Dimension.md) |  | [optional] 

## Example

```python
from openapi_client.models.section_column_properties import SectionColumnProperties

# TODO update the JSON string below
json = "{}"
# create an instance of SectionColumnProperties from a JSON string
section_column_properties_instance = SectionColumnProperties.from_json(json)
# print the JSON string representation of the object
print(SectionColumnProperties.to_json())

# convert the object into a dict
section_column_properties_dict = section_column_properties_instance.to_dict()
# create an instance of SectionColumnProperties from a dict
section_column_properties_from_dict = SectionColumnProperties.from_dict(section_column_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


