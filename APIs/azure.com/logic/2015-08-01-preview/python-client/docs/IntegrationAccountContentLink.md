# IntegrationAccountContentLink


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_hash** | [**IntegrationAccountContentHash**](IntegrationAccountContentHash.md) |  | [optional] 
**content_size** | **int** | The content size. | [optional] 
**content_version** | **str** | The content version. | [optional] 
**metadata** | **object** | The metadata. | [optional] 
**uri** | **str** | The content link URI. | [optional] 

## Example

```python
from openapi_client.models.integration_account_content_link import IntegrationAccountContentLink

# TODO update the JSON string below
json = "{}"
# create an instance of IntegrationAccountContentLink from a JSON string
integration_account_content_link_instance = IntegrationAccountContentLink.from_json(json)
# print the JSON string representation of the object
print(IntegrationAccountContentLink.to_json())

# convert the object into a dict
integration_account_content_link_dict = integration_account_content_link_instance.to_dict()
# create an instance of IntegrationAccountContentLink from a dict
integration_account_content_link_from_dict = IntegrationAccountContentLink.from_dict(integration_account_content_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


