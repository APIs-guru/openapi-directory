# RequestsLimit


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_exceeded** | **bool** | Is Exceeded | [optional] 
**retry_after** | **datetime** | Retry After | [optional] 
**type** | [**List[Type]**](Type.md) | Type | [optional] 

## Example

```python
from openapi_client.models.requests_limit import RequestsLimit

# TODO update the JSON string below
json = "{}"
# create an instance of RequestsLimit from a JSON string
requests_limit_instance = RequestsLimit.from_json(json)
# print the JSON string representation of the object
print(RequestsLimit.to_json())

# convert the object into a dict
requests_limit_dict = requests_limit_instance.to_dict()
# create an instance of RequestsLimit from a dict
requests_limit_from_dict = RequestsLimit.from_dict(requests_limit_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


