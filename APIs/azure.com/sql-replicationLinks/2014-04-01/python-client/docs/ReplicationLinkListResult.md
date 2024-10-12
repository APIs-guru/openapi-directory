# ReplicationLinkListResult

Represents the response to a List database replication link request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[ReplicationLink]**](ReplicationLink.md) | The list of database replication links housed in the database. | [optional] 

## Example

```python
from openapi_client.models.replication_link_list_result import ReplicationLinkListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationLinkListResult from a JSON string
replication_link_list_result_instance = ReplicationLinkListResult.from_json(json)
# print the JSON string representation of the object
print(ReplicationLinkListResult.to_json())

# convert the object into a dict
replication_link_list_result_dict = replication_link_list_result_instance.to_dict()
# create an instance of ReplicationLinkListResult from a dict
replication_link_list_result_from_dict = ReplicationLinkListResult.from_dict(replication_link_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


