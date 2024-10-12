# GetTicketsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[Ticket]**](Ticket.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**operation** | **str** | Operation performed | 
**resource** | **str** | Unified API resource name | 
**service** | **str** | Apideck ID of service provider | 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_tickets_response import GetTicketsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetTicketsResponse from a JSON string
get_tickets_response_instance = GetTicketsResponse.from_json(json)
# print the JSON string representation of the object
print(GetTicketsResponse.to_json())

# convert the object into a dict
get_tickets_response_dict = get_tickets_response_instance.to_dict()
# create an instance of GetTicketsResponse from a dict
get_tickets_response_from_dict = GetTicketsResponse.from_dict(get_tickets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


