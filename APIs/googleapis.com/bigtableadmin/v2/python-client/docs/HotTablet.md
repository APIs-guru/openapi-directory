# HotTablet

A tablet is a defined by a start and end key and is explained in https://cloud.google.com/bigtable/docs/overview#architecture and https://cloud.google.com/bigtable/docs/performance#optimization. A Hot tablet is a tablet that exhibits high average cpu usage during the time interval from start time to end time.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_key** | **str** | Tablet End Key (inclusive). | [optional] 
**end_time** | **str** | Output only. The end time of the hot tablet. | [optional] [readonly] 
**name** | **str** | The unique name of the hot tablet. Values are of the form &#x60;projects/{project}/instances/{instance}/clusters/{cluster}/hotTablets/[a-zA-Z0-9_-]*&#x60;. | [optional] 
**node_cpu_usage_percent** | **float** | Output only. The average CPU usage spent by a node on this tablet over the start_time to end_time time range. The percentage is the amount of CPU used by the node to serve the tablet, from 0% (tablet was not interacted with) to 100% (the node spent all cycles serving the hot tablet). | [optional] [readonly] 
**start_key** | **str** | Tablet Start Key (inclusive). | [optional] 
**start_time** | **str** | Output only. The start time of the hot tablet. | [optional] [readonly] 
**table_name** | **str** | Name of the table that contains the tablet. Values are of the form &#x60;projects/{project}/instances/{instance}/tables/_a-zA-Z0-9*&#x60;. | [optional] 

## Example

```python
from openapi_client.models.hot_tablet import HotTablet

# TODO update the JSON string below
json = "{}"
# create an instance of HotTablet from a JSON string
hot_tablet_instance = HotTablet.from_json(json)
# print the JSON string representation of the object
print(HotTablet.to_json())

# convert the object into a dict
hot_tablet_dict = hot_tablet_instance.to_dict()
# create an instance of HotTablet from a dict
hot_tablet_from_dict = HotTablet.from_dict(hot_tablet_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


