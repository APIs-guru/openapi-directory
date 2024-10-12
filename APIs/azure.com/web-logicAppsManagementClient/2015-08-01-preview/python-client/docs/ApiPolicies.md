# ApiPolicies

API policies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** |  | [optional] 
**id** | **str** | Resource Id | [optional] 
**kind** | **str** | Kind of resource | [optional] 
**location** | **str** | Resource Location | 
**name** | **str** | Resource Name | [optional] 
**tags** | **Dict[str, str]** | Resource tags | [optional] 
**type** | **str** | Resource type | [optional] 

## Example

```python
from openapi_client.models.api_policies import ApiPolicies

# TODO update the JSON string below
json = "{}"
# create an instance of ApiPolicies from a JSON string
api_policies_instance = ApiPolicies.from_json(json)
# print the JSON string representation of the object
print(ApiPolicies.to_json())

# convert the object into a dict
api_policies_dict = api_policies_instance.to_dict()
# create an instance of ApiPolicies from a dict
api_policies_from_dict = ApiPolicies.from_dict(api_policies_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


