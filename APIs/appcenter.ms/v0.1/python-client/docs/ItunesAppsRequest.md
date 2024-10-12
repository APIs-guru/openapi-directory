# ItunesAppsRequest

Apple credentials with username, password or service_connection_id of the stored credentials is needed along with team_identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookie** | **str** | The 30-day session cookie for multi-factor authentication backed accounts. | [optional] 
**password** | **str** | The password for the Apple Developer account. | [optional] 
**service_connection_id** | **str** | The service_connection_id of the stored Apple credentials instead of username, password. | [optional] 
**team_identifier** | **str** | Identifier of the team to use when logged in. | [optional] 
**username** | **str** | The username for the Apple Developer account. | [optional] 

## Example

```python
from openapi_client.models.itunes_apps_request import ItunesAppsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ItunesAppsRequest from a JSON string
itunes_apps_request_instance = ItunesAppsRequest.from_json(json)
# print the JSON string representation of the object
print(ItunesAppsRequest.to_json())

# convert the object into a dict
itunes_apps_request_dict = itunes_apps_request_instance.to_dict()
# create an instance of ItunesAppsRequest from a dict
itunes_apps_request_from_dict = ItunesAppsRequest.from_dict(itunes_apps_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


