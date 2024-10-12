# ThreeTierWorkload

The body of three tier workload

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_layer** | [**APILayerServer**](APILayerServer.md) |  | [optional] 
**backend** | [**BackendServer**](BackendServer.md) |  | [optional] 
**endpoint** | **str** | Output only. the workload endpoint | [optional] [readonly] 
**frontend** | [**FrontEndServer**](FrontEndServer.md) |  | [optional] 

## Example

```python
from openapi_client.models.three_tier_workload import ThreeTierWorkload

# TODO update the JSON string below
json = "{}"
# create an instance of ThreeTierWorkload from a JSON string
three_tier_workload_instance = ThreeTierWorkload.from_json(json)
# print the JSON string representation of the object
print(ThreeTierWorkload.to_json())

# convert the object into a dict
three_tier_workload_dict = three_tier_workload_instance.to_dict()
# create an instance of ThreeTierWorkload from a dict
three_tier_workload_from_dict = ThreeTierWorkload.from_dict(three_tier_workload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


