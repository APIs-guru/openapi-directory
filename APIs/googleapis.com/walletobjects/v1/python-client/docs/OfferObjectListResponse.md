# OfferObjectListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[OfferObject]**](OfferObject.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.offer_object_list_response import OfferObjectListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferObjectListResponse from a JSON string
offer_object_list_response_instance = OfferObjectListResponse.from_json(json)
# print the JSON string representation of the object
print(OfferObjectListResponse.to_json())

# convert the object into a dict
offer_object_list_response_dict = offer_object_list_response_instance.to_dict()
# create an instance of OfferObjectListResponse from a dict
offer_object_list_response_from_dict = OfferObjectListResponse.from_dict(offer_object_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


