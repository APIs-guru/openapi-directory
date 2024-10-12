# AttributeMapping

The attribute mapping details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context_id** | **str** | The context Id. | [optional] 
**destination_attribute** | **str** | The destination attribute. | [optional] 
**mapping_source** | [**AttributeMppingSource**](AttributeMppingSource.md) |  | [optional] 
**type** | **str** | The attribute mapping type. | [optional] 

## Example

```python
from openapi_client.models.attribute_mapping import AttributeMapping

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeMapping from a JSON string
attribute_mapping_instance = AttributeMapping.from_json(json)
# print the JSON string representation of the object
print(AttributeMapping.to_json())

# convert the object into a dict
attribute_mapping_dict = attribute_mapping_instance.to_dict()
# create an instance of AttributeMapping from a dict
attribute_mapping_from_dict = AttributeMapping.from_dict(attribute_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


