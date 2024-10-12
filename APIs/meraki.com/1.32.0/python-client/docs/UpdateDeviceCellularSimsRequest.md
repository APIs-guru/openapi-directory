# UpdateDeviceCellularSimsRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sim_failover** | [**UpdateDeviceCellularSimsRequestSimFailover**](UpdateDeviceCellularSimsRequestSimFailover.md) |  | [optional] 
**sims** | [**List[UpdateDeviceCellularSimsRequestSimsInner]**](UpdateDeviceCellularSimsRequestSimsInner.md) | List of SIMs. If a SIM was previously configured and not specified in this request, it will remain unchanged. | [optional] 

## Example

```python
from openapi_client.models.update_device_cellular_sims_request import UpdateDeviceCellularSimsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularSimsRequest from a JSON string
update_device_cellular_sims_request_instance = UpdateDeviceCellularSimsRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularSimsRequest.to_json())

# convert the object into a dict
update_device_cellular_sims_request_dict = update_device_cellular_sims_request_instance.to_dict()
# create an instance of UpdateDeviceCellularSimsRequest from a dict
update_device_cellular_sims_request_from_dict = UpdateDeviceCellularSimsRequest.from_dict(update_device_cellular_sims_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


