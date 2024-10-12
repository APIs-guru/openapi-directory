# BetaTester


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
from openapi_client.models.beta_tester import BetaTester

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTester from a JSON string
beta_tester_instance = BetaTester.from_json(json)
# print the JSON string representation of the object
print(BetaTester.to_json())

# convert the object into a dict
beta_tester_dict = beta_tester_instance.to_dict()
# create an instance of BetaTester from a dict
beta_tester_from_dict = BetaTester.from_dict(beta_tester_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


