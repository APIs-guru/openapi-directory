# UpdateDeviceCellularSimsRequestSimsInnerApnsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_ip_types** | **List[str]** | IP versions to support (permitted values include &#39;ipv4&#39;, &#39;ipv6&#39;). | 
**authentication** | [**UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication**](UpdateDeviceCellularSimsRequestSimsInnerApnsInnerAuthentication.md) |  | [optional] 
**name** | **str** | APN name. | 

## Example

```python
from openapi_client.models.update_device_cellular_sims_request_sims_inner_apns_inner import UpdateDeviceCellularSimsRequestSimsInnerApnsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDeviceCellularSimsRequestSimsInnerApnsInner from a JSON string
update_device_cellular_sims_request_sims_inner_apns_inner_instance = UpdateDeviceCellularSimsRequestSimsInnerApnsInner.from_json(json)
# print the JSON string representation of the object
print(UpdateDeviceCellularSimsRequestSimsInnerApnsInner.to_json())

# convert the object into a dict
update_device_cellular_sims_request_sims_inner_apns_inner_dict = update_device_cellular_sims_request_sims_inner_apns_inner_instance.to_dict()
# create an instance of UpdateDeviceCellularSimsRequestSimsInnerApnsInner from a dict
update_device_cellular_sims_request_sims_inner_apns_inner_from_dict = UpdateDeviceCellularSimsRequestSimsInnerApnsInner.from_dict(update_device_cellular_sims_request_sims_inner_apns_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


