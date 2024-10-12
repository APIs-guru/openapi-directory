# BetaGroupCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaGroupCreateRequestDataAttributes**](BetaGroupCreateRequestDataAttributes.md) |  | 
**relationships** | [**BetaGroupCreateRequestDataRelationships**](BetaGroupCreateRequestDataRelationships.md) |  | 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_group_create_request_data import BetaGroupCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupCreateRequestData from a JSON string
beta_group_create_request_data_instance = BetaGroupCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaGroupCreateRequestData.to_json())

# convert the object into a dict
beta_group_create_request_data_dict = beta_group_create_request_data_instance.to_dict()
# create an instance of BetaGroupCreateRequestData from a dict
beta_group_create_request_data_from_dict = BetaGroupCreateRequestData.from_dict(beta_group_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


