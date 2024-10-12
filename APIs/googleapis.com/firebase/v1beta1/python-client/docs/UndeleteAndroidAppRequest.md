# UndeleteAndroidAppRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Checksum provided in the AndroidApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. | [optional] 
**validate_only** | **bool** | If set to true, the request is only validated. The App will _not_ be undeleted. | [optional] 

## Example

```python
from openapi_client.models.undelete_android_app_request import UndeleteAndroidAppRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteAndroidAppRequest from a JSON string
undelete_android_app_request_instance = UndeleteAndroidAppRequest.from_json(json)
# print the JSON string representation of the object
print(UndeleteAndroidAppRequest.to_json())

# convert the object into a dict
undelete_android_app_request_dict = undelete_android_app_request_instance.to_dict()
# create an instance of UndeleteAndroidAppRequest from a dict
undelete_android_app_request_from_dict = UndeleteAndroidAppRequest.from_dict(undelete_android_app_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


