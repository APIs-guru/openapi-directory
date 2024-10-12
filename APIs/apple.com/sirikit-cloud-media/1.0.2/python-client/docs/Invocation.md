# Invocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**method** | **str** |  | 
**params** | **object** |  | 
**session** | [**Session**](Session.md) |  | [optional] 

## Example

```python
from openapi_client.models.invocation import Invocation

# TODO update the JSON string below
json = "{}"
# create an instance of Invocation from a JSON string
invocation_instance = Invocation.from_json(json)
# print the JSON string representation of the object
print(Invocation.to_json())

# convert the object into a dict
invocation_dict = invocation_instance.to_dict()
# create an instance of Invocation from a dict
invocation_from_dict = Invocation.from_dict(invocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


