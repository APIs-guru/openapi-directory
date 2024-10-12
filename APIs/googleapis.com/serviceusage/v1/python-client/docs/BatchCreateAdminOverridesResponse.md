# BatchCreateAdminOverridesResponse

Response message for BatchCreateAdminOverrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[QuotaOverride]**](QuotaOverride.md) | The overrides that were created. | [optional] 

## Example

```python
from openapi_client.models.batch_create_admin_overrides_response import BatchCreateAdminOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchCreateAdminOverridesResponse from a JSON string
batch_create_admin_overrides_response_instance = BatchCreateAdminOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(BatchCreateAdminOverridesResponse.to_json())

# convert the object into a dict
batch_create_admin_overrides_response_dict = batch_create_admin_overrides_response_instance.to_dict()
# create an instance of BatchCreateAdminOverridesResponse from a dict
batch_create_admin_overrides_response_from_dict = BatchCreateAdminOverridesResponse.from_dict(batch_create_admin_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


