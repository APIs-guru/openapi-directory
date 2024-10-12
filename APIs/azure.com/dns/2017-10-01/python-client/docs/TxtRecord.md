# TxtRecord

A TXT record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **List[str]** | The text value of this TXT record. | [optional] 

## Example

```python
from openapi_client.models.txt_record import TxtRecord

# TODO update the JSON string below
json = "{}"
# create an instance of TxtRecord from a JSON string
txt_record_instance = TxtRecord.from_json(json)
# print the JSON string representation of the object
print(TxtRecord.to_json())

# convert the object into a dict
txt_record_dict = txt_record_instance.to_dict()
# create an instance of TxtRecord from a dict
txt_record_from_dict = TxtRecord.from_dict(txt_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


