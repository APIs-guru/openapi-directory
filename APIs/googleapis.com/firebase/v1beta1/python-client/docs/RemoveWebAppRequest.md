# RemoveWebAppRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_missing** | **bool** | If set to true, and the App is not found, the request will succeed but no action will be taken on the server. | [optional] 
**etag** | **str** | Checksum provided in the WebApp resource. If provided, this checksum ensures that the client has an up-to-date value before proceeding. | [optional] 
**immediate** | **bool** | Determines whether to _immediately_ delete the WebApp. If set to true, the App is immediately deleted from the Project and cannot be restored to the Project. If not set, defaults to false, which means the App will be set to expire in 30 days. Within the 30 days, the App may be restored to the Project using UndeleteWebApp | [optional] 
**validate_only** | **bool** | If set to true, the request is only validated. The App will _not_ be removed. | [optional] 

## Example

```python
from openapi_client.models.remove_web_app_request import RemoveWebAppRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RemoveWebAppRequest from a JSON string
remove_web_app_request_instance = RemoveWebAppRequest.from_json(json)
# print the JSON string representation of the object
print(RemoveWebAppRequest.to_json())

# convert the object into a dict
remove_web_app_request_dict = remove_web_app_request_instance.to_dict()
# create an instance of RemoveWebAppRequest from a dict
remove_web_app_request_from_dict = RemoveWebAppRequest.from_dict(remove_web_app_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


