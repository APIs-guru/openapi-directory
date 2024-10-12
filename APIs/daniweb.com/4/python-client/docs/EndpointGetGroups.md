# EndpointGetGroups


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Group]**](Group.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_groups import EndpointGetGroups

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetGroups from a JSON string
endpoint_get_groups_instance = EndpointGetGroups.from_json(json)
# print the JSON string representation of the object
print(EndpointGetGroups.to_json())

# convert the object into a dict
endpoint_get_groups_dict = endpoint_get_groups_instance.to_dict()
# create an instance of EndpointGetGroups from a dict
endpoint_get_groups_from_dict = EndpointGetGroups.from_dict(endpoint_get_groups_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


