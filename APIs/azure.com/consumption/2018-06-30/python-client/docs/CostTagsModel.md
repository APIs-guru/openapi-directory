# CostTagsModel

The cost tag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cost_tags** | [**List[CostTagProperties]**](CostTagProperties.md) | Cost tags. | [optional] 

## Example

```python
from openapi_client.models.cost_tags_model import CostTagsModel

# TODO update the JSON string below
json = "{}"
# create an instance of CostTagsModel from a JSON string
cost_tags_model_instance = CostTagsModel.from_json(json)
# print the JSON string representation of the object
print(CostTagsModel.to_json())

# convert the object into a dict
cost_tags_model_dict = cost_tags_model_instance.to_dict()
# create an instance of CostTagsModel from a dict
cost_tags_model_from_dict = CostTagsModel.from_dict(cost_tags_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


