# Application


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**Links**](Links.md) |  | [optional] 
**id** | **str** | The ID allocated to your application by Nexmo. | [optional] 
**keys** | [**Keys**](Keys.md) |  | [optional] 
**messages** | [**Messages**](Messages.md) |  | 
**name** | **str** | The name of your application | 
**voice** | [**Voice**](Voice.md) |  | 

## Example

```python
from openapi_client.models.application import Application

# TODO update the JSON string below
json = "{}"
# create an instance of Application from a JSON string
application_instance = Application.from_json(json)
# print the JSON string representation of the object
print(Application.to_json())

# convert the object into a dict
application_dict = application_instance.to_dict()
# create an instance of Application from a dict
application_from_dict = Application.from_dict(application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


