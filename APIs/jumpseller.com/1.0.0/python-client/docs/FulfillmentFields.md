# FulfillmentFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**external_id** | **str** | Unique identifier of the Fulfillment used by the tracking company | [optional] 
**id** | **int** | Unique identifier of the Fulfillment | [optional] 
**order_id** | **str** | Order associated with the fulfillment | [optional] 
**service_type** | **str** | Type of Service requested to the tracking company | [optional] 
**shipment_status** | **str** | Status of the fulfillment | [optional] 
**tracking_company** | **str** | Tracking company responsible for the fulfillment | [optional] 
**tracking_number** | **str** | Tracking Number associated with the fulfillment | [optional] 
**type** | **str** | Type of fulfillment Service used | [optional] 

## Example

```python
from openapi_client.models.fulfillment_fields import FulfillmentFields

# TODO update the JSON string below
json = "{}"
# create an instance of FulfillmentFields from a JSON string
fulfillment_fields_instance = FulfillmentFields.from_json(json)
# print the JSON string representation of the object
print(FulfillmentFields.to_json())

# convert the object into a dict
fulfillment_fields_dict = fulfillment_fields_instance.to_dict()
# create an instance of FulfillmentFields from a dict
fulfillment_fields_from_dict = FulfillmentFields.from_dict(fulfillment_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


