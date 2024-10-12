# RIR


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregate_count** | **int** |  | [optional] [readonly] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**is_private** | **bool** | IP space managed by this RIR is considered private | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** |  | 
**slug** | **str** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.rir import RIR

# TODO update the JSON string below
json = "{}"
# create an instance of RIR from a JSON string
rir_instance = RIR.from_json(json)
# print the JSON string representation of the object
print(RIR.to_json())

# convert the object into a dict
rir_dict = rir_instance.to_dict()
# create an instance of RIR from a dict
rir_from_dict = RIR.from_dict(rir_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


