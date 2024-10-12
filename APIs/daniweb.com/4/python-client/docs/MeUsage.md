# MeUsage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_status** | **bool** |  | [optional] 
**joined_timestamp** | **datetime** |  | [optional] 
**last_activity_timestamp** | **datetime** |  | [optional] 
**online_status** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.me_usage import MeUsage

# TODO update the JSON string below
json = "{}"
# create an instance of MeUsage from a JSON string
me_usage_instance = MeUsage.from_json(json)
# print the JSON string representation of the object
print(MeUsage.to_json())

# convert the object into a dict
me_usage_dict = me_usage_instance.to_dict()
# create an instance of MeUsage from a dict
me_usage_from_dict = MeUsage.from_dict(me_usage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


