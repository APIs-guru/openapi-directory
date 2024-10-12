# ConsentLinkInputParameter



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**object_id** | **str** | AAD OID (user or group) if the principal type is ActiveDirectory.              MSA PUID if the principal type is MicrosoftAccount. | [optional] 
**parameter_name** | **str** | Name of the parameter in the connection provider&#39;s oauthSettings | [optional] 
**principal_type** | **str** | Principal type | [optional] 
**redirect_url** | **str** | Name of the parameter in the connection provider&#39;s oauthSettings | [optional] 
**tenant_id** | **str** | Tenant Id | [optional] 

## Example

```python
from openapi_client.models.consent_link_input_parameter import ConsentLinkInputParameter

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentLinkInputParameter from a JSON string
consent_link_input_parameter_instance = ConsentLinkInputParameter.from_json(json)
# print the JSON string representation of the object
print(ConsentLinkInputParameter.to_json())

# convert the object into a dict
consent_link_input_parameter_dict = consent_link_input_parameter_instance.to_dict()
# create an instance of ConsentLinkInputParameter from a dict
consent_link_input_parameter_from_dict = ConsentLinkInputParameter.from_dict(consent_link_input_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


