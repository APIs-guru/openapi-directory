# CaaRecord

A CAA record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flags** | **int** | The flags for this CAA record as an integer between 0 and 255. | [optional] 
**tag** | **str** | The tag for this CAA record. | [optional] 
**value** | **str** | The value for this CAA record. | [optional] 

## Example

```python
from openapi_client.models.caa_record import CaaRecord

# TODO update the JSON string below
json = "{}"
# create an instance of CaaRecord from a JSON string
caa_record_instance = CaaRecord.from_json(json)
# print the JSON string representation of the object
print(CaaRecord.to_json())

# convert the object into a dict
caa_record_dict = caa_record_instance.to_dict()
# create an instance of CaaRecord from a dict
caa_record_from_dict = CaaRecord.from_dict(caa_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


