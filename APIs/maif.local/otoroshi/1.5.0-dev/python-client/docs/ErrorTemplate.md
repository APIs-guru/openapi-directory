# ErrorTemplate

Error templates for a service descriptor

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | **Dict[str, str]** | Map for custom messages | 
**service_id** | **str** | The Id of the service for which the error template is enabled | 
**template40x** | **str** | The html template for 40x errors | 
**template50x** | **str** | The html template for 50x errors | 
**template_build** | **str** | The html template for build page | 
**template_maintenance** | **str** | The html template for maintenance page | 

## Example

```python
from openapi_client.models.error_template import ErrorTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorTemplate from a JSON string
error_template_instance = ErrorTemplate.from_json(json)
# print the JSON string representation of the object
print(ErrorTemplate.to_json())

# convert the object into a dict
error_template_dict = error_template_instance.to_dict()
# create an instance of ErrorTemplate from a dict
error_template_from_dict = ErrorTemplate.from_dict(error_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


