# ErrorXml

Error

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**messages** | [**List[ErrorMessage]**](ErrorMessage.md) |  | [optional] 

## Example

```python
from openapi_client.models.error_xml import ErrorXml

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorXml from a JSON string
error_xml_instance = ErrorXml.from_json(json)
# print the JSON string representation of the object
print(ErrorXml.to_json())

# convert the object into a dict
error_xml_dict = error_xml_instance.to_dict()
# create an instance of ErrorXml from a dict
error_xml_from_dict = ErrorXml.from_dict(error_xml_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


