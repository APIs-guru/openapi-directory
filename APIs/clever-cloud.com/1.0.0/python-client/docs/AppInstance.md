# AppInstance


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | [optional] 
**app_port** | **int** |  | [optional] 
**commit** | **str** |  | [optional] 
**deploy_number** | **int** |  | [optional] 
**flavor** | [**Flavor**](Flavor.md) |  | [optional] 
**id** | **str** |  | [optional] 
**ip** | **str** |  | [optional] 
**state** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_instance import AppInstance

# TODO update the JSON string below
json = "{}"
# create an instance of AppInstance from a JSON string
app_instance_instance = AppInstance.from_json(json)
# print the JSON string representation of the object
print(AppInstance.to_json())

# convert the object into a dict
app_instance_dict = app_instance_instance.to_dict()
# create an instance of AppInstance from a dict
app_instance_from_dict = AppInstance.from_dict(app_instance_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


