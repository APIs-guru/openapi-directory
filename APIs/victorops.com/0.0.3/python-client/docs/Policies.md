# Policies

Paging policies accociated which this user

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**policies** | [**List[PagingPolicy]**](PagingPolicy.md) |  | [optional] 
**user_id** | **int** |  | [optional] 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.policies import Policies

# TODO update the JSON string below
json = "{}"
# create an instance of Policies from a JSON string
policies_instance = Policies.from_json(json)
# print the JSON string representation of the object
print(Policies.to_json())

# convert the object into a dict
policies_dict = policies_instance.to_dict()
# create an instance of Policies from a dict
policies_from_dict = Policies.from_dict(policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


