# BetaGroupResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaTesterAttributes**](BetaTesterAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**BetaTesterRelationships**](BetaTesterRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_group_response_included_inner import BetaGroupResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupResponseIncludedInner from a JSON string
beta_group_response_included_inner_instance = BetaGroupResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(BetaGroupResponseIncludedInner.to_json())

# convert the object into a dict
beta_group_response_included_inner_dict = beta_group_response_included_inner_instance.to_dict()
# create an instance of BetaGroupResponseIncludedInner from a dict
beta_group_response_included_inner_from_dict = BetaGroupResponseIncludedInner.from_dict(beta_group_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


