# AuthorizedSellerStatusAssignedTargetingOptionDetails

Represents an assigned authorized seller status. This will be populated in the details field of an AssignedTargetingOption when targeting_type is `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS`. If a resource does not have an `TARGETING_TYPE_AUTHORIZED_SELLER_STATUS` assigned targeting option, it is using the \"Authorized Direct Sellers and Resellers\" option.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorized_seller_status** | **str** | Output only. The authorized seller status to target. | [optional] [readonly] 
**targeting_option_id** | **str** | Required. The targeting_option_id of a TargetingOption of type &#x60;TARGETING_TYPE_AUTHORIZED_SELLER_STATUS&#x60;. | [optional] 

## Example

```python
from openapi_client.models.authorized_seller_status_assigned_targeting_option_details import AuthorizedSellerStatusAssignedTargetingOptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AuthorizedSellerStatusAssignedTargetingOptionDetails from a JSON string
authorized_seller_status_assigned_targeting_option_details_instance = AuthorizedSellerStatusAssignedTargetingOptionDetails.from_json(json)
# print the JSON string representation of the object
print(AuthorizedSellerStatusAssignedTargetingOptionDetails.to_json())

# convert the object into a dict
authorized_seller_status_assigned_targeting_option_details_dict = authorized_seller_status_assigned_targeting_option_details_instance.to_dict()
# create an instance of AuthorizedSellerStatusAssignedTargetingOptionDetails from a dict
authorized_seller_status_assigned_targeting_option_details_from_dict = AuthorizedSellerStatusAssignedTargetingOptionDetails.from_dict(authorized_seller_status_assigned_targeting_option_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


