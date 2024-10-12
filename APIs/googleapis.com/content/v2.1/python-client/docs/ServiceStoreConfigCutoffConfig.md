# ServiceStoreConfigCutoffConfig

Time local delivery ends for the day based on the local timezone of the store. `local_cutoff_time` and `store_close_offset_hours` are mutually exclusive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**local_cutoff_time** | [**ServiceStoreConfigCutoffConfigLocalCutoffTime**](ServiceStoreConfigCutoffConfigLocalCutoffTime.md) |  | [optional] 
**no_delivery_post_cutoff** | **bool** | Merchants can opt-out of showing n+1 day local delivery when they have a shipping service configured to n day local delivery. For example, if the shipping service defines same-day delivery, and it&#39;s past the cut-off, setting this field to &#x60;true&#x60; results in the calculated shipping service rate returning &#x60;NO_DELIVERY_POST_CUTOFF&#x60;. In the same example, setting this field to &#x60;false&#x60; results in the calculated shipping time being one day. This is only for local delivery. | [optional] 
**store_close_offset_hours** | **str** | Represents cutoff time as the number of hours before store closing. Mutually exclusive with other fields (hour and minute). | [optional] 

## Example

```python
from openapi_client.models.service_store_config_cutoff_config import ServiceStoreConfigCutoffConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceStoreConfigCutoffConfig from a JSON string
service_store_config_cutoff_config_instance = ServiceStoreConfigCutoffConfig.from_json(json)
# print the JSON string representation of the object
print(ServiceStoreConfigCutoffConfig.to_json())

# convert the object into a dict
service_store_config_cutoff_config_dict = service_store_config_cutoff_config_instance.to_dict()
# create an instance of ServiceStoreConfigCutoffConfig from a dict
service_store_config_cutoff_config_from_dict = ServiceStoreConfigCutoffConfig.from_dict(service_store_config_cutoff_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


