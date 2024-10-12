# DeleteScheduledPickupResponseBody

A delete scheduled pickup response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickup_id** | **str** | Pickup Resource ID | 

## Example

```python
from openapi_client.models.delete_scheduled_pickup_response_body import DeleteScheduledPickupResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteScheduledPickupResponseBody from a JSON string
delete_scheduled_pickup_response_body_instance = DeleteScheduledPickupResponseBody.from_json(json)
# print the JSON string representation of the object
print(DeleteScheduledPickupResponseBody.to_json())

# convert the object into a dict
delete_scheduled_pickup_response_body_dict = delete_scheduled_pickup_response_body_instance.to_dict()
# create an instance of DeleteScheduledPickupResponseBody from a dict
delete_scheduled_pickup_response_body_from_dict = DeleteScheduledPickupResponseBody.from_dict(delete_scheduled_pickup_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


