# ApplicationStatusRequest

The information needed to fetch the status of an application

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_version** | **str** | The version of build for which real time status is to be fetched. | [optional] 
**bundle_identifier** | **str** | Bundle Identifier of application in Apple Itunes portal. | 
**password** | **str** | The password for the Apple Developer account. | 
**team_identifier** | **str** | Identifier of the team to use when logged in. | [optional] 
**track_identifier** | **str** | Track Identifier for which the status is to be fetched. | 
**train_version** | **str** | The Train version for which the status is to be fetched. | [optional] 
**username** | **str** | The username for the Apple Developer account. | 

## Example

```python
from openapi_client.models.application_status_request import ApplicationStatusRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationStatusRequest from a JSON string
application_status_request_instance = ApplicationStatusRequest.from_json(json)
# print the JSON string representation of the object
print(ApplicationStatusRequest.to_json())

# convert the object into a dict
application_status_request_dict = application_status_request_instance.to_dict()
# create an instance of ApplicationStatusRequest from a dict
application_status_request_from_dict = ApplicationStatusRequest.from_dict(application_status_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


