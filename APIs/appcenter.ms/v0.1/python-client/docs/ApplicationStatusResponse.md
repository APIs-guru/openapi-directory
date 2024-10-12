# ApplicationStatusResponse

The status information from Itunes portal

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**version** | **str** | The version of the application | [optional] 
**version_type** | **str** | The type of version being returned (production/edit/test flight). | 

## Example

```python
from openapi_client.models.application_status_response import ApplicationStatusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationStatusResponse from a JSON string
application_status_response_instance = ApplicationStatusResponse.from_json(json)
# print the JSON string representation of the object
print(ApplicationStatusResponse.to_json())

# convert the object into a dict
application_status_response_dict = application_status_response_instance.to_dict()
# create an instance of ApplicationStatusResponse from a dict
application_status_response_from_dict = ApplicationStatusResponse.from_dict(application_status_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


