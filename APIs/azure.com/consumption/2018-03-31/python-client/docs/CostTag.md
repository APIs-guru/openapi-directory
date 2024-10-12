# CostTag

The cost tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Cost tag key. | [optional] 

## Example

```python
from openapi_client.models.cost_tag import CostTag

# TODO update the JSON string below
json = "{}"
# create an instance of CostTag from a JSON string
cost_tag_instance = CostTag.from_json(json)
# print the JSON string representation of the object
print(CostTag.to_json())

# convert the object into a dict
cost_tag_dict = cost_tag_instance.to_dict()
# create an instance of CostTag from a dict
cost_tag_from_dict = CostTag.from_dict(cost_tag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


