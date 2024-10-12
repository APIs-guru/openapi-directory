# ListServicePerimetersResponse

A response to `ListServicePerimetersRequest`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The pagination token to retrieve the next page of results. If the value is empty, no further results remain. | [optional] 
**service_perimeters** | [**List[ServicePerimeter]**](ServicePerimeter.md) | List of the Service Perimeter instances. | [optional] 

## Example

```python
from openapi_client.models.list_service_perimeters_response import ListServicePerimetersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServicePerimetersResponse from a JSON string
list_service_perimeters_response_instance = ListServicePerimetersResponse.from_json(json)
# print the JSON string representation of the object
print(ListServicePerimetersResponse.to_json())

# convert the object into a dict
list_service_perimeters_response_dict = list_service_perimeters_response_instance.to_dict()
# create an instance of ListServicePerimetersResponse from a dict
list_service_perimeters_response_from_dict = ListServicePerimetersResponse.from_dict(list_service_perimeters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


