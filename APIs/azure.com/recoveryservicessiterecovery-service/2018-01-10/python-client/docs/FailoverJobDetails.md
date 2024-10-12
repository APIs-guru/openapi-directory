# FailoverJobDetails

This class represents the details for a failover job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protected_item_details** | [**List[FailoverReplicationProtectedItemDetails]**](FailoverReplicationProtectedItemDetails.md) | The test VM details. | [optional] 

## Example

```python
from openapi_client.models.failover_job_details import FailoverJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of FailoverJobDetails from a JSON string
failover_job_details_instance = FailoverJobDetails.from_json(json)
# print the JSON string representation of the object
print(FailoverJobDetails.to_json())

# convert the object into a dict
failover_job_details_dict = failover_job_details_instance.to_dict()
# create an instance of FailoverJobDetails from a dict
failover_job_details_from_dict = FailoverJobDetails.from_dict(failover_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


