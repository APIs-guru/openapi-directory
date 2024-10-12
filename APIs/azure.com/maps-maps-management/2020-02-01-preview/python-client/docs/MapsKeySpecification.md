# MapsKeySpecification

Whether the operation refers to the primary or secondary key.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key_type** | **str** | Whether the operation refers to the primary or secondary key. | 

## Example

```python
from openapi_client.models.maps_key_specification import MapsKeySpecification

# TODO update the JSON string below
json = "{}"
# create an instance of MapsKeySpecification from a JSON string
maps_key_specification_instance = MapsKeySpecification.from_json(json)
# print the JSON string representation of the object
print(MapsKeySpecification.to_json())

# convert the object into a dict
maps_key_specification_dict = maps_key_specification_instance.to_dict()
# create an instance of MapsKeySpecification from a dict
maps_key_specification_from_dict = MapsKeySpecification.from_dict(maps_key_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


