# BetaGroupAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** |  | [optional] 
**feedback_enabled** | **bool** |  | [optional] 
**is_internal_group** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**public_link** | **str** |  | [optional] 
**public_link_enabled** | **bool** |  | [optional] 
**public_link_id** | **str** |  | [optional] 
**public_link_limit** | **int** |  | [optional] 
**public_link_limit_enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.beta_group_attributes import BetaGroupAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupAttributes from a JSON string
beta_group_attributes_instance = BetaGroupAttributes.from_json(json)
# print the JSON string representation of the object
print(BetaGroupAttributes.to_json())

# convert the object into a dict
beta_group_attributes_dict = beta_group_attributes_instance.to_dict()
# create an instance of BetaGroupAttributes from a dict
beta_group_attributes_from_dict = BetaGroupAttributes.from_dict(beta_group_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


