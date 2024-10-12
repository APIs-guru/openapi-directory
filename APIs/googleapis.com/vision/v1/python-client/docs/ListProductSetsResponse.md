# ListProductSetsResponse

Response message for the `ListProductSets` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**product_sets** | [**List[ProductSet]**](ProductSet.md) | List of ProductSets. | [optional] 

## Example

```python
from openapi_client.models.list_product_sets_response import ListProductSetsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListProductSetsResponse from a JSON string
list_product_sets_response_instance = ListProductSetsResponse.from_json(json)
# print the JSON string representation of the object
print(ListProductSetsResponse.to_json())

# convert the object into a dict
list_product_sets_response_dict = list_product_sets_response_instance.to_dict()
# create an instance of ListProductSetsResponse from a dict
list_product_sets_response_from_dict = ListProductSetsResponse.from_dict(list_product_sets_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


