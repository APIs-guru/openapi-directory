# IndexAdvice

Recommendation to add new indexes to run queries more efficiently.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ddl** | **List[str]** | Optional. DDL statements to add new indexes that will improve the query. | [optional] 
**improvement_factor** | **float** | Optional. Estimated latency improvement factor. For example if the query currently takes 500 ms to run and the estimated latency with new indexes is 100 ms this field will be 5. | [optional] 

## Example

```python
from openapi_client.models.index_advice import IndexAdvice

# TODO update the JSON string below
json = "{}"
# create an instance of IndexAdvice from a JSON string
index_advice_instance = IndexAdvice.from_json(json)
# print the JSON string representation of the object
print(IndexAdvice.to_json())

# convert the object into a dict
index_advice_dict = index_advice_instance.to_dict()
# create an instance of IndexAdvice from a dict
index_advice_from_dict = IndexAdvice.from_dict(index_advice_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


