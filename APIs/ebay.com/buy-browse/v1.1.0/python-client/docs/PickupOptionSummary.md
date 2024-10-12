# PickupOptionSummary

The type that defines the fields for the local pickup options that are available for the item. It is used by the <b>  pickupOptions</b>  container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pickup_location_type** | **str** | This container returns the local pickup options available to the buyer. Possible values are ARRANGED_LOCATION and STORE. | [optional] 

## Example

```python
from openapi_client.models.pickup_option_summary import PickupOptionSummary

# TODO update the JSON string below
json = "{}"
# create an instance of PickupOptionSummary from a JSON string
pickup_option_summary_instance = PickupOptionSummary.from_json(json)
# print the JSON string representation of the object
print(PickupOptionSummary.to_json())

# convert the object into a dict
pickup_option_summary_dict = pickup_option_summary_instance.to_dict()
# create an instance of PickupOptionSummary from a dict
pickup_option_summary_from_dict = PickupOptionSummary.from_dict(pickup_option_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


