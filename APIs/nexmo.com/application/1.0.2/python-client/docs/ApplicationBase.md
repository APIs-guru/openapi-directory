# ApplicationBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The ID allocated to your application by Nexmo. | [optional] 
**name** | **str** | The name of your application | [optional] 

## Example

```python
from openapi_client.models.application_base import ApplicationBase

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationBase from a JSON string
application_base_instance = ApplicationBase.from_json(json)
# print the JSON string representation of the object
print(ApplicationBase.to_json())

# convert the object into a dict
application_base_dict = application_base_instance.to_dict()
# create an instance of ApplicationBase from a dict
application_base_from_dict = ApplicationBase.from_dict(application_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


