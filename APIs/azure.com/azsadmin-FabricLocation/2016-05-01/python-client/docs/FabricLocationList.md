# FabricLocationList

Pageable list of fabric locations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URI to the next page. | [optional] 
**value** | [**List[FabricLocation]**](FabricLocation.md) | List of fabric locations. | [optional] 

## Example

```python
from openapi_client.models.fabric_location_list import FabricLocationList

# TODO update the JSON string below
json = "{}"
# create an instance of FabricLocationList from a JSON string
fabric_location_list_instance = FabricLocationList.from_json(json)
# print the JSON string representation of the object
print(FabricLocationList.to_json())

# convert the object into a dict
fabric_location_list_dict = fabric_location_list_instance.to_dict()
# create an instance of FabricLocationList from a dict
fabric_location_list_from_dict = FabricLocationList.from_dict(fabric_location_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


