# ConditionInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value_a** | **str** | The compare condition bases&#39; value a | [optional] 
**value_b** | **str** | The compare condition bases&#39; value b | [optional] 

## Example

```python
from openapi_client.models.condition_inner import ConditionInner

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionInner from a JSON string
condition_inner_instance = ConditionInner.from_json(json)
# print the JSON string representation of the object
print(ConditionInner.to_json())

# convert the object into a dict
condition_inner_dict = condition_inner_instance.to_dict()
# create an instance of ConditionInner from a dict
condition_inner_from_dict = ConditionInner.from_dict(condition_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


