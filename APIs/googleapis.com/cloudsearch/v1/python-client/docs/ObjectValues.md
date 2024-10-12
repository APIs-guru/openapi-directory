# ObjectValues

List of object values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**values** | [**List[StructuredDataObject]**](StructuredDataObject.md) |  | [optional] 

## Example

```python
from openapi_client.models.object_values import ObjectValues

# TODO update the JSON string below
json = "{}"
# create an instance of ObjectValues from a JSON string
object_values_instance = ObjectValues.from_json(json)
# print the JSON string representation of the object
print(ObjectValues.to_json())

# convert the object into a dict
object_values_dict = object_values_instance.to_dict()
# create an instance of ObjectValues from a dict
object_values_from_dict = ObjectValues.from_dict(object_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


