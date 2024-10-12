# GoogleCloudChannelV1Constraints

Represents the constraints for buying the Offer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**customer_constraints** | [**GoogleCloudChannelV1CustomerConstraints**](GoogleCloudChannelV1CustomerConstraints.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_constraints import GoogleCloudChannelV1Constraints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Constraints from a JSON string
google_cloud_channel_v1_constraints_instance = GoogleCloudChannelV1Constraints.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Constraints.to_json())

# convert the object into a dict
google_cloud_channel_v1_constraints_dict = google_cloud_channel_v1_constraints_instance.to_dict()
# create an instance of GoogleCloudChannelV1Constraints from a dict
google_cloud_channel_v1_constraints_from_dict = GoogleCloudChannelV1Constraints.from_dict(google_cloud_channel_v1_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


