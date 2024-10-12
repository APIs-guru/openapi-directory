# ValueConstraint

This type contains a list of the dependencies that identify when a particular value is available for a given aspect of a given category. Each dependency specifies the values of another aspect of the same category (the <i>control</i> aspect), for which the given value of the given aspect can also be selected by the seller. This container consists of constraint information for the corresponding product aspect value.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**applicable_for_localized_aspect_name** | **str** | The name of the control aspect on which the current aspect value depends. | [optional] 
**applicable_for_localized_aspect_values** | **List[str]** | Contains a list of the values of the control aspect on which this aspect&#39;s value depends. When the control aspect has any of the specified values, the current value of the current aspect will also be available. | [optional] 

## Example

```python
from openapi_client.models.value_constraint import ValueConstraint

# TODO update the JSON string below
json = "{}"
# create an instance of ValueConstraint from a JSON string
value_constraint_instance = ValueConstraint.from_json(json)
# print the JSON string representation of the object
print(ValueConstraint.to_json())

# convert the object into a dict
value_constraint_dict = value_constraint_instance.to_dict()
# create an instance of ValueConstraint from a dict
value_constraint_from_dict = ValueConstraint.from_dict(value_constraint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


