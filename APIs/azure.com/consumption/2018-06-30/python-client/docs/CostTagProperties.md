# CostTagProperties

The properties of the cost tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Cost tag key. | [optional] 

## Example

```python
from openapi_client.models.cost_tag_properties import CostTagProperties

# TODO update the JSON string below
json = "{}"
# create an instance of CostTagProperties from a JSON string
cost_tag_properties_instance = CostTagProperties.from_json(json)
# print the JSON string representation of the object
print(CostTagProperties.to_json())

# convert the object into a dict
cost_tag_properties_dict = cost_tag_properties_instance.to_dict()
# create an instance of CostTagProperties from a dict
cost_tag_properties_from_dict = CostTagProperties.from_dict(cost_tag_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


