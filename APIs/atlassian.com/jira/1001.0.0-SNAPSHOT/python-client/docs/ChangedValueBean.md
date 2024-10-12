# ChangedValueBean

Details of names changed in the record event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**changed_from** | **str** | The value of the field before the change. | [optional] [readonly] 
**changed_to** | **str** | The value of the field after the change. | [optional] [readonly] 
**field_name** | **str** | The name of the field changed. | [optional] [readonly] 

## Example

```python
from openapi_client.models.changed_value_bean import ChangedValueBean

# TODO update the JSON string below
json = "{}"
# create an instance of ChangedValueBean from a JSON string
changed_value_bean_instance = ChangedValueBean.from_json(json)
# print the JSON string representation of the object
print(ChangedValueBean.to_json())

# convert the object into a dict
changed_value_bean_dict = changed_value_bean_instance.to_dict()
# create an instance of ChangedValueBean from a dict
changed_value_bean_from_dict = ChangedValueBean.from_dict(changed_value_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


