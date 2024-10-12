# FulfillmentCreateFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expected_arrival_from** | **str** | First date expected for the fulfillment to arrive at customer place | [optional] 
**expected_arrival_to** | **str** | Last date expected for the fulfillment to arrive at customer place | [optional] 
**external_id** | **str** | Unique identifier of the Fulfillment used by the tracking company | [optional] 
**order_id** | **str** | Order associated with the fulfillment | [optional] 
**service_type** | **str** | Type of Service requested to the tracking company | [optional] 
**shipment_status** | **str** | Status of the Fulfillment | [optional] 
**tracking_company** | **str** | Tracking company responsible for the fulfillment | [optional] 
**tracking_number** | **str** | Tracking Number associated with the fulfillment | [optional] 
**type** | **str** | Type of fulfillment Service used | [optional] 

## Example

```python
from openapi_client.models.fulfillment_create_fields import FulfillmentCreateFields

# TODO update the JSON string below
json = "{}"
# create an instance of FulfillmentCreateFields from a JSON string
fulfillment_create_fields_instance = FulfillmentCreateFields.from_json(json)
# print the JSON string representation of the object
print(FulfillmentCreateFields.to_json())

# convert the object into a dict
fulfillment_create_fields_dict = fulfillment_create_fields_instance.to_dict()
# create an instance of FulfillmentCreateFields from a dict
fulfillment_create_fields_from_dict = FulfillmentCreateFields.from_dict(fulfillment_create_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


