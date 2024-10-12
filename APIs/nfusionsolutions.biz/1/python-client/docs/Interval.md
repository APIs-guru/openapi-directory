# Interval


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change** | **float** |  | [optional] 
**change_percent** | **float** |  | [optional] 
**end** | **datetime** |  | [optional] 
**high** | **float** |  | [optional] 
**last** | **float** |  | [optional] 
**low** | **float** |  | [optional] 
**open** | **float** |  | [optional] 
**start** | **datetime** |  | [optional] 

## Example

```python
from openapi_client.models.interval import Interval

# TODO update the JSON string below
json = "{}"
# create an instance of Interval from a JSON string
interval_instance = Interval.from_json(json)
# print the JSON string representation of the object
print(Interval.to_json())

# convert the object into a dict
interval_dict = interval_instance.to_dict()
# create an instance of Interval from a dict
interval_from_dict = Interval.from_dict(interval_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


