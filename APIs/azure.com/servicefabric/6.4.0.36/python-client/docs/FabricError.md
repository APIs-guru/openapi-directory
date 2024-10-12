# FabricError

The REST API operations for Service Fabric return standard HTTP status codes. This type defines the additional information returned from the Service Fabric API operations that are not successful.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | [**FabricErrorError**](FabricErrorError.md) |  | 

## Example

```python
from openapi_client.models.fabric_error import FabricError

# TODO update the JSON string below
json = "{}"
# create an instance of FabricError from a JSON string
fabric_error_instance = FabricError.from_json(json)
# print the JSON string representation of the object
print(FabricError.to_json())

# convert the object into a dict
fabric_error_dict = fabric_error_instance.to_dict()
# create an instance of FabricError from a dict
fabric_error_from_dict = FabricError.from_dict(fabric_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


