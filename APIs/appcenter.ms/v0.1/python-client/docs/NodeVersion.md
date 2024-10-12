# NodeVersion

The Node version

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current** | **bool** | If the Node version is default for AppCenter | [optional] 
**name** | **str** | The version name | [optional] 

## Example

```python
from openapi_client.models.node_version import NodeVersion

# TODO update the JSON string below
json = "{}"
# create an instance of NodeVersion from a JSON string
node_version_instance = NodeVersion.from_json(json)
# print the JSON string representation of the object
print(NodeVersion.to_json())

# convert the object into a dict
node_version_dict = node_version_instance.to_dict()
# create an instance of NodeVersion from a dict
node_version_from_dict = NodeVersion.from_dict(node_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


