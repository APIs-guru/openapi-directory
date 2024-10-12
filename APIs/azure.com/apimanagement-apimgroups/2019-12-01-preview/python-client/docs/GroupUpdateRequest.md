# GroupUpdateRequest

Parameters supplied to the Update Group operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**GroupUpdateRequestProperties**](GroupUpdateRequestProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.group_update_request import GroupUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GroupUpdateRequest from a JSON string
group_update_request_instance = GroupUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(GroupUpdateRequest.to_json())

# convert the object into a dict
group_update_request_dict = group_update_request_instance.to_dict()
# create an instance of GroupUpdateRequest from a dict
group_update_request_from_dict = GroupUpdateRequest.from_dict(group_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


