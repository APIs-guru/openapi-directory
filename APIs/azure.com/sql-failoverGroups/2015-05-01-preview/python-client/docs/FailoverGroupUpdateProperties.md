# FailoverGroupUpdateProperties

Properties of a failover group update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**databases** | **List[str]** | List of databases in the failover group. | [optional] 
**read_only_endpoint** | [**FailoverGroupReadOnlyEndpoint**](FailoverGroupReadOnlyEndpoint.md) |  | [optional] 
**read_write_endpoint** | [**FailoverGroupReadWriteEndpoint**](FailoverGroupReadWriteEndpoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.failover_group_update_properties import FailoverGroupUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverGroupUpdateProperties from a JSON string
failover_group_update_properties_instance = FailoverGroupUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(FailoverGroupUpdateProperties.to_json())

# convert the object into a dict
failover_group_update_properties_dict = failover_group_update_properties_instance.to_dict()
# create an instance of FailoverGroupUpdateProperties from a dict
failover_group_update_properties_from_dict = FailoverGroupUpdateProperties.from_dict(failover_group_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


