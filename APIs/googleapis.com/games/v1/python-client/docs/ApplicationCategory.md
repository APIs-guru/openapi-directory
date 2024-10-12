# ApplicationCategory

An application category object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Uniquely identifies the type of this resource. Value is always the fixed string &#x60;games#applicationCategory&#x60;. | [optional] 
**primary** | **str** | The primary category. | [optional] 
**secondary** | **str** | The secondary category. | [optional] 

## Example

```python
from openapi_client.models.application_category import ApplicationCategory

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationCategory from a JSON string
application_category_instance = ApplicationCategory.from_json(json)
# print the JSON string representation of the object
print(ApplicationCategory.to_json())

# convert the object into a dict
application_category_dict = application_category_instance.to_dict()
# create an instance of ApplicationCategory from a dict
application_category_from_dict = ApplicationCategory.from_dict(application_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


