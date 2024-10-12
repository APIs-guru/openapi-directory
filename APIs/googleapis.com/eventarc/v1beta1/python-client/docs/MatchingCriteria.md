# MatchingCriteria

Matches events based on exact matches on the CloudEvents attributes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attribute** | **str** | Required. The name of a CloudEvents attribute. Currently, only a subset of attributes can be specified. All triggers MUST provide a matching criteria for the &#39;type&#39; attribute. | [optional] 
**value** | **str** | Required. The value for the attribute. | [optional] 

## Example

```python
from openapi_client.models.matching_criteria import MatchingCriteria

# TODO update the JSON string below
json = "{}"
# create an instance of MatchingCriteria from a JSON string
matching_criteria_instance = MatchingCriteria.from_json(json)
# print the JSON string representation of the object
print(MatchingCriteria.to_json())

# convert the object into a dict
matching_criteria_dict = matching_criteria_instance.to_dict()
# create an instance of MatchingCriteria from a dict
matching_criteria_from_dict = MatchingCriteria.from_dict(matching_criteria_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


