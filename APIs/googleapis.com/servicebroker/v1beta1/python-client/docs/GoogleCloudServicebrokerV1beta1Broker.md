# GoogleCloudServicebrokerV1beta1Broker

Broker represents a consumable collection of Service Registry catalogs exposed as an OSB Broker.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Timestamp for when the broker was created. | [optional] 
**name** | **str** | Name of the broker in the format: &lt;projects&gt;/&lt;project-id&gt;/brokers/&lt;broker&gt;. This allows for multiple brokers per project which can be used to enable having custom brokers per GKE cluster, for example. | [optional] 
**title** | **str** | User friendly title of the broker. Limited to 1024 characters. Requests with longer titles will be rejected. | [optional] 
**url** | **str** | Output only. URL of the broker OSB-compliant endpoint, for example: https://servicebroker.googleapis.com/projects/&lt;project&gt;/brokers/&lt;broker&gt; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_servicebroker_v1beta1_broker import GoogleCloudServicebrokerV1beta1Broker

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudServicebrokerV1beta1Broker from a JSON string
google_cloud_servicebroker_v1beta1_broker_instance = GoogleCloudServicebrokerV1beta1Broker.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudServicebrokerV1beta1Broker.to_json())

# convert the object into a dict
google_cloud_servicebroker_v1beta1_broker_dict = google_cloud_servicebroker_v1beta1_broker_instance.to_dict()
# create an instance of GoogleCloudServicebrokerV1beta1Broker from a dict
google_cloud_servicebroker_v1beta1_broker_from_dict = GoogleCloudServicebrokerV1beta1Broker.from_dict(google_cloud_servicebroker_v1beta1_broker_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


