# FabricLocation

Fabric Location resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**FabricLocationModel**](FabricLocationModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | The region where the resource is located. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.fabric_location import FabricLocation

# TODO update the JSON string below
json = "{}"
# create an instance of FabricLocation from a JSON string
fabric_location_instance = FabricLocation.from_json(json)
# print the JSON string representation of the object
print(FabricLocation.to_json())

# convert the object into a dict
fabric_location_dict = fabric_location_instance.to_dict()
# create an instance of FabricLocation from a dict
fabric_location_from_dict = FabricLocation.from_dict(fabric_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


