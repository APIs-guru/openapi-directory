# AllowedConnectionsList

List of all possible traffic between Azure resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page. | [optional] [readonly] 
**value** | [**List[AllowedConnectionsResource]**](AllowedConnectionsResource.md) |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.allowed_connections_list import AllowedConnectionsList

# TODO update the JSON string below
json = "{}"
# create an instance of AllowedConnectionsList from a JSON string
allowed_connections_list_instance = AllowedConnectionsList.from_json(json)
# print the JSON string representation of the object
print(AllowedConnectionsList.to_json())

# convert the object into a dict
allowed_connections_list_dict = allowed_connections_list_instance.to_dict()
# create an instance of AllowedConnectionsList from a dict
allowed_connections_list_from_dict = AllowedConnectionsList.from_dict(allowed_connections_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


