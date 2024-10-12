# OBWriteDomestic2Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource. | 
**initiation** | [**OBWriteDomestic2DataInitiation**](OBWriteDomestic2DataInitiation.md) |  | 

## Example

```python
from openapi_client.models.ob_write_domestic2_data import OBWriteDomestic2Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteDomestic2Data from a JSON string
ob_write_domestic2_data_instance = OBWriteDomestic2Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteDomestic2Data.to_json())

# convert the object into a dict
ob_write_domestic2_data_dict = ob_write_domestic2_data_instance.to_dict()
# create an instance of OBWriteDomestic2Data from a dict
ob_write_domestic2_data_from_dict = OBWriteDomestic2Data.from_dict(ob_write_domestic2_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


