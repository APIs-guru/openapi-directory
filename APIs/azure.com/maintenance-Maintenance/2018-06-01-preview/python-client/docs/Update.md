# Update

Maintenance update on a resource

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**impact_duration_in_sec** | **int** | Duration of impact in seconds | [optional] 
**impact_type** | **str** | The impact type | [optional] 
**maintenance_scope** | **str** | The impact area | [optional] 
**not_before** | **datetime** | Time when Azure will start force updates if not self-updated by customer before this time | [optional] 
**properties** | [**UpdateProperties**](UpdateProperties.md) |  | [optional] 
**status** | **str** | The status | [optional] 

## Example

```python
from openapi_client.models.update import Update

# TODO update the JSON string below
json = "{}"
# create an instance of Update from a JSON string
update_instance = Update.from_json(json)
# print the JSON string representation of the object
print(Update.to_json())

# convert the object into a dict
update_dict = update_instance.to_dict()
# create an instance of Update from a dict
update_from_dict = Update.from_dict(update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


