# GetIosReopenAttributionRequest

Request for iSDK to get reopen attribution for app universal link open deeplinking. This endpoint is meant for only iOS requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bundle_id** | **str** | APP bundle ID. | [optional] 
**requested_link** | **str** | FDL link to be verified from an app universal link open. The FDL link can be one of: 1) short FDL. e.g. .page.link/, or 2) long FDL. e.g. .page.link/?{query params}, or 3) Invite FDL. e.g. .page.link/i/ | [optional] 
**sdk_version** | **str** | Google SDK version. Version takes the form \&quot;$major.$minor.$patch\&quot; | [optional] 

## Example

```python
from openapi_client.models.get_ios_reopen_attribution_request import GetIosReopenAttributionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GetIosReopenAttributionRequest from a JSON string
get_ios_reopen_attribution_request_instance = GetIosReopenAttributionRequest.from_json(json)
# print the JSON string representation of the object
print(GetIosReopenAttributionRequest.to_json())

# convert the object into a dict
get_ios_reopen_attribution_request_dict = get_ios_reopen_attribution_request_instance.to_dict()
# create an instance of GetIosReopenAttributionRequest from a dict
get_ios_reopen_attribution_request_from_dict = GetIosReopenAttributionRequest.from_dict(get_ios_reopen_attribution_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


