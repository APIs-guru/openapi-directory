# ListRegistrationsResponse

Response for the `ListRegistrations` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | When present, there are more results to retrieve. Set &#x60;page_token&#x60; to this value on a subsequent call to get the next page of results. | [optional] 
**registrations** | [**List[Registration]**](Registration.md) | A list of &#x60;Registration&#x60;s. | [optional] 

## Example

```python
from openapi_client.models.list_registrations_response import ListRegistrationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListRegistrationsResponse from a JSON string
list_registrations_response_instance = ListRegistrationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListRegistrationsResponse.to_json())

# convert the object into a dict
list_registrations_response_dict = list_registrations_response_instance.to_dict()
# create an instance of ListRegistrationsResponse from a dict
list_registrations_response_from_dict = ListRegistrationsResponse.from_dict(list_registrations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


