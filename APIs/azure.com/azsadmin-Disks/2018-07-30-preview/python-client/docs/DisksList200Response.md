# DisksList200Response

List of disks.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[DisksList200ResponseValueInner]**](DisksList200ResponseValueInner.md) | List of disks. | [optional] 

## Example

```python
from openapi_client.models.disks_list200_response import DisksList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DisksList200Response from a JSON string
disks_list200_response_instance = DisksList200Response.from_json(json)
# print the JSON string representation of the object
print(DisksList200Response.to_json())

# convert the object into a dict
disks_list200_response_dict = disks_list200_response_instance.to_dict()
# create an instance of DisksList200Response from a dict
disks_list200_response_from_dict = DisksList200Response.from_dict(disks_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


