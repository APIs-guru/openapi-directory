# ODataError

Information about an error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | A language-independent error name. | [optional] 
**details** | [**List[ODataError]**](ODataError.md) | The error details. | [optional] 
**message** | **str** | The error message. | [optional] 
**target** | **str** | The target of the error (for example, the name of the property in error). | [optional] 

## Example

```python
from openapi_client.models.o_data_error import ODataError

# TODO update the JSON string below
json = "{}"
# create an instance of ODataError from a JSON string
o_data_error_instance = ODataError.from_json(json)
# print the JSON string representation of the object
print(ODataError.to_json())

# convert the object into a dict
o_data_error_dict = o_data_error_instance.to_dict()
# create an instance of ODataError from a dict
o_data_error_from_dict = ODataError.from_dict(o_data_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


