# ContentRestriction

A restriction for accessing the content of the file.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**owner_restricted** | **bool** | Whether the content restriction can only be modified or removed by a user who owns the file. For files in shared drives, any user with &#x60;organizer&#x60; capabilities can modify or remove this content restriction. | [optional] 
**read_only** | **bool** | Whether the content of the file is read-only. If a file is read-only, a new revision of the file may not be added, comments may not be added or modified, and the title of the file may not be modified. | [optional] 
**reason** | **str** | Reason for why the content of the file is restricted. This is only mutable on requests that also set &#x60;readOnly&#x3D;true&#x60;. | [optional] 
**restricting_user** | [**User**](User.md) |  | [optional] 
**restriction_time** | **datetime** | The time at which the content restriction was set (formatted RFC 3339 timestamp). Only populated if readOnly is true. | [optional] 
**system_restricted** | **bool** | Output only. Whether the content restriction was applied by the system, for example due to an esignature. Users cannot modify or remove system restricted content restrictions. | [optional] 
**type** | **str** | Output only. The type of the content restriction. Currently the only possible value is &#x60;globalContentRestriction&#x60;. | [optional] 

## Example

```python
from openapi_client.models.content_restriction import ContentRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ContentRestriction from a JSON string
content_restriction_instance = ContentRestriction.from_json(json)
# print the JSON string representation of the object
print(ContentRestriction.to_json())

# convert the object into a dict
content_restriction_dict = content_restriction_instance.to_dict()
# create an instance of ContentRestriction from a dict
content_restriction_from_dict = ContentRestriction.from_dict(content_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


