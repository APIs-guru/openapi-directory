# ItunesTeamsRequest

Apple credentials with username, password or service_connection_id of the stored credentials is needed.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cookie** | **str** | The 30-day session cookie for multi-factor authentication backed accounts. | [optional] 
**password** | **str** | The password for the Apple Developer account. | [optional] 
**service_connection_id** | **str** | The service_connection_id of the stored Apple credentials instead of username, password. | [optional] 
**username** | **str** | The username for the Apple Developer account. | [optional] 

## Example

```python
from openapi_client.models.itunes_teams_request import ItunesTeamsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ItunesTeamsRequest from a JSON string
itunes_teams_request_instance = ItunesTeamsRequest.from_json(json)
# print the JSON string representation of the object
print(ItunesTeamsRequest.to_json())

# convert the object into a dict
itunes_teams_request_dict = itunes_teams_request_instance.to_dict()
# create an instance of ItunesTeamsRequest from a dict
itunes_teams_request_from_dict = ItunesTeamsRequest.from_dict(itunes_teams_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


