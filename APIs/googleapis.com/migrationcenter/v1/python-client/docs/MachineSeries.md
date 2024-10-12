# MachineSeries

A Compute Engine machine series.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | Code to identify a Compute Engine machine series. Consult https://cloud.google.com/compute/docs/machine-resource#machine_type_comparison for more details on the available series. | [optional] 

## Example

```python
from openapi_client.models.machine_series import MachineSeries

# TODO update the JSON string below
json = "{}"
# create an instance of MachineSeries from a JSON string
machine_series_instance = MachineSeries.from_json(json)
# print the JSON string representation of the object
print(MachineSeries.to_json())

# convert the object into a dict
machine_series_dict = machine_series_instance.to_dict()
# create an instance of MachineSeries from a dict
machine_series_from_dict = MachineSeries.from_dict(machine_series_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


