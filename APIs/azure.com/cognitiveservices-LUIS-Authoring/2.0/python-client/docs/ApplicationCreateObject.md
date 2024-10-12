# ApplicationCreateObject

Properties for creating a new LUIS Application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**culture** | **str** | The culture for the new application. It is the language that your app understands and speaks. E.g.: \&quot;en-us\&quot;. Note: the culture cannot be changed after the app is created. | 
**description** | **str** | Description of the new application. Optional. | [optional] 
**domain** | **str** | The domain for the new application. Optional. E.g.: Comics. | [optional] 
**initial_version_id** | **str** | The initial version ID. Optional. Default value is: \&quot;0.1\&quot; | [optional] 
**name** | **str** | The name for the new application. | 
**usage_scenario** | **str** | Defines the scenario for the new application. Optional. E.g.: IoT. | [optional] 

## Example

```python
from openapi_client.models.application_create_object import ApplicationCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationCreateObject from a JSON string
application_create_object_instance = ApplicationCreateObject.from_json(json)
# print the JSON string representation of the object
print(ApplicationCreateObject.to_json())

# convert the object into a dict
application_create_object_dict = application_create_object_instance.to_dict()
# create an instance of ApplicationCreateObject from a dict
application_create_object_from_dict = ApplicationCreateObject.from_dict(application_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


