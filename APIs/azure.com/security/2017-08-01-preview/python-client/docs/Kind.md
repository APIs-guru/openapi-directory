# Kind

Describes an Azure resource with kind

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **str** | Kind of the resource | [optional] 

## Example

```python
from openapi_client.models.kind import Kind

# TODO update the JSON string below
json = "{}"
# create an instance of Kind from a JSON string
kind_instance = Kind.from_json(json)
# print the JSON string representation of the object
print(Kind.to_json())

# convert the object into a dict
kind_dict = kind_instance.to_dict()
# create an instance of Kind from a dict
kind_from_dict = Kind.from_dict(kind_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


