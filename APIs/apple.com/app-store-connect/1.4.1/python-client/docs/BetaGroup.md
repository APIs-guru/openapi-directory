# BetaGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaGroupAttributes**](BetaGroupAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**BetaGroupRelationships**](BetaGroupRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_group import BetaGroup

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroup from a JSON string
beta_group_instance = BetaGroup.from_json(json)
# print the JSON string representation of the object
print(BetaGroup.to_json())

# convert the object into a dict
beta_group_dict = beta_group_instance.to_dict()
# create an instance of BetaGroup from a dict
beta_group_from_dict = BetaGroup.from_dict(beta_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


