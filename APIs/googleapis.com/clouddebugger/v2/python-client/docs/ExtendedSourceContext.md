# ExtendedSourceContext

An ExtendedSourceContext is a SourceContext combined with additional details describing the context.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**SourceContext**](SourceContext.md) |  | [optional] 
**labels** | **Dict[str, str]** | Labels with user defined metadata. | [optional] 

## Example

```python
from openapi_client.models.extended_source_context import ExtendedSourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of ExtendedSourceContext from a JSON string
extended_source_context_instance = ExtendedSourceContext.from_json(json)
# print the JSON string representation of the object
print(ExtendedSourceContext.to_json())

# convert the object into a dict
extended_source_context_dict = extended_source_context_instance.to_dict()
# create an instance of ExtendedSourceContext from a dict
extended_source_context_from_dict = ExtendedSourceContext.from_dict(extended_source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


