# ConsentLink



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display Name of the parameter in the connection provider&#39;s oauthSettings | [optional] 
**first_party_login_uri** | **str** | Uri for first party login | [optional] 
**link** | **str** | Uri for the consent link | [optional] 
**status** | **str** | Status of the link | [optional] 

## Example

```python
from openapi_client.models.consent_link import ConsentLink

# TODO update the JSON string below
json = "{}"
# create an instance of ConsentLink from a JSON string
consent_link_instance = ConsentLink.from_json(json)
# print the JSON string representation of the object
print(ConsentLink.to_json())

# convert the object into a dict
consent_link_dict = consent_link_instance.to_dict()
# create an instance of ConsentLink from a dict
consent_link_from_dict = ConsentLink.from_dict(consent_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


