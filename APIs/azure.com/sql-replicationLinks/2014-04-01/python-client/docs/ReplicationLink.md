# ReplicationLink

Represents a database replication link.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Location of the server that contains this firewall rule. | [optional] [readonly] 
**properties** | [**ReplicationLinkProperties**](ReplicationLinkProperties.md) |  | [optional] 
**type** | **str** | Type of resource this is. | [optional] [readonly] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 

## Example

```python
from openapi_client.models.replication_link import ReplicationLink

# TODO update the JSON string below
json = "{}"
# create an instance of ReplicationLink from a JSON string
replication_link_instance = ReplicationLink.from_json(json)
# print the JSON string representation of the object
print(ReplicationLink.to_json())

# convert the object into a dict
replication_link_dict = replication_link_instance.to_dict()
# create an instance of ReplicationLink from a dict
replication_link_from_dict = ReplicationLink.from_dict(replication_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


