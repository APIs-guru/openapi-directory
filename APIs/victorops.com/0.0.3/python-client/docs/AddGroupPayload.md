# AddGroupPayload


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rules** | [**List[PagingPolicyStepRuleAdd]**](PagingPolicyStepRuleAdd.md) |  | [optional] 
**timeout** | [**TimeoutType**](TimeoutType.md) |  | [optional] 

## Example

```python
from openapi_client.models.add_group_payload import AddGroupPayload

# TODO update the JSON string below
json = "{}"
# create an instance of AddGroupPayload from a JSON string
add_group_payload_instance = AddGroupPayload.from_json(json)
# print the JSON string representation of the object
print(AddGroupPayload.to_json())

# convert the object into a dict
add_group_payload_dict = add_group_payload_instance.to_dict()
# create an instance of AddGroupPayload from a dict
add_group_payload_from_dict = AddGroupPayload.from_dict(add_group_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


