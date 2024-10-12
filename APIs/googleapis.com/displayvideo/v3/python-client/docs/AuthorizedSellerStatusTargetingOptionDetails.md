# AuthorizedSellerStatusTargetingOptionDetails

Represents a targetable authorized seller status. This will be populated in the authorized_seller_status_details field when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_seller_status** | **str** | Output only. The authorized seller status. | [optional] [readonly] 

## Example

```python
from openapi_client.models.authorized_seller_status_targeting_option_details import AuthorizedSellerStatusTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizedSellerStatusTargetingOptionDetails from a JSON string
authorized_seller_status_targeting_option_details_instance = AuthorizedSellerStatusTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AuthorizedSellerStatusTargetingOptionDetails.to_json())

# convert the object into a dict
authorized_seller_status_targeting_option_details_dict = authorized_seller_status_targeting_option_details_instance.to_dict()
# create an instance of AuthorizedSellerStatusTargetingOptionDetails from a dict
authorized_seller_status_targeting_option_details_from_dict = AuthorizedSellerStatusTargetingOptionDetails.from_dict(authorized_seller_status_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


