# OBWriteInternationalScheduled3Data


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_id** | **str** | OB: Unique identification as assigned by the ASPSP to uniquely identify the consent resource. | 
**initiation** | [**OBWriteInternationalScheduled3DataInitiation**](OBWriteInternationalScheduled3DataInitiation.md) |  | 

## Example

```python
from openapi_client.models.ob_write_international_scheduled3_data import OBWriteInternationalScheduled3Data

# TODO update the JSON string below
json = "{}"
# create an instance of OBWriteInternationalScheduled3Data from a JSON string
ob_write_international_scheduled3_data_instance = OBWriteInternationalScheduled3Data.from_json(json)
# print the JSON string representation of the object
print(OBWriteInternationalScheduled3Data.to_json())

# convert the object into a dict
ob_write_international_scheduled3_data_dict = ob_write_international_scheduled3_data_instance.to_dict()
# create an instance of OBWriteInternationalScheduled3Data from a dict
ob_write_international_scheduled3_data_from_dict = OBWriteInternationalScheduled3Data.from_dict(ob_write_international_scheduled3_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


