# PagedEligibleItemCollection

This complex type defines a collection of listings that are eligible for an offer to a buyer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eligible_items** | [**List[EligibleItem]**](EligibleItem.md) | A list of items that are eligible for a seller-initiated offer to a buyer. Each element in the list contains the listing ID of a listed item. These IDs represent the listings for which buyers have shown an interest. | [optional] 
**href** | **str** | The URI of the current page of results from the result set. | [optional] 
**limit** | **int** | The number of items returned on a single page from the result set. This value can be set in the request with the limit query parameter. | [optional] 
**next** | **str** | The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. Max length: 2048 | [optional] 
**offset** | **int** | The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the offset query parameter. Note: The items in a paginated result set use a zero-based list where the first item in the list has an offset of 0. | [optional] 
**prev** | **str** | The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. Max length: 2048 | [optional] 
**total** | **int** | The total number of items retrieved in the result set. If no items match the search criteria, the server returns the HTTP status code 204 No Content. | [optional] 

## Example

```python
from openapi_client.models.paged_eligible_item_collection import PagedEligibleItemCollection

# TODO update the JSON string below
json = "{}"
# create an instance of PagedEligibleItemCollection from a JSON string
paged_eligible_item_collection_instance = PagedEligibleItemCollection.from_json(json)
# print the JSON string representation of the object
print(PagedEligibleItemCollection.to_json())

# convert the object into a dict
paged_eligible_item_collection_dict = paged_eligible_item_collection_instance.to_dict()
# create an instance of PagedEligibleItemCollection from a dict
paged_eligible_item_collection_from_dict = PagedEligibleItemCollection.from_dict(paged_eligible_item_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


