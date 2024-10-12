# Result

The consent evaluation result for a single `data_id`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**consent_details** | [**Dict[str, ConsentEvaluation]**](ConsentEvaluation.md) | The resource names of all evaluated Consents mapped to their evaluation. | [optional] 
**consented** | **bool** | Whether the resource is consented for the given use. | [optional] 
**data_id** | **str** | The unique identifier of the evaluated resource. | [optional] 

## Example

```python
from openapi_client.models.result import Result

# TODO update the JSON string below
json = "{}"
# create an instance of Result from a JSON string
result_instance = Result.from_json(json)
# print the JSON string representation of the object
print(Result.to_json())

# convert the object into a dict
result_dict = result_instance.to_dict()
# create an instance of Result from a dict
result_from_dict = Result.from_dict(result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


