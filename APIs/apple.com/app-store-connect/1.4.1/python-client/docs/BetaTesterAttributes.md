# BetaTesterAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**invite_type** | [**BetaInviteType**](BetaInviteType.md) |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.beta_tester_attributes import BetaTesterAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterAttributes from a JSON string
beta_tester_attributes_instance = BetaTesterAttributes.from_json(json)
# print the JSON string representation of the object
print(BetaTesterAttributes.to_json())

# convert the object into a dict
beta_tester_attributes_dict = beta_tester_attributes_instance.to_dict()
# create an instance of BetaTesterAttributes from a dict
beta_tester_attributes_from_dict = BetaTesterAttributes.from_dict(beta_tester_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


