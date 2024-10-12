# ResourceSetDescription

The resource set description.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elements** | **List[str]** | The elements included in the set. | [optional] 
**exceptions** | **List[str]** | The elements that are not included in the set, in case elements contains &#39;*&#39; indicating &#39;all&#39;. | [optional] 

## Example

```python
from openapi_client.models.resource_set_description import ResourceSetDescription

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceSetDescription from a JSON string
resource_set_description_instance = ResourceSetDescription.from_json(json)
# print the JSON string representation of the object
print(ResourceSetDescription.to_json())

# convert the object into a dict
resource_set_description_dict = resource_set_description_instance.to_dict()
# create an instance of ResourceSetDescription from a dict
resource_set_description_from_dict = ResourceSetDescription.from_dict(resource_set_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


