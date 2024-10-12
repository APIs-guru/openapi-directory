# BetaGroupCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**BetaGroupCreateRequestData**](BetaGroupCreateRequestData.md) |  | 

## Example

```python
from openapi_client.models.beta_group_create_request import BetaGroupCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BetaGroupCreateRequest from a JSON string
beta_group_create_request_instance = BetaGroupCreateRequest.from_json(json)
# print the JSON string representation of the object
print(BetaGroupCreateRequest.to_json())

# convert the object into a dict
beta_group_create_request_dict = beta_group_create_request_instance.to_dict()
# create an instance of BetaGroupCreateRequest from a dict
beta_group_create_request_from_dict = BetaGroupCreateRequest.from_dict(beta_group_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


