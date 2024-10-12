# ListSupportedServicesResponse

A response to `ListSupportedServicesRequest`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | The pagination token to retrieve the next page of results. If the value is empty, no further results remain. | [optional] 
**supported_services** | [**List[SupportedService]**](SupportedService.md) | List of services supported by VPC Service Controls instances. | [optional] 

## Example

```python
from openapi_client.models.list_supported_services_response import ListSupportedServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSupportedServicesResponse from a JSON string
list_supported_services_response_instance = ListSupportedServicesResponse.from_json(json)
# print the JSON string representation of the object
print(ListSupportedServicesResponse.to_json())

# convert the object into a dict
list_supported_services_response_dict = list_supported_services_response_instance.to_dict()
# create an instance of ListSupportedServicesResponse from a dict
list_supported_services_response_from_dict = ListSupportedServicesResponse.from_dict(list_supported_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


