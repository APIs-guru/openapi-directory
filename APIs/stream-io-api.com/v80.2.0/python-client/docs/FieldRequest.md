# FieldRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**short** | **bool** |  | [optional] 
**title** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.field_request import FieldRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FieldRequest from a JSON string
field_request_instance = FieldRequest.from_json(json)
# print the JSON string representation of the object
print(FieldRequest.to_json())

# convert the object into a dict
field_request_dict = field_request_instance.to_dict()
# create an instance of FieldRequest from a dict
field_request_from_dict = FieldRequest.from_dict(field_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


