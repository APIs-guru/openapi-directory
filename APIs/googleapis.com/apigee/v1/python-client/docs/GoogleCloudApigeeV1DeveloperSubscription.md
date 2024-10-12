# GoogleCloudApigeeV1DeveloperSubscription

Structure of a DeveloperSubscription.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apiproduct** | **str** | Name of the API product for which the developer is purchasing a subscription. | [optional] 
**created_at** | **str** | Output only. Time when the API product subscription was created in milliseconds since epoch. | [optional] [readonly] 
**end_time** | **str** | Time when the API product subscription ends in milliseconds since epoch. | [optional] 
**last_modified_at** | **str** | Output only. Time when the API product subscription was last modified in milliseconds since epoch. | [optional] [readonly] 
**name** | **str** | Output only. Name of the API product subscription. | [optional] [readonly] 
**start_time** | **str** | Time when the API product subscription starts in milliseconds since epoch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_developer_subscription import GoogleCloudApigeeV1DeveloperSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeveloperSubscription from a JSON string
google_cloud_apigee_v1_developer_subscription_instance = GoogleCloudApigeeV1DeveloperSubscription.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeveloperSubscription.to_json())

# convert the object into a dict
google_cloud_apigee_v1_developer_subscription_dict = google_cloud_apigee_v1_developer_subscription_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeveloperSubscription from a dict
google_cloud_apigee_v1_developer_subscription_from_dict = GoogleCloudApigeeV1DeveloperSubscription.from_dict(google_cloud_apigee_v1_developer_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


