# ParserConfig

The configuration for the parser. It determines how the server parses the messages.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_null_header** | **bool** | Determines whether messages with no header are allowed. | [optional] 
**var_schema** | [**SchemaPackage**](SchemaPackage.md) |  | [optional] 
**segment_terminator** | **bytearray** | Byte(s) to use as the segment terminator. If this is unset, &#39;\\r&#39; is used as segment terminator, matching the HL7 version 2 specification. | [optional] 
**version** | **str** | Immutable. Determines the version of both the default parser to be used when &#x60;schema&#x60; is not given, as well as the schematized parser used when &#x60;schema&#x60; is specified. This field is immutable after HL7v2 store creation. | [optional] 

## Example

```python
from openapi_client.models.parser_config import ParserConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ParserConfig from a JSON string
parser_config_instance = ParserConfig.from_json(json)
# print the JSON string representation of the object
print(ParserConfig.to_json())

# convert the object into a dict
parser_config_dict = parser_config_instance.to_dict()
# create an instance of ParserConfig from a dict
parser_config_from_dict = ParserConfig.from_dict(parser_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


