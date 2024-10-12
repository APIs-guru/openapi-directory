# OrganicResult

The result of a organic search request

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Number of results returned | [optional] 
**items** | **List[object]** |  | [optional] 
**total** | **int** | Approximate number of results meeting query | [optional] 

## Example

```python
from openapi_client.models.organic_result import OrganicResult

# TODO update the JSON string below
json = "{}"
# create an instance of OrganicResult from a JSON string
organic_result_instance = OrganicResult.from_json(json)
# print the JSON string representation of the object
print(OrganicResult.to_json())

# convert the object into a dict
organic_result_dict = organic_result_instance.to_dict()
# create an instance of OrganicResult from a dict
organic_result_from_dict = OrganicResult.from_dict(organic_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


