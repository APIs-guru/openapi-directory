# ListSkusResponse

Response message for `ListSkus`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results. To retrieve the next page, call &#x60;ListSkus&#x60; again with the &#x60;page_token&#x60; field set to this value. This field is empty if there are no more results to retrieve. | [optional] 
**skus** | [**List[Sku]**](Sku.md) | The list of public SKUs of the given service. | [optional] 

## Example

```python
from openapi_client.models.list_skus_response import ListSkusResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSkusResponse from a JSON string
list_skus_response_instance = ListSkusResponse.from_json(json)
# print the JSON string representation of the object
print(ListSkusResponse.to_json())

# convert the object into a dict
list_skus_response_dict = list_skus_response_instance.to_dict()
# create an instance of ListSkusResponse from a dict
list_skus_response_from_dict = ListSkusResponse.from_dict(list_skus_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


