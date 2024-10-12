# IssueLinkTypes

A list of issue link type beans.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**issue_link_types** | [**List[IssueLinkType]**](IssueLinkType.md) | The issue link type bean. | [optional] [readonly] 

## Example

```python
from openapi_client.models.issue_link_types import IssueLinkTypes

# TODO update the JSON string below
json = "{}"
# create an instance of IssueLinkTypes from a JSON string
issue_link_types_instance = IssueLinkTypes.from_json(json)
# print the JSON string representation of the object
print(IssueLinkTypes.to_json())

# convert the object into a dict
issue_link_types_dict = issue_link_types_instance.to_dict()
# create an instance of IssueLinkTypes from a dict
issue_link_types_from_dict = IssueLinkTypes.from_dict(issue_link_types_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


