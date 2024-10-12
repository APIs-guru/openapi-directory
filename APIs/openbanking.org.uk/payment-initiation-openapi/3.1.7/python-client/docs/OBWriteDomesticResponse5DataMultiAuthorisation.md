# OBWriteDomesticResponse5DataMultiAuthorisation

The multiple authorisation flow response from the ASPSP.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date_time** | **datetime** | Date and time at which the requested authorisation flow must be completed.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**last_update_date_time** | **datetime** | Last date and time at the authorisation flow was updated.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**number_received** | **int** | Number of authorisations received. | [optional] 
**number_required** | **int** | Number of authorisations required for payment order (total required at the start of the multi authorisation journey). | [optional] 
**status** | **str** | Specifies the status of the authorisation flow in code form. | 

## Example

```python
from openapi_client.models.ob_write_domestic_response5_data_multi_authorisation import OBWriteDomesticResponse5DataMultiAuthorisation

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticResponse5DataMultiAuthorisation from a JSON string
ob_write_domestic_response5_data_multi_authorisation_instance = OBWriteDomesticResponse5DataMultiAuthorisation.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticResponse5DataMultiAuthorisation.to_json())

# convert the object into a dict
ob_write_domestic_response5_data_multi_authorisation_dict = ob_write_domestic_response5_data_multi_authorisation_instance.to_dict()
# create an instance of OBWriteDomesticResponse5DataMultiAuthorisation from a dict
ob_write_domestic_response5_data_multi_authorisation_from_dict = OBWriteDomesticResponse5DataMultiAuthorisation.from_dict(ob_write_domestic_response5_data_multi_authorisation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


