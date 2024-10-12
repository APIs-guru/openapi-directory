# StatusCreate

Details of the status being created.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The description of the status. | [optional] 
**name** | **str** | The name of the status. | 
**status_category** | **str** | The category of the status. | 

## Example

```python
from openapi_client.models.status_create import StatusCreate

# TODO update the JSON string below
json = "{}"
# create an instance of StatusCreate from a JSON string
status_create_instance = StatusCreate.from_json(json)
# print the JSON string representation of the object
print(StatusCreate.to_json())

# convert the object into a dict
status_create_dict = status_create_instance.to_dict()
# create an instance of StatusCreate from a dict
status_create_from_dict = StatusCreate.from_dict(status_create_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


