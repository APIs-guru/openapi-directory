# IntegrationRetrieve

IntegrationSerializer for Retrieve endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bic** | **str** |  | [optional] 
**countries** | **List[str]** |  | 
**id** | **str** |  | 
**logo** | **str** |  | 
**name** | **str** |  | 
**supported_features** | **List[object]** |  | 
**supported_payments** | **Dict[str, object]** |  | 
**transaction_total_days** | **str** |  | [optional] [default to '90']

## Example

```python
from openapi_client.models.integration_retrieve import IntegrationRetrieve

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationRetrieve from a JSON string
integration_retrieve_instance = IntegrationRetrieve.from_json(json)
# print the JSON string representation of the object
print(IntegrationRetrieve.to_json())

# convert the object into a dict
integration_retrieve_dict = integration_retrieve_instance.to_dict()
# create an instance of IntegrationRetrieve from a dict
integration_retrieve_from_dict = IntegrationRetrieve.from_dict(integration_retrieve_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


