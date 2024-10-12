# Criteria


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**has_completed_course** | **bool** |  | [optional] [default to True]
**has_passed_mandatory_assessed_quizzes** | **bool** |  | [optional] [default to True]

## Example

```python
from openapi_client.models.criteria import Criteria

# TODO update the JSON string below
json = "{}"
# create an instance of Criteria from a JSON string
criteria_instance = Criteria.from_json(json)
# print the JSON string representation of the object
print(Criteria.to_json())

# convert the object into a dict
criteria_dict = criteria_instance.to_dict()
# create an instance of Criteria from a dict
criteria_from_dict = Criteria.from_dict(criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


