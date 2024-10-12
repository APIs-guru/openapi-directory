# RequestCountAllocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**proxy** | **float** |  | [optional] 
**unify** | **float** |  | [optional] 
**vault** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.request_count_allocation import RequestCountAllocation

# TODO update the JSON string below
json = "{}"
# create an instance of RequestCountAllocation from a JSON string
request_count_allocation_instance = RequestCountAllocation.from_json(json)
# print the JSON string representation of the object
print(RequestCountAllocation.to_json())

# convert the object into a dict
request_count_allocation_dict = request_count_allocation_instance.to_dict()
# create an instance of RequestCountAllocation from a dict
request_count_allocation_from_dict = RequestCountAllocation.from_dict(request_count_allocation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


