# ListServicesResponse

Response message for `ListServices`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. To retrieve the next page, call &#x60;ListServices&#x60; again with the &#x60;page_token&#x60; field set to this value. This field is empty if there are no more results to retrieve. | [optional] 
**services** | [**List[Service]**](Service.md) | A list of services. | [optional] 

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


