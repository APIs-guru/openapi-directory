# DropInfo

Details of the final state \"drop\" and associated resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cause** | **str** | Cause that the packet is dropped. | [optional] 
**destination_ip** | **str** | Destination IP address of the dropped packet (if relevant). | [optional] 
**region** | **str** | Region of the dropped packet (if relevant). | [optional] 
**resource_uri** | **str** | URI of the resource that caused the drop. | [optional] 
**source_ip** | **str** | Source IP address of the dropped packet (if relevant). | [optional] 

## Example

```python
from openapi_client.models.drop_info import DropInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DropInfo from a JSON string
drop_info_instance = DropInfo.from_json(json)
# print the JSON string representation of the object
print(DropInfo.to_json())

# convert the object into a dict
drop_info_dict = drop_info_instance.to_dict()
# create an instance of DropInfo from a dict
drop_info_from_dict = DropInfo.from_dict(drop_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


