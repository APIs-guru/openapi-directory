# OfferClassListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[OfferClass]**](OfferClass.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.offer_class_list_response import OfferClassListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferClassListResponse from a JSON string
offer_class_list_response_instance = OfferClassListResponse.from_json(json)
# print the JSON string representation of the object
print(OfferClassListResponse.to_json())

# convert the object into a dict
offer_class_list_response_dict = offer_class_list_response_instance.to_dict()
# create an instance of OfferClassListResponse from a dict
offer_class_list_response_from_dict = OfferClassListResponse.from_dict(offer_class_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


