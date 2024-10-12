# GoogleCloudApigeeV1Operation

Represents the pairing of REST resource path and the actions (verbs) allowed on the resource path.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**methods** | **List[str]** | methods refers to the REST verbs as in https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html. When none specified, all verb types are allowed. | [optional] 
**resource** | **str** | Required. REST resource path associated with the API proxy or remote service. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_operation import GoogleCloudApigeeV1Operation

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Operation from a JSON string
google_cloud_apigee_v1_operation_instance = GoogleCloudApigeeV1Operation.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Operation.to_json())

# convert the object into a dict
google_cloud_apigee_v1_operation_dict = google_cloud_apigee_v1_operation_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Operation from a dict
google_cloud_apigee_v1_operation_from_dict = GoogleCloudApigeeV1Operation.from_dict(google_cloud_apigee_v1_operation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


