# DataLeakPreventionChange

A change in the object's data leak prevention status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of Data Leak Prevention (DLP) change. | [optional] 

## Example

```python
from openapi_client.models.data_leak_prevention_change import DataLeakPreventionChange

# TODO update the JSON string below
json = "{}"
# create an instance of DataLeakPreventionChange from a JSON string
data_leak_prevention_change_instance = DataLeakPreventionChange.from_json(json)
# print the JSON string representation of the object
print(DataLeakPreventionChange.to_json())

# convert the object into a dict
data_leak_prevention_change_dict = data_leak_prevention_change_instance.to_dict()
# create an instance of DataLeakPreventionChange from a dict
data_leak_prevention_change_from_dict = DataLeakPreventionChange.from_dict(data_leak_prevention_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


