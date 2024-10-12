# Section

A section of the price list containing one or more items.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[Item]**](Item.md) | Items that are contained within this section of the price list. | [optional] 
**labels** | [**List[Label]**](Label.md) | Required. Language-tagged labels for the section. We recommend that section names and descriptions be 140 characters or less. At least one set of labels is required. | [optional] 
**section_id** | **str** | Required. ID for the section. Price list, section, and item IDs cannot be duplicated within this Location. | [optional] 
**section_type** | **str** | Optional. Type of the current price list section. Default value is FOOD. | [optional] 

## Example

```python
from openapi_client.models.section import Section

# TODO update the JSON string below
json = "{}"
# create an instance of Section from a JSON string
section_instance = Section.from_json(json)
# print the JSON string representation of the object
print(Section.to_json())

# convert the object into a dict
section_dict = section_instance.to_dict()
# create an instance of Section from a dict
section_from_dict = Section.from_dict(section_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


