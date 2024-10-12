# Cause


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**var_field** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.cause import Cause

# TODO update the JSON string below
json = "{}"
# create an instance of Cause from a JSON string
cause_instance = Cause.from_json(json)
# print the JSON string representation of the object
print(Cause.to_json())

# convert the object into a dict
cause_dict = cause_instance.to_dict()
# create an instance of Cause from a dict
cause_from_dict = Cause.from_dict(cause_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


