# ListDestinationsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | [**List[Destination]**](Destination.md) | All Destinations linked to a GTM Container. | [optional] 
**next_page_token** | **str** | Continuation token for fetching the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_destinations_response import ListDestinationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDestinationsResponse from a JSON string
list_destinations_response_instance = ListDestinationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDestinationsResponse.to_json())

# convert the object into a dict
list_destinations_response_dict = list_destinations_response_instance.to_dict()
# create an instance of ListDestinationsResponse from a dict
list_destinations_response_from_dict = ListDestinationsResponse.from_dict(list_destinations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


