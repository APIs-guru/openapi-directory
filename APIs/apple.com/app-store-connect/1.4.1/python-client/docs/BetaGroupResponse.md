# BetaGroupResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaGroup**](BetaGroup.md) |  | 
**included** | [**List[BetaGroupResponseIncludedInner]**](BetaGroupResponseIncludedInner.md) |  | [optional] 
**links** | [**DocumentLinks**](DocumentLinks.md) |  | 

## Example

```python
from openapi_client.models.beta_group_response import BetaGroupResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupResponse from a JSON string
beta_group_response_instance = BetaGroupResponse.from_json(json)
# print the JSON string representation of the object
print(BetaGroupResponse.to_json())

# convert the object into a dict
beta_group_response_dict = beta_group_response_instance.to_dict()
# create an instance of BetaGroupResponse from a dict
beta_group_response_from_dict = BetaGroupResponse.from_dict(beta_group_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


