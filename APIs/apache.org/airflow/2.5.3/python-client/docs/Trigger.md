# Trigger


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**classpath** | **str** |  | [optional] 
**created_date** | **str** |  | [optional] 
**id** | **int** |  | [optional] 
**kwargs** | **str** |  | [optional] 
**triggerer_id** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.trigger import Trigger

# TODO update the JSON string below
json = "{}"
# create an instance of Trigger from a JSON string
trigger_instance = Trigger.from_json(json)
# print the JSON string representation of the object
print(Trigger.to_json())

# convert the object into a dict
trigger_dict = trigger_instance.to_dict()
# create an instance of Trigger from a dict
trigger_from_dict = Trigger.from_dict(trigger_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


