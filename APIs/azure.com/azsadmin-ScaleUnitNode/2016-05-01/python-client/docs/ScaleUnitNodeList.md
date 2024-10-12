# ScaleUnitNodeList

A pageable list of scale unit nodes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to the next page. | [optional] 
**value** | [**List[ScaleUnitNode]**](ScaleUnitNode.md) | List of scale unit nodes. | [optional] 

## Example

```python
from openapi_client.models.scale_unit_node_list import ScaleUnitNodeList

# TODO update the JSON string below
json = "{}"
# create an instance of ScaleUnitNodeList from a JSON string
scale_unit_node_list_instance = ScaleUnitNodeList.from_json(json)
# print the JSON string representation of the object
print(ScaleUnitNodeList.to_json())

# convert the object into a dict
scale_unit_node_list_dict = scale_unit_node_list_instance.to_dict()
# create an instance of ScaleUnitNodeList from a dict
scale_unit_node_list_from_dict = ScaleUnitNodeList.from_dict(scale_unit_node_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


