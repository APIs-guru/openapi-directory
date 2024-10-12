# Projection

The projection of document's fields to return.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | [**List[FieldReference]**](FieldReference.md) | The fields to return. If empty, all fields are returned. To only return the name of the document, use &#x60;[&#39;__name__&#39;]&#x60;. | [optional] 

## Example

```python
from openapi_client.models.projection import Projection

# TODO update the JSON string below
json = "{}"
# create an instance of Projection from a JSON string
projection_instance = Projection.from_json(json)
# print the JSON string representation of the object
print(Projection.to_json())

# convert the object into a dict
projection_dict = projection_instance.to_dict()
# create an instance of Projection from a dict
projection_from_dict = Projection.from_dict(projection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


