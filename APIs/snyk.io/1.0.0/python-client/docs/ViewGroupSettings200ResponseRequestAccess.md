# ViewGroupSettings200ResponseRequestAccess

Can only be updated if `API_KEY` has edit access to request access settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enabled** | **bool** | Choose whether a user may request access to Snyk orgs in this group that they are not a member of. | 

## Example

```python
from openapi_client.models.view_group_settings200_response_request_access import ViewGroupSettings200ResponseRequestAccess

# TODO update the JSON string below
json = "{}"
# create an instance of ViewGroupSettings200ResponseRequestAccess from a JSON string
view_group_settings200_response_request_access_instance = ViewGroupSettings200ResponseRequestAccess.from_json(json)
# print the JSON string representation of the object
print(ViewGroupSettings200ResponseRequestAccess.to_json())

# convert the object into a dict
view_group_settings200_response_request_access_dict = view_group_settings200_response_request_access_instance.to_dict()
# create an instance of ViewGroupSettings200ResponseRequestAccess from a dict
view_group_settings200_response_request_access_from_dict = ViewGroupSettings200ResponseRequestAccess.from_dict(view_group_settings200_response_request_access_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


