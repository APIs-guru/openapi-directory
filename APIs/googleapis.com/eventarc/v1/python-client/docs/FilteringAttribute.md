# FilteringAttribute

A representation of the FilteringAttribute resource. Filtering attributes are per event type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | Output only. Attribute used for filtering the event type. | [optional] [readonly] 
**description** | **str** | Output only. Description of the purpose of the attribute. | [optional] [readonly] 
**path_pattern_supported** | **bool** | Output only. If true, the attribute accepts matching expressions in the Eventarc PathPattern format. | [optional] [readonly] 
**required** | **bool** | Output only. If true, the triggers for this provider should always specify a filter on these attributes. Trigger creation will fail otherwise. | [optional] [readonly] 

## Example

```python
from openapi_client.models.filtering_attribute import FilteringAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of FilteringAttribute from a JSON string
filtering_attribute_instance = FilteringAttribute.from_json(json)
# print the JSON string representation of the object
print(FilteringAttribute.to_json())

# convert the object into a dict
filtering_attribute_dict = filtering_attribute_instance.to_dict()
# create an instance of FilteringAttribute from a dict
filtering_attribute_from_dict = FilteringAttribute.from_dict(filtering_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


