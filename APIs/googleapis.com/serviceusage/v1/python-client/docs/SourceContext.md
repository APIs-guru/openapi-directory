# SourceContext

`SourceContext` represents information about the source of a protobuf element, like the file in which it is defined.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_name** | **str** | The path-qualified name of the .proto file that contained the associated protobuf element. For example: &#x60;\&quot;google/protobuf/source_context.proto\&quot;&#x60;. | [optional] 

## Example

```python
from openapi_client.models.source_context import SourceContext

# TODO update the JSON string below
json = "{}"
# create an instance of SourceContext from a JSON string
source_context_instance = SourceContext.from_json(json)
# print the JSON string representation of the object
print(SourceContext.to_json())

# convert the object into a dict
source_context_dict = source_context_instance.to_dict()
# create an instance of SourceContext from a dict
source_context_from_dict = SourceContext.from_dict(source_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


