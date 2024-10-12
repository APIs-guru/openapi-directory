# BetaGroupCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feedback_enabled** | **bool** |  | [optional] 
**name** | **str** |  | 
**public_link_enabled** | **bool** |  | [optional] 
**public_link_limit** | **int** |  | [optional] 
**public_link_limit_enabled** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.beta_group_create_request_data_attributes import BetaGroupCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupCreateRequestDataAttributes from a JSON string
beta_group_create_request_data_attributes_instance = BetaGroupCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(BetaGroupCreateRequestDataAttributes.to_json())

# convert the object into a dict
beta_group_create_request_data_attributes_dict = beta_group_create_request_data_attributes_instance.to_dict()
# create an instance of BetaGroupCreateRequestDataAttributes from a dict
beta_group_create_request_data_attributes_from_dict = BetaGroupCreateRequestDataAttributes.from_dict(beta_group_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


