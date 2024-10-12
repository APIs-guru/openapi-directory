# DdosProtectionPlansUpdateTagsRequest

Tags object for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**tags** | **Dict[str, str]** | Resource tags. | [optional] 

## Example

```python
from openapi_client.models.ddos_protection_plans_update_tags_request import DdosProtectionPlansUpdateTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DdosProtectionPlansUpdateTagsRequest from a JSON string
ddos_protection_plans_update_tags_request_instance = DdosProtectionPlansUpdateTagsRequest.from_json(json)
# print the JSON string representation of the object
print(DdosProtectionPlansUpdateTagsRequest.to_json())

# convert the object into a dict
ddos_protection_plans_update_tags_request_dict = ddos_protection_plans_update_tags_request_instance.to_dict()
# create an instance of DdosProtectionPlansUpdateTagsRequest from a dict
ddos_protection_plans_update_tags_request_from_dict = DdosProtectionPlansUpdateTagsRequest.from_dict(ddos_protection_plans_update_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


