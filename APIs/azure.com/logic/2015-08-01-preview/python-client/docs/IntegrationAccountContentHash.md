# IntegrationAccountContentHash


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | The content hash algorithm. | [optional] 
**value** | **str** | The content hash value. | [optional] 

## Example

```python
from openapi_client.models.integration_account_content_hash import IntegrationAccountContentHash

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountContentHash from a JSON string
integration_account_content_hash_instance = IntegrationAccountContentHash.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountContentHash.to_json())

# convert the object into a dict
integration_account_content_hash_dict = integration_account_content_hash_instance.to_dict()
# create an instance of IntegrationAccountContentHash from a dict
integration_account_content_hash_from_dict = IntegrationAccountContentHash.from_dict(integration_account_content_hash_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


