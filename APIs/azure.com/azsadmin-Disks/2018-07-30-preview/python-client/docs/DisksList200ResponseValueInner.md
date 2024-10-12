# DisksList200ResponseValueInner

Managed Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DisksList200ResponseValueInnerProperties**](DisksList200ResponseValueInnerProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.disks_list200_response_value_inner import DisksList200ResponseValueInner

# TODO update the JSON string below
json = "{}"
# create an instance of DisksList200ResponseValueInner from a JSON string
disks_list200_response_value_inner_instance = DisksList200ResponseValueInner.from_json(json)
# print the JSON string representation of the object
print(DisksList200ResponseValueInner.to_json())

# convert the object into a dict
disks_list200_response_value_inner_dict = disks_list200_response_value_inner_instance.to_dict()
# create an instance of DisksList200ResponseValueInner from a dict
disks_list200_response_value_inner_from_dict = DisksList200ResponseValueInner.from_dict(disks_list200_response_value_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


