# HyperVCollectorList

List of Hyper-V collectors.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[HyperVCollector]**](HyperVCollector.md) | List of Hyper-V collectors. | [optional] 

## Example

```python
from openapi_client.models.hyper_v_collector_list import HyperVCollectorList

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVCollectorList from a JSON string
hyper_v_collector_list_instance = HyperVCollectorList.from_json(json)
# print the JSON string representation of the object
print(HyperVCollectorList.to_json())

# convert the object into a dict
hyper_v_collector_list_dict = hyper_v_collector_list_instance.to_dict()
# create an instance of HyperVCollectorList from a dict
hyper_v_collector_list_from_dict = HyperVCollectorList.from_dict(hyper_v_collector_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


