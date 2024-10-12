# GoogleApiServiceusageV1Service

A service that is available for use by the consumer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**GoogleApiServiceusageV1ServiceConfig**](GoogleApiServiceusageV1ServiceConfig.md) |  | [optional] 
**name** | **str** | The resource name of the consumer and service. A valid name would be: - projects/123/services/serviceusage.googleapis.com | [optional] 
**parent** | **str** | The resource name of the consumer. A valid name would be: - projects/123 | [optional] 
**state** | **str** | Whether or not the service has been enabled for use by the consumer. | [optional] 

## Example

```python
from openapi_client.models.google_api_serviceusage_v1_service import GoogleApiServiceusageV1Service

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleApiServiceusageV1Service from a JSON string
google_api_serviceusage_v1_service_instance = GoogleApiServiceusageV1Service.from_json(json)
# print the JSON string representation of the object
print(GoogleApiServiceusageV1Service.to_json())

# convert the object into a dict
google_api_serviceusage_v1_service_dict = google_api_serviceusage_v1_service_instance.to_dict()
# create an instance of GoogleApiServiceusageV1Service from a dict
google_api_serviceusage_v1_service_from_dict = GoogleApiServiceusageV1Service.from_dict(google_api_serviceusage_v1_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


