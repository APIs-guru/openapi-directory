# TopLevelDomain

A top level domain object

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
from openapi_client.models.top_level_domain import TopLevelDomain

# TODO update the JSON string below
json = "{}"
# create an instance of TopLevelDomain from a JSON string
top_level_domain_instance = TopLevelDomain.from_json(json)
# print the JSON string representation of the object
print(TopLevelDomain.to_json())

# convert the object into a dict
top_level_domain_dict = top_level_domain_instance.to_dict()
# create an instance of TopLevelDomain from a dict
top_level_domain_from_dict = TopLevelDomain.from_dict(top_level_domain_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


