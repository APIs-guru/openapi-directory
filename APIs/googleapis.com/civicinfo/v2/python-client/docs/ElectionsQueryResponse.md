# ElectionsQueryResponse

The list of elections available for this version of the API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**elections** | [**List[Election]**](Election.md) | A list of available elections | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;civicinfo#electionsQueryResponse\&quot;. | [optional] [default to 'civicinfo#electionsQueryResponse']

## Example

```python
from openapi_client.models.elections_query_response import ElectionsQueryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ElectionsQueryResponse from a JSON string
elections_query_response_instance = ElectionsQueryResponse.from_json(json)
# print the JSON string representation of the object
print(ElectionsQueryResponse.to_json())

# convert the object into a dict
elections_query_response_dict = elections_query_response_instance.to_dict()
# create an instance of ElectionsQueryResponse from a dict
elections_query_response_from_dict = ElectionsQueryResponse.from_dict(elections_query_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


