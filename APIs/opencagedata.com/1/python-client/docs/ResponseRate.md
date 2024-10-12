# ResponseRate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit** | **int** |  | [optional] 
**remaining** | **int** |  | [optional] 
**reset** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.response_rate import ResponseRate

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseRate from a JSON string
response_rate_instance = ResponseRate.from_json(json)
# print the JSON string representation of the object
print(ResponseRate.to_json())

# convert the object into a dict
response_rate_dict = response_rate_instance.to_dict()
# create an instance of ResponseRate from a dict
response_rate_from_dict = ResponseRate.from_dict(response_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


