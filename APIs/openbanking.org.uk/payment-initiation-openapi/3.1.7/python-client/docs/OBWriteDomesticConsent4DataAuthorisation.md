# OBWriteDomesticConsent4DataAuthorisation

The authorisation type request from the TPP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authorisation_type** | **str** | Type of authorisation flow requested. | 
**completion_date_time** | **datetime** | Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 

## Example

```python
from openapi_client.models.ob_write_domestic_consent4_data_authorisation import OBWriteDomesticConsent4DataAuthorisation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticConsent4DataAuthorisation from a JSON string
ob_write_domestic_consent4_data_authorisation_instance = OBWriteDomesticConsent4DataAuthorisation.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticConsent4DataAuthorisation.to_json())

# convert the object into a dict
ob_write_domestic_consent4_data_authorisation_dict = ob_write_domestic_consent4_data_authorisation_instance.to_dict()
# create an instance of OBWriteDomesticConsent4DataAuthorisation from a dict
ob_write_domestic_consent4_data_authorisation_from_dict = OBWriteDomesticConsent4DataAuthorisation.from_dict(ob_write_domestic_consent4_data_authorisation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


