# OBWriteDomesticConsent4Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorisation** | [**OBWriteDomesticConsent4DataAuthorisation**](OBWriteDomesticConsent4DataAuthorisation.md) |  | [optional] 
**initiation** | [**OBWriteDomestic2DataInitiation**](OBWriteDomestic2DataInitiation.md) |  | 
**read_refund_account** | **str** | Specifies to share the refund account details with PISP | [optional] 
**sca_support_data** | [**OBSCASupportData1**](OBSCASupportData1.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_domestic_consent4_data import OBWriteDomesticConsent4Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticConsent4Data from a JSON string
ob_write_domestic_consent4_data_instance = OBWriteDomesticConsent4Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticConsent4Data.to_json())

# convert the object into a dict
ob_write_domestic_consent4_data_dict = ob_write_domestic_consent4_data_instance.to_dict()
# create an instance of OBWriteDomesticConsent4Data from a dict
ob_write_domestic_consent4_data_from_dict = OBWriteDomesticConsent4Data.from_dict(ob_write_domestic_consent4_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


