# ApplicationPropertiesErrorsInner

The error message associated with the cluster creation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The error code. | [optional] 
**message** | **str** | The error message. | [optional] 

## Example

```python
from openapi_client.models.application_properties_errors_inner import ApplicationPropertiesErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationPropertiesErrorsInner from a JSON string
application_properties_errors_inner_instance = ApplicationPropertiesErrorsInner.from_json(json)
# print the JSON string representation of the object
print(ApplicationPropertiesErrorsInner.to_json())

# convert the object into a dict
application_properties_errors_inner_dict = application_properties_errors_inner_instance.to_dict()
# create an instance of ApplicationPropertiesErrorsInner from a dict
application_properties_errors_inner_from_dict = ApplicationPropertiesErrorsInner.from_dict(application_properties_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


