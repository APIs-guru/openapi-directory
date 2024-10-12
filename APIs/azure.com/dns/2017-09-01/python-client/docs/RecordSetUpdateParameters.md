# RecordSetUpdateParameters

Parameters supplied to update a record set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**record_set** | [**RecordSet**](RecordSet.md) |  | [optional] 

## Example

```python
from openapi_client.models.record_set_update_parameters import RecordSetUpdateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of RecordSetUpdateParameters from a JSON string
record_set_update_parameters_instance = RecordSetUpdateParameters.from_json(json)
# print the JSON string representation of the object
print(RecordSetUpdateParameters.to_json())

# convert the object into a dict
record_set_update_parameters_dict = record_set_update_parameters_instance.to_dict()
# create an instance of RecordSetUpdateParameters from a dict
record_set_update_parameters_from_dict = RecordSetUpdateParameters.from_dict(record_set_update_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


