# AbortInfo

Details of the final state \"abort\" and associated resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | **str** | Causes that the analysis is aborted. | [optional] 
**ip_address** | **str** | IP address that caused the abort. | [optional] 
**projects_missing_permission** | **List[str]** | List of project IDs the user specified in the request but lacks access to. In this case, analysis is aborted with the PERMISSION_DENIED cause. | [optional] 
**resource_uri** | **str** | URI of the resource that caused the abort. | [optional] 

## Example

```python
from openapi_client.models.abort_info import AbortInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AbortInfo from a JSON string
abort_info_instance = AbortInfo.from_json(json)
# print the JSON string representation of the object
print(AbortInfo.to_json())

# convert the object into a dict
abort_info_dict = abort_info_instance.to_dict()
# create an instance of AbortInfo from a dict
abort_info_from_dict = AbortInfo.from_dict(abort_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


