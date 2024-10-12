# ListPickupResponseBody

A list pickup response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PaginationLink**](PaginationLink.md) | Helpful links to other pages of results | [readonly] 
**page** | **int** | Current page of the list pickups results | [readonly] 
**pages** | **int** | Total number of pages for list pickups results | [readonly] 
**pickups** | [**List[Pickup]**](Pickup.md) | An array of pickups associated with the user&#39;s account. | 
**total** | **int** | The total number of pickups returned | [readonly] 

## Example

```python
from openapi_client.models.list_pickup_response_body import ListPickupResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListPickupResponseBody from a JSON string
list_pickup_response_body_instance = ListPickupResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListPickupResponseBody.to_json())

# convert the object into a dict
list_pickup_response_body_dict = list_pickup_response_body_instance.to_dict()
# create an instance of ListPickupResponseBody from a dict
list_pickup_response_body_from_dict = ListPickupResponseBody.from_dict(list_pickup_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


