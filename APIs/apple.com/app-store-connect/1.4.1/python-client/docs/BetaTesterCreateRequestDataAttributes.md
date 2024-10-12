# BetaTesterCreateRequestDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**first_name** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.beta_tester_create_request_data_attributes import BetaTesterCreateRequestDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterCreateRequestDataAttributes from a JSON string
beta_tester_create_request_data_attributes_instance = BetaTesterCreateRequestDataAttributes.from_json(json)
# print the JSON string representation of the object
print(BetaTesterCreateRequestDataAttributes.to_json())

# convert the object into a dict
beta_tester_create_request_data_attributes_dict = beta_tester_create_request_data_attributes_instance.to_dict()
# create an instance of BetaTesterCreateRequestDataAttributes from a dict
beta_tester_create_request_data_attributes_from_dict = BetaTesterCreateRequestDataAttributes.from_dict(beta_tester_create_request_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


