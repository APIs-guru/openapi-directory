# LoyaltyClassListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[LoyaltyClass]**](LoyaltyClass.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.loyalty_class_list_response import LoyaltyClassListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LoyaltyClassListResponse from a JSON string
loyalty_class_list_response_instance = LoyaltyClassListResponse.from_json(json)
# print the JSON string representation of the object
print(LoyaltyClassListResponse.to_json())

# convert the object into a dict
loyalty_class_list_response_dict = loyalty_class_list_response_instance.to_dict()
# create an instance of LoyaltyClassListResponse from a dict
loyalty_class_list_response_from_dict = LoyaltyClassListResponse.from_dict(loyalty_class_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


