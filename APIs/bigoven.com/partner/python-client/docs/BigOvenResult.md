# BigOvenResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** |  | [optional] 
**message** | **str** |  | [optional] 
**status_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.big_oven_result import BigOvenResult

# TODO update the JSON string below
json = "{}"
# create an instance of BigOvenResult from a JSON string
big_oven_result_instance = BigOvenResult.from_json(json)
# print the JSON string representation of the object
print(BigOvenResult.to_json())

# convert the object into a dict
big_oven_result_dict = big_oven_result_instance.to_dict()
# create an instance of BigOvenResult from a dict
big_oven_result_from_dict = BigOvenResult.from_dict(big_oven_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


