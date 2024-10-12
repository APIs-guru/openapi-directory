# ListFederationsResponse

Response message for ListFederations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**federations** | [**List[Federation]**](Federation.md) | The services in the specified location. | [optional] 
**next_page_token** | **str** | A token that can be sent as page_token to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_federations_response import ListFederationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListFederationsResponse from a JSON string
list_federations_response_instance = ListFederationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListFederationsResponse.to_json())

# convert the object into a dict
list_federations_response_dict = list_federations_response_instance.to_dict()
# create an instance of ListFederationsResponse from a dict
list_federations_response_from_dict = ListFederationsResponse.from_dict(list_federations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


