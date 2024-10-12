# BuildsListToolsets200ResponseNodeInner

The Node version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **bool** | If the Node version is default for AppCenter | [optional] 
**name** | **str** | The version name | [optional] 

## Example

```python
from openapi_client.models.builds_list_toolsets200_response_node_inner import BuildsListToolsets200ResponseNodeInner

# TODO update the JSON string below
json = "{}"
# create an instance of BuildsListToolsets200ResponseNodeInner from a JSON string
builds_list_toolsets200_response_node_inner_instance = BuildsListToolsets200ResponseNodeInner.from_json(json)
# print the JSON string representation of the object
print(BuildsListToolsets200ResponseNodeInner.to_json())

# convert the object into a dict
builds_list_toolsets200_response_node_inner_dict = builds_list_toolsets200_response_node_inner_instance.to_dict()
# create an instance of BuildsListToolsets200ResponseNodeInner from a dict
builds_list_toolsets200_response_node_inner_from_dict = BuildsListToolsets200ResponseNodeInner.from_dict(builds_list_toolsets200_response_node_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


