# CrashGroupsList200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**continuation_token** | **str** | Cassandra request continuation token. The token is used for pagination. | [optional] 
**crash_groups** | [**List[CrashGroupsList200ResponseCrashGroupsInner]**](CrashGroupsList200ResponseCrashGroupsInner.md) |  | 
**limited_result_set** | **bool** |  | 

## Example

```python
from openapi_client.models.crash_groups_list200_response import CrashGroupsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupsList200Response from a JSON string
crash_groups_list200_response_instance = CrashGroupsList200Response.from_json(json)
# print the JSON string representation of the object
print(CrashGroupsList200Response.to_json())

# convert the object into a dict
crash_groups_list200_response_dict = crash_groups_list200_response_instance.to_dict()
# create an instance of CrashGroupsList200Response from a dict
crash_groups_list200_response_from_dict = CrashGroupsList200Response.from_dict(crash_groups_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


