# UpdateDeviceCellularSimsRequestSimsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apns** | [**List[UpdateDeviceCellularSimsRequestSimsInnerApnsInner]**](UpdateDeviceCellularSimsRequestSimsInnerApnsInner.md) | APN configurations. If empty, the default APN will be used. | [optional] [default to []]
**is_primary** | **bool** | If true, this SIM is used for boot. Must be true on single-sim devices. | [optional] [default to False]
**slot** | **str** | SIM slot being configured. Must be &#39;sim1&#39; on single-sim devices. | [optional] 

## Example

```python
from openapi_client.models.update_device_cellular_sims_request_sims_inner import UpdateDeviceCellularSimsRequestSimsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularSimsRequestSimsInner from a JSON string
update_device_cellular_sims_request_sims_inner_instance = UpdateDeviceCellularSimsRequestSimsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularSimsRequestSimsInner.to_json())

# convert the object into a dict
update_device_cellular_sims_request_sims_inner_dict = update_device_cellular_sims_request_sims_inner_instance.to_dict()
# create an instance of UpdateDeviceCellularSimsRequestSimsInner from a dict
update_device_cellular_sims_request_sims_inner_from_dict = UpdateDeviceCellularSimsRequestSimsInner.from_dict(update_device_cellular_sims_request_sims_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


