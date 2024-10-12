# UpdateDeviceCellularSimsRequestSimFailover

SIM Failover settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Failover to secondary SIM (optional) | [optional] 

## Example

```python
from openapi_client.models.update_device_cellular_sims_request_sim_failover import UpdateDeviceCellularSimsRequestSimFailover

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularSimsRequestSimFailover from a JSON string
update_device_cellular_sims_request_sim_failover_instance = UpdateDeviceCellularSimsRequestSimFailover.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularSimsRequestSimFailover.to_json())

# convert the object into a dict
update_device_cellular_sims_request_sim_failover_dict = update_device_cellular_sims_request_sim_failover_instance.to_dict()
# create an instance of UpdateDeviceCellularSimsRequestSimFailover from a dict
update_device_cellular_sims_request_sim_failover_from_dict = UpdateDeviceCellularSimsRequestSimFailover.from_dict(update_device_cellular_sims_request_sim_failover_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


