# LoyaltyObjectAddMessageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource** | [**LoyaltyObject**](LoyaltyObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.loyalty_object_add_message_response import LoyaltyObjectAddMessageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LoyaltyObjectAddMessageResponse from a JSON string
loyalty_object_add_message_response_instance = LoyaltyObjectAddMessageResponse.from_json(json)
# print the JSON string representation of the object
print(LoyaltyObjectAddMessageResponse.to_json())

# convert the object into a dict
loyalty_object_add_message_response_dict = loyalty_object_add_message_response_instance.to_dict()
# create an instance of LoyaltyObjectAddMessageResponse from a dict
loyalty_object_add_message_response_from_dict = LoyaltyObjectAddMessageResponse.from_dict(loyalty_object_add_message_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


