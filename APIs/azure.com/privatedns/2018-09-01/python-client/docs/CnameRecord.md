# CnameRecord

A CNAME record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cname** | **str** | The canonical name for this CNAME record. | [optional] 

## Example

```python
from openapi_client.models.cname_record import CnameRecord

# TODO update the JSON string below
json = "{}"
# create an instance of CnameRecord from a JSON string
cname_record_instance = CnameRecord.from_json(json)
# print the JSON string representation of the object
print(CnameRecord.to_json())

# convert the object into a dict
cname_record_dict = cname_record_instance.to_dict()
# create an instance of CnameRecord from a dict
cname_record_from_dict = CnameRecord.from_dict(cname_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


