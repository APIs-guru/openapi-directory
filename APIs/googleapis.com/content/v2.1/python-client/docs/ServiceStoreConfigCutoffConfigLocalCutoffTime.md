# ServiceStoreConfigCutoffConfigLocalCutoffTime

Time in hours and minutes in the local timezone when local delivery ends.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hour** | **str** | Hour local delivery orders must be placed by to process the same day. | [optional] 
**minute** | **str** | Minute local delivery orders must be placed by to process the same day. | [optional] 

## Example

```python
from openapi_client.models.service_store_config_cutoff_config_local_cutoff_time import ServiceStoreConfigCutoffConfigLocalCutoffTime

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceStoreConfigCutoffConfigLocalCutoffTime from a JSON string
service_store_config_cutoff_config_local_cutoff_time_instance = ServiceStoreConfigCutoffConfigLocalCutoffTime.from_json(json)
# print the JSON string representation of the object
print(ServiceStoreConfigCutoffConfigLocalCutoffTime.to_json())

# convert the object into a dict
service_store_config_cutoff_config_local_cutoff_time_dict = service_store_config_cutoff_config_local_cutoff_time_instance.to_dict()
# create an instance of ServiceStoreConfigCutoffConfigLocalCutoffTime from a dict
service_store_config_cutoff_config_local_cutoff_time_from_dict = ServiceStoreConfigCutoffConfigLocalCutoffTime.from_dict(service_store_config_cutoff_config_local_cutoff_time_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


