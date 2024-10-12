# AccessControlRecordProperties

The properties of access control record.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**initiator_name** | **str** | The iSCSI initiator name (IQN). | 
**volume_count** | **int** | The number of volumes using the access control record. | [optional] [readonly] 

## Example

```python
from openapi_client.models.access_control_record_properties import AccessControlRecordProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AccessControlRecordProperties from a JSON string
access_control_record_properties_instance = AccessControlRecordProperties.from_json(json)
# print the JSON string representation of the object
print(AccessControlRecordProperties.to_json())

# convert the object into a dict
access_control_record_properties_dict = access_control_record_properties_instance.to_dict()
# create an instance of AccessControlRecordProperties from a dict
access_control_record_properties_from_dict = AccessControlRecordProperties.from_dict(access_control_record_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


