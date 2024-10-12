# AccessControlRecordList

The collection of access control records.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[AccessControlRecord]**](AccessControlRecord.md) | The value. | 

## Example

```python
from openapi_client.models.access_control_record_list import AccessControlRecordList

# TODO update the JSON string below
json = "{}"
# create an instance of AccessControlRecordList from a JSON string
access_control_record_list_instance = AccessControlRecordList.from_json(json)
# print the JSON string representation of the object
print(AccessControlRecordList.to_json())

# convert the object into a dict
access_control_record_list_dict = access_control_record_list_instance.to_dict()
# create an instance of AccessControlRecordList from a dict
access_control_record_list_from_dict = AccessControlRecordList.from_dict(access_control_record_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


