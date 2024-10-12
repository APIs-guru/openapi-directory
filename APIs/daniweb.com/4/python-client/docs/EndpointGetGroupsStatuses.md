# EndpointGetGroupsStatuses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointGetGroupsStatusesDataInner]**](EndpointGetGroupsStatusesDataInner.md) |  | [optional] 
**pagination** | [**ApiPagination**](ApiPagination.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_groups_statuses import EndpointGetGroupsStatuses

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetGroupsStatuses from a JSON string
endpoint_get_groups_statuses_instance = EndpointGetGroupsStatuses.from_json(json)
# print the JSON string representation of the object
print(EndpointGetGroupsStatuses.to_json())

# convert the object into a dict
endpoint_get_groups_statuses_dict = endpoint_get_groups_statuses_instance.to_dict()
# create an instance of EndpointGetGroupsStatuses from a dict
endpoint_get_groups_statuses_from_dict = EndpointGetGroupsStatuses.from_dict(endpoint_get_groups_statuses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


