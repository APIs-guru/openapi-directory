# ImportAdminOverridesResponse

Response message for ImportAdminOverrides

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**overrides** | [**List[QuotaOverride]**](QuotaOverride.md) | The overrides that were created from the imported data. | [optional] 

## Example

```python
from openapi_client.models.import_admin_overrides_response import ImportAdminOverridesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ImportAdminOverridesResponse from a JSON string
import_admin_overrides_response_instance = ImportAdminOverridesResponse.from_json(json)
# print the JSON string representation of the object
print(ImportAdminOverridesResponse.to_json())

# convert the object into a dict
import_admin_overrides_response_dict = import_admin_overrides_response_instance.to_dict()
# create an instance of ImportAdminOverridesResponse from a dict
import_admin_overrides_response_from_dict = ImportAdminOverridesResponse.from_dict(import_admin_overrides_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


