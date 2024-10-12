# FailoverPolicy

The failover policy for a given region of a database account.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**failover_priority** | **int** | The failover priority of the region. A failover priority of 0 indicates a write region. The maximum value for a failover priority &#x3D; (total number of regions - 1). Failover priority values must be unique for each of the regions in which the database account exists. | [optional] 
**id** | **str** | The unique identifier of the region in which the database account replicates to. Example: &amp;lt;accountName&amp;gt;-&amp;lt;locationName&amp;gt;. | [optional] [readonly] 
**location_name** | **str** | The name of the region in which the database account exists. | [optional] 

## Example

```python
from openapi_client.models.failover_policy import FailoverPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverPolicy from a JSON string
failover_policy_instance = FailoverPolicy.from_json(json)
# print the JSON string representation of the object
print(FailoverPolicy.to_json())

# convert the object into a dict
failover_policy_dict = failover_policy_instance.to_dict()
# create an instance of FailoverPolicy from a dict
failover_policy_from_dict = FailoverPolicy.from_dict(failover_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


