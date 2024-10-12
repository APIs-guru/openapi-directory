# Cost

A cost item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The identifier of the resource. | [optional] 
**location** | **str** | The location of the resource. | [optional] 
**name** | **str** | The name of the resource. | [optional] 
**properties** | [**CostProperties**](CostProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | The tags of the resource. | [optional] 
**type** | **str** | The type of the resource. | [optional] 

## Example

```python
from openapi_client.models.cost import Cost

# TODO update the JSON string below
json = "{}"
# create an instance of Cost from a JSON string
cost_instance = Cost.from_json(json)
# print the JSON string representation of the object
print(Cost.to_json())

# convert the object into a dict
cost_dict = cost_instance.to_dict()
# create an instance of Cost from a dict
cost_from_dict = Cost.from_dict(cost_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


