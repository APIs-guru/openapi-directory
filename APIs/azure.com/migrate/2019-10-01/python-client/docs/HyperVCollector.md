# HyperVCollector


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**e_tag** | **str** |  | [optional] 
**id** | **str** |  | [optional] [readonly] 
**name** | **str** |  | [optional] [readonly] 
**properties** | [**CollectorProperties**](CollectorProperties.md) |  | [optional] 
**type** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.hyper_v_collector import HyperVCollector

# TODO update the JSON string below
json = "{}"
# create an instance of HyperVCollector from a JSON string
hyper_v_collector_instance = HyperVCollector.from_json(json)
# print the JSON string representation of the object
print(HyperVCollector.to_json())

# convert the object into a dict
hyper_v_collector_dict = hyper_v_collector_instance.to_dict()
# create an instance of HyperVCollector from a dict
hyper_v_collector_from_dict = HyperVCollector.from_dict(hyper_v_collector_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


