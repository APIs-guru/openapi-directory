# DerivedMetric

A message representing a derived metric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**denominator** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**numerator** | [**LocalizedString**](LocalizedString.md) |  | [optional] 

## Example

```python
from openapi_client.models.derived_metric import DerivedMetric

# TODO update the JSON string below
json = "{}"
# create an instance of DerivedMetric from a JSON string
derived_metric_instance = DerivedMetric.from_json(json)
# print the JSON string representation of the object
print(DerivedMetric.to_json())

# convert the object into a dict
derived_metric_dict = derived_metric_instance.to_dict()
# create an instance of DerivedMetric from a dict
derived_metric_from_dict = DerivedMetric.from_dict(derived_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


