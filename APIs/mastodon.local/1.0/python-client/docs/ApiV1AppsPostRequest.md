# ApiV1AppsPostRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_name** | **str** | A name for your application | 
**redirect_uris** | **str** | Where the user should be redirected after authorization. To display the authorization code to the user instead of redirecting to a web page, use urn:ietf:wg:oauth:2.0:oob in this parameter. | 
**scopes** | **str** | Space separated list of scopes. If none is provided, defaults to read. | [optional] 
**website** | **str** | A URL to the homepage of your app | [optional] 

## Example

```python
from openapi_client.models.api_v1_apps_post_request import ApiV1AppsPostRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApiV1AppsPostRequest from a JSON string
api_v1_apps_post_request_instance = ApiV1AppsPostRequest.from_json(json)
# print the JSON string representation of the object
print(ApiV1AppsPostRequest.to_json())

# convert the object into a dict
api_v1_apps_post_request_dict = api_v1_apps_post_request_instance.to_dict()
# create an instance of ApiV1AppsPostRequest from a dict
api_v1_apps_post_request_from_dict = ApiV1AppsPostRequest.from_dict(api_v1_apps_post_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


