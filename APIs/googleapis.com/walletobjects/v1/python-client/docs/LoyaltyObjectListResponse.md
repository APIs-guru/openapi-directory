# LoyaltyObjectListResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pagination** | [**Pagination**](Pagination.md) |  | [optional] 
**resources** | [**List[LoyaltyObject]**](LoyaltyObject.md) | Resources corresponding to the list request. | [optional] 

## Example

```python
from openapi_client.models.loyalty_object_list_response import LoyaltyObjectListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LoyaltyObjectListResponse from a JSON string
loyalty_object_list_response_instance = LoyaltyObjectListResponse.from_json(json)
# print the JSON string representation of the object
print(LoyaltyObjectListResponse.to_json())

# convert the object into a dict
loyalty_object_list_response_dict = loyalty_object_list_response_instance.to_dict()
# create an instance of LoyaltyObjectListResponse from a dict
loyalty_object_list_response_from_dict = LoyaltyObjectListResponse.from_dict(loyalty_object_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


