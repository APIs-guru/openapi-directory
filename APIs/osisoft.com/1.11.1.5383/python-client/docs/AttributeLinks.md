# AttributeLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **str** |  | [optional] 
**categories** | **str** |  | [optional] 
**element** | **str** |  | [optional] 
**end_value** | **str** |  | [optional] 
**enumeration_set** | **str** |  | [optional] 
**enumeration_values** | **str** |  | [optional] 
**event_frame** | **str** |  | [optional] 
**interpolated_data** | **str** |  | [optional] 
**parent** | **str** |  | [optional] 
**plot_data** | **str** |  | [optional] 
**point** | **str** |  | [optional] 
**recorded_data** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 
**summary_data** | **str** |  | [optional] 
**template** | **str** |  | [optional] 
**trait** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.attribute_links import AttributeLinks

# TODO update the JSON string below
json = "{}"
# create an instance of AttributeLinks from a JSON string
attribute_links_instance = AttributeLinks.from_json(json)
# print the JSON string representation of the object
print(AttributeLinks.to_json())

# convert the object into a dict
attribute_links_dict = attribute_links_instance.to_dict()
# create an instance of AttributeLinks from a dict
attribute_links_from_dict = AttributeLinks.from_dict(attribute_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


