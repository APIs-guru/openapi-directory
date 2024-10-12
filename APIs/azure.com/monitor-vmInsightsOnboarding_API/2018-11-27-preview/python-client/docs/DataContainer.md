# DataContainer

Information about a container with data for a given resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace** | [**WorkspaceInfo**](WorkspaceInfo.md) |  | 

## Example

```python
from openapi_client.models.data_container import DataContainer

# TODO update the JSON string below
json = "{}"
# create an instance of DataContainer from a JSON string
data_container_instance = DataContainer.from_json(json)
# print the JSON string representation of the object
print(DataContainer.to_json())

# convert the object into a dict
data_container_dict = data_container_instance.to_dict()
# create an instance of DataContainer from a dict
data_container_from_dict = DataContainer.from_dict(data_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


