# GoogleDevtoolsRemoteworkersV1test2AdminTemp

AdminTemp is a prelimiary set of administration tasks. It's called \"Temp\" because we do not yet know the best way to represent admin tasks; it's possible that this will be entirely replaced in later versions of this API. If this message proves to be sufficient, it will be renamed in the alpha or beta release of this API. This message (suitably marshalled into a protobuf.Any) can be used as the inline_assignment field in a lease; the lease assignment field should simply be `\"admin\"` in these cases. This message is heavily based on Swarming administration tasks from the LUCI project (http://github.com/luci/luci-py/appengine/swarming).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**arg** | **str** | The argument to the admin action; see &#x60;Command&#x60; for semantics. | [optional] 
**command** | **str** | The admin action; see &#x60;Command&#x60; for legal values. | [optional] 

## Example

```python
from openapi_client.models.google_devtools_remoteworkers_v1test2_admin_temp import GoogleDevtoolsRemoteworkersV1test2AdminTemp

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleDevtoolsRemoteworkersV1test2AdminTemp from a JSON string
google_devtools_remoteworkers_v1test2_admin_temp_instance = GoogleDevtoolsRemoteworkersV1test2AdminTemp.from_json(json)
# print the JSON string representation of the object
print(GoogleDevtoolsRemoteworkersV1test2AdminTemp.to_json())

# convert the object into a dict
google_devtools_remoteworkers_v1test2_admin_temp_dict = google_devtools_remoteworkers_v1test2_admin_temp_instance.to_dict()
# create an instance of GoogleDevtoolsRemoteworkersV1test2AdminTemp from a dict
google_devtools_remoteworkers_v1test2_admin_temp_from_dict = GoogleDevtoolsRemoteworkersV1test2AdminTemp.from_dict(google_devtools_remoteworkers_v1test2_admin_temp_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


