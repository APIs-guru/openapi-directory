# EndpointGetGroupsIDStatuses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EndpointGetGroupsIDStatusesDataInner]**](EndpointGetGroupsIDStatusesDataInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.endpoint_get_groups_id_statuses import EndpointGetGroupsIDStatuses

# TODO update the JSON string below
json = "{}"
# create an instance of EndpointGetGroupsIDStatuses from a JSON string
endpoint_get_groups_id_statuses_instance = EndpointGetGroupsIDStatuses.from_json(json)
# print the JSON string representation of the object
print(EndpointGetGroupsIDStatuses.to_json())

# convert the object into a dict
endpoint_get_groups_id_statuses_dict = endpoint_get_groups_id_statuses_instance.to_dict()
# create an instance of EndpointGetGroupsIDStatuses from a dict
endpoint_get_groups_id_statuses_from_dict = EndpointGetGroupsIDStatuses.from_dict(endpoint_get_groups_id_statuses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


