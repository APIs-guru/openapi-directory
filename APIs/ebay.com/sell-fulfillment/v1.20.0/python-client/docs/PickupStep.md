# PickupStep

This type is used to indicate the merchant's store where the buyer will pickup their In-Store Pickup order. The <b>pickupStep</b> container is only returned for In-Store Pickup orders. The In-Store Pickup feature is supported in the US, Canada, UK, Germany, and Australia marketplaces.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**merchant_location_key** | **str** | A merchant-defined unique identifier of the merchant&#39;s store where the buyer will pick up their In-Store Pickup order.&lt;br&gt;&lt;br&gt; This field is always returned with the &lt;b&gt;pickupStep&lt;/b&gt; container. | [optional] 

## Example

```python
from openapi_client.models.pickup_step import PickupStep

# TODO update the JSON string below
json = "{}"
# create an instance of PickupStep from a JSON string
pickup_step_instance = PickupStep.from_json(json)
# print the JSON string representation of the object
print(PickupStep.to_json())

# convert the object into a dict
pickup_step_dict = pickup_step_instance.to_dict()
# create an instance of PickupStep from a dict
pickup_step_from_dict = PickupStep.from_dict(pickup_step_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


