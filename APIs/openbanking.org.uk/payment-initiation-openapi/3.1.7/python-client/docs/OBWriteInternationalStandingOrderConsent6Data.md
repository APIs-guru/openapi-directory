# OBWriteInternationalStandingOrderConsent6Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorisation** | [**OBWriteDomesticConsent4DataAuthorisation**](OBWriteDomesticConsent4DataAuthorisation.md) |  | [optional] 
**initiation** | [**OBWriteInternationalStandingOrder4DataInitiation**](OBWriteInternationalStandingOrder4DataInitiation.md) |  | 
**permission** | **str** | Specifies the Open Banking service request types. | 
**read_refund_account** | **str** | Specifies to share the refund account details with PISP | [optional] 
**sca_support_data** | [**OBSCASupportData1**](OBSCASupportData1.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_international_standing_order_consent6_data import OBWriteInternationalStandingOrderConsent6Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalStandingOrderConsent6Data from a JSON string
ob_write_international_standing_order_consent6_data_instance = OBWriteInternationalStandingOrderConsent6Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalStandingOrderConsent6Data.to_json())

# convert the object into a dict
ob_write_international_standing_order_consent6_data_dict = ob_write_international_standing_order_consent6_data_instance.to_dict()
# create an instance of OBWriteInternationalStandingOrderConsent6Data from a dict
ob_write_international_standing_order_consent6_data_from_dict = OBWriteInternationalStandingOrderConsent6Data.from_dict(ob_write_international_standing_order_consent6_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


