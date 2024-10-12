# BetaTesterCreateRequestData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | [**BetaTesterCreateRequestDataAttributes**](BetaTesterCreateRequestDataAttributes.md) |  | 
**relationships** | [**BetaTesterCreateRequestDataRelationships**](BetaTesterCreateRequestDataRelationships.md) |  | [optional] 
**type** | **str** |  | 

## Example

```python
from openapi_client.models.beta_tester_create_request_data import BetaTesterCreateRequestData

# TODO update the JSON string below
json = "{}"
# create an instance of BetaTesterCreateRequestData from a JSON string
beta_tester_create_request_data_instance = BetaTesterCreateRequestData.from_json(json)
# print the JSON string representation of the object
print(BetaTesterCreateRequestData.to_json())

# convert the object into a dict
beta_tester_create_request_data_dict = beta_tester_create_request_data_instance.to_dict()
# create an instance of BetaTesterCreateRequestData from a dict
beta_tester_create_request_data_from_dict = BetaTesterCreateRequestData.from_dict(beta_tester_create_request_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


