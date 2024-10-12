# OBWriteDomesticStandingOrder3Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource. | 
**initiation** | [**OBWriteDomesticStandingOrder3DataInitiation**](OBWriteDomesticStandingOrder3DataInitiation.md) |  | 

## Example

```python
from openapi_client.models.ob_write_domestic_standing_order3_data import OBWriteDomesticStandingOrder3Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomesticStandingOrder3Data from a JSON string
ob_write_domestic_standing_order3_data_instance = OBWriteDomesticStandingOrder3Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomesticStandingOrder3Data.to_json())

# convert the object into a dict
ob_write_domestic_standing_order3_data_dict = ob_write_domestic_standing_order3_data_instance.to_dict()
# create an instance of OBWriteDomesticStandingOrder3Data from a dict
ob_write_domestic_standing_order3_data_from_dict = OBWriteDomesticStandingOrder3Data.from_dict(ob_write_domestic_standing_order3_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


