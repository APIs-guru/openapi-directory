# CustomMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_id** | **str** | Consumer ID | [optional] [readonly] 
**custom_field** | **bool** | This mapping represents a finder for a custom field | [optional] [readonly] 
**description** | **str** | Target Field description | [optional] [readonly] 
**id** | **str** | Target Field ID | [optional] [readonly] 
**key** | **str** | Target Field Key | [optional] [readonly] 
**label** | **str** | Target Field name to use as a label | [optional] [readonly] 
**required** | **bool** | Target Field Mapping is required | [optional] [readonly] 
**value** | **str** | Target Field Mapping value | [optional] 

## Example

```python
from openapi_client.models.custom_mapping import CustomMapping

# TODO update the JSON string below
json = "{}"
# create an instance of CustomMapping from a JSON string
custom_mapping_instance = CustomMapping.from_json(json)
# print the JSON string representation of the object
print(CustomMapping.to_json())

# convert the object into a dict
custom_mapping_dict = custom_mapping_instance.to_dict()
# create an instance of CustomMapping from a dict
custom_mapping_from_dict = CustomMapping.from_dict(custom_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


