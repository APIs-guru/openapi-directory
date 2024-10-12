# ReturnPolicySeasonalOverride


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_date** | **str** | Required. Last day on which the override applies. In ISO 8601 format. | [optional] 
**name** | **str** | Required. The name of the seasonal override as shown in Merchant Center. | [optional] 
**policy** | [**ReturnPolicyPolicy**](ReturnPolicyPolicy.md) |  | [optional] 
**start_date** | **str** | Required. First day on which the override applies. In ISO 8601 format. | [optional] 

## Example

```python
from openapi_client.models.return_policy_seasonal_override import ReturnPolicySeasonalOverride

# TODO update the JSON string below
json = "{}"
# create an instance of ReturnPolicySeasonalOverride from a JSON string
return_policy_seasonal_override_instance = ReturnPolicySeasonalOverride.from_json(json)
# print the JSON string representation of the object
print(ReturnPolicySeasonalOverride.to_json())

# convert the object into a dict
return_policy_seasonal_override_dict = return_policy_seasonal_override_instance.to_dict()
# create an instance of ReturnPolicySeasonalOverride from a dict
return_policy_seasonal_override_from_dict = ReturnPolicySeasonalOverride.from_dict(return_policy_seasonal_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


