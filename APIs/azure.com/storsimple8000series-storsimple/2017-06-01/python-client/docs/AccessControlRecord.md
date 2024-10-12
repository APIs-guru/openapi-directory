# AccessControlRecord

The access control record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**AccessControlRecordProperties**](AccessControlRecordProperties.md) |  | 
**id** | **str** | The path ID that uniquely identifies the object. | [optional] [readonly] 
**kind** | **str** | The Kind of the object. Currently only Series8000 is supported | [optional] 
**name** | **str** | The name of the object. | [optional] [readonly] 
**type** | **str** | The hierarchical type of the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.access_control_record import AccessControlRecord

# TODO update the JSON string below
json = "{}"
# create an instance of AccessControlRecord from a JSON string
access_control_record_instance = AccessControlRecord.from_json(json)
# print the JSON string representation of the object
print(AccessControlRecord.to_json())

# convert the object into a dict
access_control_record_dict = access_control_record_instance.to_dict()
# create an instance of AccessControlRecord from a dict
access_control_record_from_dict = AccessControlRecord.from_dict(access_control_record_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


