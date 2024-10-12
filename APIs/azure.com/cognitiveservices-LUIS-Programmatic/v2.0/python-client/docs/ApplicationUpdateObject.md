# ApplicationUpdateObject

Object model for updating the name or description of an application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The application&#39;s new description. | [optional] 
**name** | **str** | The application&#39;s new name. | [optional] 

## Example

```python
from openapi_client.models.application_update_object import ApplicationUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationUpdateObject from a JSON string
application_update_object_instance = ApplicationUpdateObject.from_json(json)
# print the JSON string representation of the object
print(ApplicationUpdateObject.to_json())

# convert the object into a dict
application_update_object_dict = application_update_object_instance.to_dict()
# create an instance of ApplicationUpdateObject from a dict
application_update_object_from_dict = ApplicationUpdateObject.from_dict(application_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


