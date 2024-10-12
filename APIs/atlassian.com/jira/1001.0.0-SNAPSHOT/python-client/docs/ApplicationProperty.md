# ApplicationProperty

Details of an application property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[str]** | The allowed values, if applicable. | [optional] 
**default_value** | **str** | The default value of the application property. | [optional] 
**desc** | **str** | The description of the application property. | [optional] 
**example** | **str** |  | [optional] 
**id** | **str** | The ID of the application property. The ID and key are the same. | [optional] 
**key** | **str** | The key of the application property. The ID and key are the same. | [optional] 
**name** | **str** | The name of the application property. | [optional] 
**type** | **str** | The data type of the application property. | [optional] 
**value** | **str** | The new value. | [optional] 

## Example

```python
from openapi_client.models.application_property import ApplicationProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationProperty from a JSON string
application_property_instance = ApplicationProperty.from_json(json)
# print the JSON string representation of the object
print(ApplicationProperty.to_json())

# convert the object into a dict
application_property_dict = application_property_instance.to_dict()
# create an instance of ApplicationProperty from a dict
application_property_from_dict = ApplicationProperty.from_dict(application_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


