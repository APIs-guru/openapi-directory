# GoogleCloudChannelV1PriceByResource

Represents price by resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**price** | [**GoogleCloudChannelV1Price**](GoogleCloudChannelV1Price.md) |  | [optional] 
**price_phases** | [**List[GoogleCloudChannelV1PricePhase]**](GoogleCloudChannelV1PricePhase.md) | Specifies the price by time range. | [optional] 
**resource_type** | **str** | Resource Type. Example: SEAT | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_price_by_resource import GoogleCloudChannelV1PriceByResource

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1PriceByResource from a JSON string
google_cloud_channel_v1_price_by_resource_instance = GoogleCloudChannelV1PriceByResource.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1PriceByResource.to_json())

# convert the object into a dict
google_cloud_channel_v1_price_by_resource_dict = google_cloud_channel_v1_price_by_resource_instance.to_dict()
# create an instance of GoogleCloudChannelV1PriceByResource from a dict
google_cloud_channel_v1_price_by_resource_from_dict = GoogleCloudChannelV1PriceByResource.from_dict(google_cloud_channel_v1_price_by_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


