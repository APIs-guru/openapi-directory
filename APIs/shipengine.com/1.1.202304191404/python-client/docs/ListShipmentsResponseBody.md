# ListShipmentsResponseBody

A list shipment response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**PaginationLink**](PaginationLink.md) |  | [readonly] 
**page** | **int** |  | [readonly] 
**pages** | **int** |  | [readonly] 
**shipments** | [**List[Shipment]**](Shipment.md) | The list of shipments returned by the api call | [readonly] 
**total** | **int** | Total number of shipments returned by the api call | [readonly] 

## Example

```python
from openapi_client.models.list_shipments_response_body import ListShipmentsResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListShipmentsResponseBody from a JSON string
list_shipments_response_body_instance = ListShipmentsResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListShipmentsResponseBody.to_json())

# convert the object into a dict
list_shipments_response_body_dict = list_shipments_response_body_instance.to_dict()
# create an instance of ListShipmentsResponseBody from a dict
list_shipments_response_body_from_dict = ListShipmentsResponseBody.from_dict(list_shipments_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


