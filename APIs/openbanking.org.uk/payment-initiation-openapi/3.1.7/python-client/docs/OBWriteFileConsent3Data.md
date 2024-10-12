# OBWriteFileConsent3Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorisation** | [**OBWriteDomesticConsent4DataAuthorisation**](OBWriteDomesticConsent4DataAuthorisation.md) |  | [optional] 
**initiation** | [**OBWriteFile2DataInitiation**](OBWriteFile2DataInitiation.md) |  | 
**sca_support_data** | [**OBSCASupportData1**](OBSCASupportData1.md) |  | [optional] 

## Example

```python
from openapi_client.models.ob_write_file_consent3_data import OBWriteFileConsent3Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteFileConsent3Data from a JSON string
ob_write_file_consent3_data_instance = OBWriteFileConsent3Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteFileConsent3Data.to_json())

# convert the object into a dict
ob_write_file_consent3_data_dict = ob_write_file_consent3_data_instance.to_dict()
# create an instance of OBWriteFileConsent3Data from a dict
ob_write_file_consent3_data_from_dict = OBWriteFileConsent3Data.from_dict(ob_write_file_consent3_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


