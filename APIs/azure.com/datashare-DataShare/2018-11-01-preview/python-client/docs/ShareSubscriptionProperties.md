# ShareSubscriptionProperties

Share subscription property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Time at which the share subscription was created. | [optional] [readonly] 
**invitation_id** | **str** | The invitation id. | 
**provider_email** | **str** | Email of the provider who created the resource | [optional] [readonly] 
**provider_name** | **str** | Name of the provider who created the resource | [optional] [readonly] 
**provider_tenant_name** | **str** | Tenant name of the provider who created the resource | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the share subscription | [optional] [readonly] 
**share_description** | **str** | Description of share | [optional] [readonly] 
**share_kind** | **str** | Kind of share | [optional] [readonly] 
**share_name** | **str** | Name of the share | [optional] [readonly] 
**share_subscription_status** | **str** | Gets the current status of share subscription. | [optional] [readonly] 
**share_terms** | **str** | Terms of a share | [optional] [readonly] 
**user_email** | **str** | Email of the user who created the resource | [optional] [readonly] 
**user_name** | **str** | Name of the user who created the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.share_subscription_properties import ShareSubscriptionProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ShareSubscriptionProperties from a JSON string
share_subscription_properties_instance = ShareSubscriptionProperties.from_json(json)
# print the JSON string representation of the object
print(ShareSubscriptionProperties.to_json())

# convert the object into a dict
share_subscription_properties_dict = share_subscription_properties_instance.to_dict()
# create an instance of ShareSubscriptionProperties from a dict
share_subscription_properties_from_dict = ShareSubscriptionProperties.from_dict(share_subscription_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


