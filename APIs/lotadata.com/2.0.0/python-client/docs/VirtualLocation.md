# VirtualLocation

Virtual Address

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | [optional] 
**platform** | **str** |  | [optional] 
**url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.virtual_location import VirtualLocation

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualLocation from a JSON string
virtual_location_instance = VirtualLocation.from_json(json)
# print the JSON string representation of the object
print(VirtualLocation.to_json())

# convert the object into a dict
virtual_location_dict = virtual_location_instance.to_dict()
# create an instance of VirtualLocation from a dict
virtual_location_from_dict = VirtualLocation.from_dict(virtual_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


