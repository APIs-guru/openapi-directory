# AppMembershipsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_origin** | **str** | The app&#39;s origin | [optional] 
**memberships** | [**List[AppMembershipsResponseMembershipsInner]**](AppMembershipsResponseMembershipsInner.md) | An array of all ways a user has access to the app, based on the app_memberships table. | [optional] 

## Example

```python
from openapi_client.models.app_memberships_response import AppMembershipsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AppMembershipsResponse from a JSON string
app_memberships_response_instance = AppMembershipsResponse.from_json(json)
# print the JSON string representation of the object
print(AppMembershipsResponse.to_json())

# convert the object into a dict
app_memberships_response_dict = app_memberships_response_instance.to_dict()
# create an instance of AppMembershipsResponse from a dict
app_memberships_response_from_dict = AppMembershipsResponse.from_dict(app_memberships_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


