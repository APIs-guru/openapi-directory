# AppMembershipsResponseMembershipsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_id** | **str** |  | [optional] 
**origin** | **str** |  | [optional] 
**permissions** | **List[str]** |  | [optional] 
**source_id** | **str** |  | [optional] 
**source_type** | **str** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.app_memberships_response_memberships_inner import AppMembershipsResponseMembershipsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AppMembershipsResponseMembershipsInner from a JSON string
app_memberships_response_memberships_inner_instance = AppMembershipsResponseMembershipsInner.from_json(json)
# print the JSON string representation of the object
print(AppMembershipsResponseMembershipsInner.to_json())

# convert the object into a dict
app_memberships_response_memberships_inner_dict = app_memberships_response_memberships_inner_instance.to_dict()
# create an instance of AppMembershipsResponseMembershipsInner from a dict
app_memberships_response_memberships_inner_from_dict = AppMembershipsResponseMembershipsInner.from_dict(app_memberships_response_memberships_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


