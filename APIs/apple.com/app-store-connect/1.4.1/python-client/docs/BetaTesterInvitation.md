# BetaTesterInvitation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**links** | [**ResourceLinks**](ResourceLinks.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_tester_invitation import BetaTesterInvitation

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterInvitation from a JSON string
beta_tester_invitation_instance = BetaTesterInvitation.from_json(json)
# print the JSON string representation of the object
print(BetaTesterInvitation.to_json())

# convert the object into a dict
beta_tester_invitation_dict = beta_tester_invitation_instance.to_dict()
# create an instance of BetaTesterInvitation from a dict
beta_tester_invitation_from_dict = BetaTesterInvitation.from_dict(beta_tester_invitation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


