# AttributeMppingSource

The attribute mapping source.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**constant_value** | **str** | The constant value. | [optional] 
**dn_part** | **int** | The value for dn part. | [optional] 
**script_context** | **str** | The script context. | [optional] 
**source_attribute** | **List[str]** | The source attribute. | [optional] 

## Example

```python
from openapi_client.models.attribute_mpping_source import AttributeMppingSource

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeMppingSource from a JSON string
attribute_mpping_source_instance = AttributeMppingSource.from_json(json)
# print the JSON string representation of the object
print(AttributeMppingSource.to_json())

# convert the object into a dict
attribute_mpping_source_dict = attribute_mpping_source_instance.to_dict()
# create an instance of AttributeMppingSource from a dict
attribute_mpping_source_from_dict = AttributeMppingSource.from_dict(attribute_mpping_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


