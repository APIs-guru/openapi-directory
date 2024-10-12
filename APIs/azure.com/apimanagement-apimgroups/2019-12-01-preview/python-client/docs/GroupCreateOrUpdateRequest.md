# GroupCreateOrUpdateRequest

Parameters supplied to the Create Group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GroupCreateOrUpdateRequestProperties**](GroupCreateOrUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_create_or_update_request import GroupCreateOrUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GroupCreateOrUpdateRequest from a JSON string
group_create_or_update_request_instance = GroupCreateOrUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(GroupCreateOrUpdateRequest.to_json())

# convert the object into a dict
group_create_or_update_request_dict = group_create_or_update_request_instance.to_dict()
# create an instance of GroupCreateOrUpdateRequest from a dict
group_create_or_update_request_from_dict = GroupCreateOrUpdateRequest.from_dict(group_create_or_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


