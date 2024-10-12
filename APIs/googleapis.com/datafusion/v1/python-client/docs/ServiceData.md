# ServiceData

This message defines service-specific data that certain service teams must provide as part of the Data Residency Augmented View for a resource. Next ID: 2

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**pd** | [**PersistentDiskData**](PersistentDiskData.md) |  | [optional] 

## Example

```python
from openapi_client.models.service_data import ServiceData

# TODO update the JSON string below
json = "{}"
# create an instance of ServiceData from a JSON string
service_data_instance = ServiceData.from_json(json)
# print the JSON string representation of the object
print(ServiceData.to_json())

# convert the object into a dict
service_data_dict = service_data_instance.to_dict()
# create an instance of ServiceData from a dict
service_data_from_dict = ServiceData.from_dict(service_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


