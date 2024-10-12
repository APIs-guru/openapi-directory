# ApplyUpdateProperties

Properties for apply update

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**last_update_time** | **datetime** | Last Update time | [optional] 
**resource_id** | **str** | The resourceId | [optional] 
**status** | **str** | The status | [optional] 

## Example

```python
from openapi_client.models.apply_update_properties import ApplyUpdateProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ApplyUpdateProperties from a JSON string
apply_update_properties_instance = ApplyUpdateProperties.from_json(json)
# print the JSON string representation of the object
print(ApplyUpdateProperties.to_json())

# convert the object into a dict
apply_update_properties_dict = apply_update_properties_instance.to_dict()
# create an instance of ApplyUpdateProperties from a dict
apply_update_properties_from_dict = ApplyUpdateProperties.from_dict(apply_update_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


