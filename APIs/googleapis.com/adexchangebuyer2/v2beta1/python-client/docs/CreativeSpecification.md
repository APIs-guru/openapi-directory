# CreativeSpecification

Represents information for a creative that is associated with a Programmatic Guaranteed/Preferred Deal in Ad Manager.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creative_companion_sizes** | [**List[AdSize]**](AdSize.md) | Companion sizes may be filled in only when this is a video creative. | [optional] 
**creative_size** | [**AdSize**](AdSize.md) |  | [optional] 

## Example

```python
from openapi_client.models.creative_specification import CreativeSpecification

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeSpecification from a JSON string
creative_specification_instance = CreativeSpecification.from_json(json)
# print the JSON string representation of the object
print(CreativeSpecification.to_json())

# convert the object into a dict
creative_specification_dict = creative_specification_instance.to_dict()
# create an instance of CreativeSpecification from a dict
creative_specification_from_dict = CreativeSpecification.from_dict(creative_specification_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


