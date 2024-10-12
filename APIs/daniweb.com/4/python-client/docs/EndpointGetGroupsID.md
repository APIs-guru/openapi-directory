# EndpointGetGroupsID


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Group]**](Group.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_groups_id import EndpointGetGroupsID

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetGroupsID from a JSON string
endpoint_get_groups_id_instance = EndpointGetGroupsID.from_json(json)
# print the JSON string representation of the object
print(EndpointGetGroupsID.to_json())

# convert the object into a dict
endpoint_get_groups_id_dict = endpoint_get_groups_id_instance.to_dict()
# create an instance of EndpointGetGroupsID from a dict
endpoint_get_groups_id_from_dict = EndpointGetGroupsID.from_dict(endpoint_get_groups_id_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


