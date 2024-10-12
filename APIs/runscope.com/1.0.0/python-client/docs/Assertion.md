# Assertion


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comparison** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.assertion import Assertion

# TODO update the JSON string below
json = "{}"
# create an instance of Assertion from a JSON string
assertion_instance = Assertion.from_json(json)
# print the JSON string representation of the object
print(Assertion.to_json())

# convert the object into a dict
assertion_dict = assertion_instance.to_dict()
# create an instance of Assertion from a dict
assertion_from_dict = Assertion.from_dict(assertion_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


