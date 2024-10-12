# Registration

An instruction to Classroom to send notifications from the `feed` to the provided destination.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cloud_pubsub_topic** | [**CloudPubsubTopic**](CloudPubsubTopic.md) |  | [optional] 
**expiry_time** | **str** | The time until which the &#x60;Registration&#x60; is effective. This is a read-only field assigned by the server. | [optional] 
**feed** | [**Feed**](Feed.md) |  | [optional] 
**registration_id** | **str** | A server-generated unique identifier for this &#x60;Registration&#x60;. Read-only. | [optional] 

## Example

```python
from openapi_client.models.registration import Registration

# TODO update the JSON string below
json = "{}"
# create an instance of Registration from a JSON string
registration_instance = Registration.from_json(json)
# print the JSON string representation of the object
print(Registration.to_json())

# convert the object into a dict
registration_dict = registration_instance.to_dict()
# create an instance of Registration from a dict
registration_from_dict = Registration.from_dict(registration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


