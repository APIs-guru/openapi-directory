# ReplaceServicePerimetersResponse

A response to ReplaceServicePerimetersRequest. This will be put inside of Operation.response field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**service_perimeters** | [**List[ServicePerimeter]**](ServicePerimeter.md) | List of the Service Perimeter instances. | [optional] 

## Example

```python
from openapi_client.models.replace_service_perimeters_response import ReplaceServicePerimetersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceServicePerimetersResponse from a JSON string
replace_service_perimeters_response_instance = ReplaceServicePerimetersResponse.from_json(json)
# print the JSON string representation of the object
print(ReplaceServicePerimetersResponse.to_json())

# convert the object into a dict
replace_service_perimeters_response_dict = replace_service_perimeters_response_instance.to_dict()
# create an instance of ReplaceServicePerimetersResponse from a dict
replace_service_perimeters_response_from_dict = ReplaceServicePerimetersResponse.from_dict(replace_service_perimeters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


