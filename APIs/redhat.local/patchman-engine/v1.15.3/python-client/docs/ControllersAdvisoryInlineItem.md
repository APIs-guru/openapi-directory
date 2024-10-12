# ControllersAdvisoryInlineItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**advisory_type** | **int** |  | [optional] 
**applicable_systems** | **int** |  | [optional] 
**cve_count** | **int** |  | [optional] 
**description** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**public_date** | **str** |  | [optional] 
**severity** | **int** |  | [optional] 
**synopsis** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.controllers_advisory_inline_item import ControllersAdvisoryInlineItem

# TODO update the JSON string below
json = "{}"
# create an instance of ControllersAdvisoryInlineItem from a JSON string
controllers_advisory_inline_item_instance = ControllersAdvisoryInlineItem.from_json(json)
# print the JSON string representation of the object
print(ControllersAdvisoryInlineItem.to_json())

# convert the object into a dict
controllers_advisory_inline_item_dict = controllers_advisory_inline_item_instance.to_dict()
# create an instance of ControllersAdvisoryInlineItem from a dict
controllers_advisory_inline_item_from_dict = ControllersAdvisoryInlineItem.from_dict(controllers_advisory_inline_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


