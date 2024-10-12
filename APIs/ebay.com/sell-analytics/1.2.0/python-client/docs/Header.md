# Header

Type that defines the headers for the dimension keys and metrics returned in the report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_keys** | [**List[Definition]**](Definition.md) | A list of the dimension or metric keys returned in the report. The values for each are is returned in the associated key fields. | [optional] 
**metrics** | [**List[Definition]**](Definition.md) | The list of metrics returned in the report. The values for each are is returned in the associated key fields. | [optional] 

## Example

```python
from openapi_client.models.header import Header

# TODO update the JSON string below
json = "{}"
# create an instance of Header from a JSON string
header_instance = Header.from_json(json)
# print the JSON string representation of the object
print(Header.to_json())

# convert the object into a dict
header_dict = header_instance.to_dict()
# create an instance of Header from a dict
header_from_dict = Header.from_dict(header_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


