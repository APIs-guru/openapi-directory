# DisksGet200Response

Managed Disk.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**DisksList200ResponseValueInnerProperties**](DisksList200ResponseValueInnerProperties.md) |  | [optional] 
**id** | **str** | ID of the resource. | [optional] [readonly] 
**location** | **str** | Location of the resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**type** | **str** | Type of Resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.disks_get200_response import DisksGet200Response

# TODO update the JSON string below
json = "{}"
# create an instance of DisksGet200Response from a JSON string
disks_get200_response_instance = DisksGet200Response.from_json(json)
# print the JSON string representation of the object
print(DisksGet200Response.to_json())

# convert the object into a dict
disks_get200_response_dict = disks_get200_response_instance.to_dict()
# create an instance of DisksGet200Response from a dict
disks_get200_response_from_dict = DisksGet200Response.from_dict(disks_get200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


