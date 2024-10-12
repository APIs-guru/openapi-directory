# TestFailoverJobDetails

This class represents the details for a test failover job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** | The test failover comments. | [optional] 
**network_friendly_name** | **str** | The test network friendly name. | [optional] 
**network_name** | **str** | The test network name. | [optional] 
**network_type** | **str** | The test network type (see TestFailoverInput enum for possible values). | [optional] 
**protected_item_details** | [**List[FailoverReplicationProtectedItemDetails]**](FailoverReplicationProtectedItemDetails.md) | The test VM details. | [optional] 
**test_failover_status** | **str** | The test failover status. | [optional] 

## Example

```python
from openapi_client.models.test_failover_job_details import TestFailoverJobDetails

# TODO update the JSON string below
json = "{}"
# create an instance of TestFailoverJobDetails from a JSON string
test_failover_job_details_instance = TestFailoverJobDetails.from_json(json)
# print the JSON string representation of the object
print(TestFailoverJobDetails.to_json())

# convert the object into a dict
test_failover_job_details_dict = test_failover_job_details_instance.to_dict()
# create an instance of TestFailoverJobDetails from a dict
test_failover_job_details_from_dict = TestFailoverJobDetails.from_dict(test_failover_job_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


