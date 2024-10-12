# ListDealAssociationsResponse

A response for listing creative and deal associations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**associations** | [**List[CreativeDealAssociation]**](CreativeDealAssociation.md) | The list of associations. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. Pass this value in the ListDealAssociationsRequest.page_token field in the subsequent call to &#39;ListDealAssociation&#39; method to retrieve the next page of results. | [optional] 

## Example

```python
from openapi_client.models.list_deal_associations_response import ListDealAssociationsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDealAssociationsResponse from a JSON string
list_deal_associations_response_instance = ListDealAssociationsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDealAssociationsResponse.to_json())

# convert the object into a dict
list_deal_associations_response_dict = list_deal_associations_response_instance.to_dict()
# create an instance of ListDealAssociationsResponse from a dict
list_deal_associations_response_from_dict = ListDealAssociationsResponse.from_dict(list_deal_associations_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


