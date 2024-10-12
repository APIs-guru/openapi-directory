# BetaTesterResponseIncludedInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BuildAttributes**](BuildAttributes.md) |  | [optional] 
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**relationships** | [**BuildRelationships**](BuildRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_tester_response_included_inner import BetaTesterResponseIncludedInner

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterResponseIncludedInner from a JSON string
beta_tester_response_included_inner_instance = BetaTesterResponseIncludedInner.from_json(json)
# print the JSON string representation of the object
print(BetaTesterResponseIncludedInner.to_json())

# convert the object into a dict
beta_tester_response_included_inner_dict = beta_tester_response_included_inner_instance.to_dict()
# create an instance of BetaTesterResponseIncludedInner from a dict
beta_tester_response_included_inner_from_dict = BetaTesterResponseIncludedInner.from_dict(beta_tester_response_included_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


