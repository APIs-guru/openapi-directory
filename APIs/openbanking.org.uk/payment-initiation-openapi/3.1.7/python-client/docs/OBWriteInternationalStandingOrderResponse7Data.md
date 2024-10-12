# OBWriteInternationalStandingOrderResponse7Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charges** | [**List[OBWriteDomesticConsentResponse5DataChargesInner]**](OBWriteDomesticConsentResponse5DataChargesInner.md) |  | [optional] 
**consent_id** | **str** | OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource. | 
**creation_date_time** | **datetime** | Date and time at which the resource was created.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 
**debtor** | [**OBCashAccountDebtor4**](OBCashAccountDebtor4.md) |  | [optional] 
**initiation** | [**OBWriteInternationalStandingOrderConsentResponse7DataInitiation**](OBWriteInternationalStandingOrderConsentResponse7DataInitiation.md) |  | 
**international_standing_order_id** | **str** | OB: Unique identification as assigned by the ASPSP to uniquely identify the international standing order resource. | 
**multi_authorisation** | [**OBWriteDomesticResponse5DataMultiAuthorisation**](OBWriteDomesticResponse5DataMultiAuthorisation.md) |  | [optional] 
**refund** | [**OBWriteInternationalStandingOrderResponse7DataRefund**](OBWriteInternationalStandingOrderResponse7DataRefund.md) |  | [optional] 
**status** | **str** | Specifies the status of resource in code form. | 
**status_update_date_time** | **datetime** | Date and time at which the resource status was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | 

## Example

```python
from openapi_client.models.ob_write_international_standing_order_response7_data import OBWriteInternationalStandingOrderResponse7Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalStandingOrderResponse7Data from a JSON string
ob_write_international_standing_order_response7_data_instance = OBWriteInternationalStandingOrderResponse7Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalStandingOrderResponse7Data.to_json())

# convert the object into a dict
ob_write_international_standing_order_response7_data_dict = ob_write_international_standing_order_response7_data_instance.to_dict()
# create an instance of OBWriteInternationalStandingOrderResponse7Data from a dict
ob_write_international_standing_order_response7_data_from_dict = OBWriteInternationalStandingOrderResponse7Data.from_dict(ob_write_international_standing_order_response7_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


