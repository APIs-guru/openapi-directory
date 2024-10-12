# QueryVmwareVersionConfigResponse

Response message for querying VMware user cluster version config.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**versions** | [**List[VmwareVersionInfo]**](VmwareVersionInfo.md) | List of available versions to install or to upgrade to. | [optional] 

## Example

```python
from openapi_client.models.query_vmware_version_config_response import QueryVmwareVersionConfigResponse

# TODO update the JSON string below
json = "{}"
# create an instance of QueryVmwareVersionConfigResponse from a JSON string
query_vmware_version_config_response_instance = QueryVmwareVersionConfigResponse.from_json(json)
# print the JSON string representation of the object
print(QueryVmwareVersionConfigResponse.to_json())

# convert the object into a dict
query_vmware_version_config_response_dict = query_vmware_version_config_response_instance.to_dict()
# create an instance of QueryVmwareVersionConfigResponse from a dict
query_vmware_version_config_response_from_dict = QueryVmwareVersionConfigResponse.from_dict(query_vmware_version_config_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


