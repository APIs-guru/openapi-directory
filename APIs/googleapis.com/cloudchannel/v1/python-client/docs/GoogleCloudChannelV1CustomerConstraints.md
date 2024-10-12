# GoogleCloudChannelV1CustomerConstraints

Represents constraints required to purchase the Offer for a customer.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_customer_types** | **List[str]** | Allowed Customer Type. | [optional] 
**allowed_regions** | **List[str]** | Allowed geographical regions of the customer. | [optional] 
**promotional_order_types** | **List[str]** | Allowed Promotional Order Type. Present for Promotional offers. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_customer_constraints import GoogleCloudChannelV1CustomerConstraints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1CustomerConstraints from a JSON string
google_cloud_channel_v1_customer_constraints_instance = GoogleCloudChannelV1CustomerConstraints.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1CustomerConstraints.to_json())

# convert the object into a dict
google_cloud_channel_v1_customer_constraints_dict = google_cloud_channel_v1_customer_constraints_instance.to_dict()
# create an instance of GoogleCloudChannelV1CustomerConstraints from a dict
google_cloud_channel_v1_customer_constraints_from_dict = GoogleCloudChannelV1CustomerConstraints.from_dict(google_cloud_channel_v1_customer_constraints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


