# RestrictionChange

Information about restriction policy changes to a feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature** | **str** | The feature which had a change in restriction policy. | [optional] 
**new_restriction** | **str** | The restriction in place after the change. | [optional] 

## Example

```python
from openapi_client.models.restriction_change import RestrictionChange

# TODO update the JSON string below
json = "{}"
# create an instance of RestrictionChange from a JSON string
restriction_change_instance = RestrictionChange.from_json(json)
# print the JSON string representation of the object
print(RestrictionChange.to_json())

# convert the object into a dict
restriction_change_dict = restriction_change_instance.to_dict()
# create an instance of RestrictionChange from a dict
restriction_change_from_dict = RestrictionChange.from_dict(restriction_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


