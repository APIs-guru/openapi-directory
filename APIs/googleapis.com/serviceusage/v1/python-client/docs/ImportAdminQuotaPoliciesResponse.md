# ImportAdminQuotaPoliciesResponse

Response message for ImportAdminQuotaPolicies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**List[AdminQuotaPolicy]**](AdminQuotaPolicy.md) | The policies that were created from the imported data. | [optional] 

## Example

```python
from openapi_client.models.import_admin_quota_policies_response import ImportAdminQuotaPoliciesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportAdminQuotaPoliciesResponse from a JSON string
import_admin_quota_policies_response_instance = ImportAdminQuotaPoliciesResponse.from_json(json)
# print the JSON string representation of the object
print(ImportAdminQuotaPoliciesResponse.to_json())

# convert the object into a dict
import_admin_quota_policies_response_dict = import_admin_quota_policies_response_instance.to_dict()
# create an instance of ImportAdminQuotaPoliciesResponse from a dict
import_admin_quota_policies_response_from_dict = ImportAdminQuotaPoliciesResponse.from_dict(import_admin_quota_policies_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


