# UpgradeRuntimeRequest

Request for upgrading a Managed Notebook Runtime to the latest version. option (google.api.message_visibility).restriction = \"TRUSTED_TESTER,SPECIAL_TESTER\";

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Idempotent request UUID. | [optional] 

## Example

```python
from openapi_client.models.upgrade_runtime_request import UpgradeRuntimeRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpgradeRuntimeRequest from a JSON string
upgrade_runtime_request_instance = UpgradeRuntimeRequest.from_json(json)
# print the JSON string representation of the object
print(UpgradeRuntimeRequest.to_json())

# convert the object into a dict
upgrade_runtime_request_dict = upgrade_runtime_request_instance.to_dict()
# create an instance of UpgradeRuntimeRequest from a dict
upgrade_runtime_request_from_dict = UpgradeRuntimeRequest.from_dict(upgrade_runtime_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


