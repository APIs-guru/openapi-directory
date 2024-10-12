# OperationStatusExtendedInfo

Base class for additional information of operation status.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_type** | **str** | This property will be used as the discriminator for deciding the specific types in the polymorphic chain of types. | 

## Example

```python
from openapi_client.models.operation_status_extended_info import OperationStatusExtendedInfo

# TODO update the JSON string below
json = "{}"
# create an instance of OperationStatusExtendedInfo from a JSON string
operation_status_extended_info_instance = OperationStatusExtendedInfo.from_json(json)
# print the JSON string representation of the object
print(OperationStatusExtendedInfo.to_json())

# convert the object into a dict
operation_status_extended_info_dict = operation_status_extended_info_instance.to_dict()
# create an instance of OperationStatusExtendedInfo from a dict
operation_status_extended_info_from_dict = OperationStatusExtendedInfo.from_dict(operation_status_extended_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


