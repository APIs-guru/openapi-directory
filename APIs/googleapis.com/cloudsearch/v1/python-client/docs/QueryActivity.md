# QueryActivity

Details about a user's query activity.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query** | **str** | User input query to be logged/removed. | [optional] 

## Example

```python
from openapi_client.models.query_activity import QueryActivity

# TODO update the JSON string below
json = "{}"
# create an instance of QueryActivity from a JSON string
query_activity_instance = QueryActivity.from_json(json)
# print the JSON string representation of the object
print(QueryActivity.to_json())

# convert the object into a dict
query_activity_dict = query_activity_instance.to_dict()
# create an instance of QueryActivity from a dict
query_activity_from_dict = QueryActivity.from_dict(query_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


