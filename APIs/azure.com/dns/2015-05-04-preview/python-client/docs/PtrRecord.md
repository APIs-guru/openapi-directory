# PtrRecord

A PTR record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ptrdname** | **str** | Gets or sets the PTR target domain name for this record without a terminating dot. | [optional] 

## Example

```python
from openapi_client.models.ptr_record import PtrRecord

# TODO update the JSON string below
json = "{}"
# create an instance of PtrRecord from a JSON string
ptr_record_instance = PtrRecord.from_json(json)
# print the JSON string representation of the object
print(PtrRecord.to_json())

# convert the object into a dict
ptr_record_dict = ptr_record_instance.to_dict()
# create an instance of PtrRecord from a dict
ptr_record_from_dict = PtrRecord.from_dict(ptr_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


