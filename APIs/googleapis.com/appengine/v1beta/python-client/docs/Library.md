# Library

Third-party Python runtime library that is required by the application.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Name of the library. Example: \&quot;django\&quot;. | [optional] 
**version** | **str** | Version of the library to select, or \&quot;latest\&quot;. | [optional] 

## Example

```python
from openapi_client.models.library import Library

# TODO update the JSON string below
json = "{}"
# create an instance of Library from a JSON string
library_instance = Library.from_json(json)
# print the JSON string representation of the object
print(Library.to_json())

# convert the object into a dict
library_dict = library_instance.to_dict()
# create an instance of Library from a dict
library_from_dict = Library.from_dict(library_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


