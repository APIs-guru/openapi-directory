# ResourceQuotasRemaining

The resource quota tokens remaining for the property after the request is completed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**daily_quota_tokens_remaining** | **int** | Daily resource quota remaining remaining. | [optional] 
**hourly_quota_tokens_remaining** | **int** | Hourly resource quota tokens remaining. | [optional] 

## Example

```python
from openapi_client.models.resource_quotas_remaining import ResourceQuotasRemaining

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceQuotasRemaining from a JSON string
resource_quotas_remaining_instance = ResourceQuotasRemaining.from_json(json)
# print the JSON string representation of the object
print(ResourceQuotasRemaining.to_json())

# convert the object into a dict
resource_quotas_remaining_dict = resource_quotas_remaining_instance.to_dict()
# create an instance of ResourceQuotasRemaining from a dict
resource_quotas_remaining_from_dict = ResourceQuotasRemaining.from_dict(resource_quotas_remaining_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


