# AdminKeyResult

Response containing the primary and secondary API keys for a given Azure Search service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_key** | **str** | The primary API key of the Search service. | [optional] [readonly] 
**secondary_key** | **str** | The secondary API key of the Search service. | [optional] [readonly] 

## Example

```python
from openapi_client.models.admin_key_result import AdminKeyResult

# TODO update the JSON string below
json = "{}"
# create an instance of AdminKeyResult from a JSON string
admin_key_result_instance = AdminKeyResult.from_json(json)
# print the JSON string representation of the object
print(AdminKeyResult.to_json())

# convert the object into a dict
admin_key_result_dict = admin_key_result_instance.to_dict()
# create an instance of AdminKeyResult from a dict
admin_key_result_from_dict = AdminKeyResult.from_dict(admin_key_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


