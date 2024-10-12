# ApplicationSource

Defines the source application for a VSTS pipeline.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_configuration** | **Dict[str, str]** | Application specific properties. | [optional] 
**application_type** | **str** | Type of application. | 
**source_type** | **str** | Type of application source. | 

## Example

```python
from openapi_client.models.application_source import ApplicationSource

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSource from a JSON string
application_source_instance = ApplicationSource.from_json(json)
# print the JSON string representation of the object
print(ApplicationSource.to_json())

# convert the object into a dict
application_source_dict = application_source_instance.to_dict()
# create an instance of ApplicationSource from a dict
application_source_from_dict = ApplicationSource.from_dict(application_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


