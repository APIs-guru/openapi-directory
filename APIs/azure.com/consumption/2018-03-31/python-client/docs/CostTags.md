# CostTags

A cost tag resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CostTagProperties**](CostTagProperties.md) |  | [optional] 
**e_tag** | **str** | eTag of the resource. To handle concurrent update scenario, this field will be used to determine whether the user is updating the latest version or not. | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cost_tags import CostTags

# TODO update the JSON string below
json = "{}"
# create an instance of CostTags from a JSON string
cost_tags_instance = CostTags.from_json(json)
# print the JSON string representation of the object
print(CostTags.to_json())

# convert the object into a dict
cost_tags_dict = cost_tags_instance.to_dict()
# create an instance of CostTags from a dict
cost_tags_from_dict = CostTags.from_dict(cost_tags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


