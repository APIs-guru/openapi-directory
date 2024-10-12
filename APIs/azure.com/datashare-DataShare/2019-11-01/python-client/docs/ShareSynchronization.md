# ShareSynchronization

A ShareSynchronization data transfer object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consumer_email** | **str** | Email of the user who created the synchronization | [optional] 
**consumer_name** | **str** | Name of the user who created the synchronization | [optional] 
**consumer_tenant_name** | **str** | Tenant name of the consumer who created the synchronization | [optional] 
**duration_ms** | **int** | synchronization duration | [optional] 
**end_time** | **datetime** | End time of synchronization | [optional] 
**message** | **str** | message of synchronization | [optional] 
**start_time** | **datetime** | start time of synchronization | [optional] 
**status** | **str** | Raw Status | [optional] 
**synchronization_id** | **str** | Synchronization id | [optional] 
**synchronization_mode** | **str** | Synchronization mode | [optional] [readonly] 

## Example

```python
from openapi_client.models.share_synchronization import ShareSynchronization

# TODO update the JSON string below
json = "{}"
# create an instance of ShareSynchronization from a JSON string
share_synchronization_instance = ShareSynchronization.from_json(json)
# print the JSON string representation of the object
print(ShareSynchronization.to_json())

# convert the object into a dict
share_synchronization_dict = share_synchronization_instance.to_dict()
# create an instance of ShareSynchronization from a dict
share_synchronization_from_dict = ShareSynchronization.from_dict(share_synchronization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


