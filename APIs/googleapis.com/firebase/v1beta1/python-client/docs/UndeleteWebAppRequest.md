# UndeleteWebAppRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. | [optional] 
**validate_only** | **bool** | If set to true, the request is only validated. The App will _not_ be undeleted. | [optional] 

## Example

```python
from openapi_client.models.undelete_web_app_request import UndeleteWebAppRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UndeleteWebAppRequest from a JSON string
undelete_web_app_request_instance = UndeleteWebAppRequest.from_json(json)
# print the JSON string representation of the object
print(UndeleteWebAppRequest.to_json())

# convert the object into a dict
undelete_web_app_request_dict = undelete_web_app_request_instance.to_dict()
# create an instance of UndeleteWebAppRequest from a dict
undelete_web_app_request_from_dict = UndeleteWebAppRequest.from_dict(undelete_web_app_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


