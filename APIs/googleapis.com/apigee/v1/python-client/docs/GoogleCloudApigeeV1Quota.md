# GoogleCloudApigeeV1Quota

Quota contains the essential parameters needed that can be applied on the resources, methods, API source combination associated with this API product. While Quota is optional, setting it prevents requests from exceeding the provisioned parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**interval** | **str** | Required. Time interval over which the number of request messages is calculated. | [optional] 
**limit** | **str** | Required. Upper limit allowed for the time interval and time unit specified. Requests exceeding this limit will be rejected. | [optional] 
**time_unit** | **str** | Time unit defined for the &#x60;interval&#x60;. Valid values include &#x60;minute&#x60;, &#x60;hour&#x60;, &#x60;day&#x60;, or &#x60;month&#x60;. If &#x60;limit&#x60; and &#x60;interval&#x60; are valid, the default value is &#x60;hour&#x60;; otherwise, the default is null. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_quota import GoogleCloudApigeeV1Quota

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Quota from a JSON string
google_cloud_apigee_v1_quota_instance = GoogleCloudApigeeV1Quota.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Quota.to_json())

# convert the object into a dict
google_cloud_apigee_v1_quota_dict = google_cloud_apigee_v1_quota_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Quota from a dict
google_cloud_apigee_v1_quota_from_dict = GoogleCloudApigeeV1Quota.from_dict(google_cloud_apigee_v1_quota_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


