# WhoIsBlueprintContract

Response schema for querying the Azure Blueprints service principal in the tenant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | AAD object Id of the Azure Blueprints service principal in the tenant. | [optional] 

## Example

```python
from openapi_client.models.who_is_blueprint_contract import WhoIsBlueprintContract

# TODO update the JSON string below
json = "{}"
# create an instance of WhoIsBlueprintContract from a JSON string
who_is_blueprint_contract_instance = WhoIsBlueprintContract.from_json(json)
# print the JSON string representation of the object
print(WhoIsBlueprintContract.to_json())

# convert the object into a dict
who_is_blueprint_contract_dict = who_is_blueprint_contract_instance.to_dict()
# create an instance of WhoIsBlueprintContract from a dict
who_is_blueprint_contract_from_dict = WhoIsBlueprintContract.from_dict(who_is_blueprint_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


