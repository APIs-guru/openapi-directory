# CollectdPayload

A collection of data points sent from a collectd-based plugin. See the collectd documentation for more information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end time of the interval. | [optional] 
**metadata** | [**Dict[str, TypedValue]**](TypedValue.md) | The measurement metadata. Example: \&quot;process_id\&quot; -&gt; 12345 | [optional] 
**plugin** | **str** | The name of the plugin. Example: \&quot;disk\&quot;. | [optional] 
**plugin_instance** | **str** | The instance name of the plugin Example: \&quot;hdcl\&quot;. | [optional] 
**start_time** | **str** | The start time of the interval. | [optional] 
**type** | **str** | The measurement type. Example: \&quot;memory\&quot;. | [optional] 
**type_instance** | **str** | The measurement type instance. Example: \&quot;used\&quot;. | [optional] 
**values** | [**List[CollectdValue]**](CollectdValue.md) | The measured values during this time interval. Each value must have a different data_source_name. | [optional] 

## Example

```python
from openapi_client.models.collectd_payload import CollectdPayload

# TODO update the JSON string below
json = "{}"
# create an instance of CollectdPayload from a JSON string
collectd_payload_instance = CollectdPayload.from_json(json)
# print the JSON string representation of the object
print(CollectdPayload.to_json())

# convert the object into a dict
collectd_payload_dict = collectd_payload_instance.to_dict()
# create an instance of CollectdPayload from a dict
collectd_payload_from_dict = CollectdPayload.from_dict(collectd_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


