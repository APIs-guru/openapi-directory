# MoveFieldBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**after** | **str** | The ID of the screen tab field after which to place the moved screen tab field. Required if &#x60;position&#x60; isn&#39;t provided. | [optional] 
**position** | **str** | The named position to which the screen tab field should be moved. Required if &#x60;after&#x60; isn&#39;t provided. | [optional] 

## Example

```python
from openapi_client.models.move_field_bean import MoveFieldBean

# TODO update the JSON string below
json = "{}"
# create an instance of MoveFieldBean from a JSON string
move_field_bean_instance = MoveFieldBean.from_json(json)
# print the JSON string representation of the object
print(MoveFieldBean.to_json())

# convert the object into a dict
move_field_bean_dict = move_field_bean_instance.to_dict()
# create an instance of MoveFieldBean from a dict
move_field_bean_from_dict = MoveFieldBean.from_dict(move_field_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


