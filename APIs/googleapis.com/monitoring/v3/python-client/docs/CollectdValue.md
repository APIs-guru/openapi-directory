# CollectdValue

A single data point from a collectd-based plugin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_name** | **str** | The data source for the collectd value. For example, there are two data sources for network measurements: \&quot;rx\&quot; and \&quot;tx\&quot;. | [optional] 
**data_source_type** | **str** | The type of measurement. | [optional] 
**value** | [**TypedValue**](TypedValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.collectd_value import CollectdValue

# TODO update the JSON string below
json = "{}"
# create an instance of CollectdValue from a JSON string
collectd_value_instance = CollectdValue.from_json(json)
# print the JSON string representation of the object
print(CollectdValue.to_json())

# convert the object into a dict
collectd_value_dict = collectd_value_instance.to_dict()
# create an instance of CollectdValue from a dict
collectd_value_from_dict = CollectdValue.from_dict(collectd_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


