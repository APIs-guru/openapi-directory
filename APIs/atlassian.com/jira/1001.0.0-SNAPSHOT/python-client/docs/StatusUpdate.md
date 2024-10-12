# StatusUpdate

Details of the status being updated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the status. | [optional] 
**id** | **str** | The ID of the status. | 
**name** | **str** | The name of the status. | 
**status_category** | **str** | The category of the status. | 

## Example

```python
from openapi_client.models.status_update import StatusUpdate

# TODO update the JSON string below
json = "{}"
# create an instance of StatusUpdate from a JSON string
status_update_instance = StatusUpdate.from_json(json)
# print the JSON string representation of the object
print(StatusUpdate.to_json())

# convert the object into a dict
status_update_dict = status_update_instance.to_dict()
# create an instance of StatusUpdate from a dict
status_update_from_dict = StatusUpdate.from_dict(status_update_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


