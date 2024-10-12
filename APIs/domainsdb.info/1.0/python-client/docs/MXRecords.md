# MXRecords


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exchange** | **str** | MX domain | [optional] 
**priority** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.mx_records import MXRecords

# TODO update the JSON string below
json = "{}"
# create an instance of MXRecords from a JSON string
mx_records_instance = MXRecords.from_json(json)
# print the JSON string representation of the object
print(MXRecords.to_json())

# convert the object into a dict
mx_records_dict = mx_records_instance.to_dict()
# create an instance of MXRecords from a dict
mx_records_from_dict = MXRecords.from_dict(mx_records_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


