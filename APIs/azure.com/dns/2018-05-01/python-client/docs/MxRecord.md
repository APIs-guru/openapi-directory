# MxRecord

An MX record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **str** | The domain name of the mail host for this MX record. | [optional] 
**preference** | **int** | The preference value for this MX record. | [optional] 

## Example

```python
from openapi_client.models.mx_record import MxRecord

# TODO update the JSON string below
json = "{}"
# create an instance of MxRecord from a JSON string
mx_record_instance = MxRecord.from_json(json)
# print the JSON string representation of the object
print(MxRecord.to_json())

# convert the object into a dict
mx_record_dict = mx_record_instance.to_dict()
# create an instance of MxRecord from a dict
mx_record_from_dict = MxRecord.from_dict(mx_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


