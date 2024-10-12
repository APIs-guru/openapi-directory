# ListServicesResponse

The response message for RegistrationService.ListServices.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**services** | [**List[Service]**](Service.md) | The list of services. | [optional] 

## Example

```python
from openapi_client.models.list_services_response import ListServicesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListServicesResponse from a JSON string
list_services_response_instance = ListServicesResponse.from_json(json)
# print the JSON string representation of the object
print(ListServicesResponse.to_json())

# convert the object into a dict
list_services_response_dict = list_services_response_instance.to_dict()
# create an instance of ListServicesResponse from a dict
list_services_response_from_dict = ListServicesResponse.from_dict(list_services_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


