# CallRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**CallEntityRelation**](CallEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.call_relation import CallRelation

# TODO update the JSON string below
json = "{}"
# create an instance of CallRelation from a JSON string
call_relation_instance = CallRelation.from_json(json)
# print the JSON string representation of the object
print(CallRelation.to_json())

# convert the object into a dict
call_relation_dict = call_relation_instance.to_dict()
# create an instance of CallRelation from a dict
call_relation_from_dict = CallRelation.from_dict(call_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


