# TopologyList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[TopologyResource]**](TopologyResource.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.topology_list import TopologyList

# TODO update the JSON string below
json = "{}"
# create an instance of TopologyList from a JSON string
topology_list_instance = TopologyList.from_json(json)
# print the JSON string representation of the object
print(TopologyList.to_json())

# convert the object into a dict
topology_list_dict = topology_list_instance.to_dict()
# create an instance of TopologyList from a dict
topology_list_from_dict = TopologyList.from_dict(topology_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


