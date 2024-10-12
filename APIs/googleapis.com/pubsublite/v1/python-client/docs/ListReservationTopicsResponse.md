# ListReservationTopicsResponse

Response for ListReservationTopics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page of results. If this field is omitted, there are no more results. | [optional] 
**topics** | **List[str]** | The names of topics attached to the reservation. The order of the topics is unspecified. | [optional] 

## Example

```python
from openapi_client.models.list_reservation_topics_response import ListReservationTopicsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListReservationTopicsResponse from a JSON string
list_reservation_topics_response_instance = ListReservationTopicsResponse.from_json(json)
# print the JSON string representation of the object
print(ListReservationTopicsResponse.to_json())

# convert the object into a dict
list_reservation_topics_response_dict = list_reservation_topics_response_instance.to_dict()
# create an instance of ListReservationTopicsResponse from a dict
list_reservation_topics_response_from_dict = ListReservationTopicsResponse.from_dict(list_reservation_topics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


