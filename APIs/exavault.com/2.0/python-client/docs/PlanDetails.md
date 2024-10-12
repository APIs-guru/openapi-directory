# PlanDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_keys** | **int** |  | [optional] 
**api_tokens** | **int** |  | [optional] 
**color_schema** | **bool** |  | [optional] 
**custom_domain** | **bool** |  | [optional] 
**custom_name** | **bool** |  | [optional] 
**direct_links** | **bool** |  | [optional] 
**ip_whitelist** | **bool** |  | [optional] 
**sharing_options** | **List[str]** |  | [optional] 
**ssh_keys** | **int** |  | [optional] 
**storage_add_on** | **int** |  | [optional] 
**unlimited_users** | **bool** |  | [optional] 
**user_expiration** | **bool** |  | [optional] 
**user_import** | **bool** |  | [optional] 
**webhook_options** | [**PlanDetailsWebhookOptions**](PlanDetailsWebhookOptions.md) |  | [optional] 

## Example

```python
from openapi_client.models.plan_details import PlanDetails

# TODO update the JSON string below
json = "{}"
# create an instance of PlanDetails from a JSON string
plan_details_instance = PlanDetails.from_json(json)
# print the JSON string representation of the object
print(PlanDetails.to_json())

# convert the object into a dict
plan_details_dict = plan_details_instance.to_dict()
# create an instance of PlanDetails from a dict
plan_details_from_dict = PlanDetails.from_dict(plan_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


