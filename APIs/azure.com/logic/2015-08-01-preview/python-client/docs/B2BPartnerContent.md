# B2BPartnerContent


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**business_identities** | [**List[BusinessIdentity]**](BusinessIdentity.md) | The list of partner business identities. | [optional] 

## Example

```python
from openapi_client.models.b2_b_partner_content import B2BPartnerContent

# TODO update the JSON string below
json = "{}"
# create an instance of B2BPartnerContent from a JSON string
b2_b_partner_content_instance = B2BPartnerContent.from_json(json)
# print the JSON string representation of the object
print(B2BPartnerContent.to_json())

# convert the object into a dict
b2_b_partner_content_dict = b2_b_partner_content_instance.to_dict()
# create an instance of B2BPartnerContent from a dict
b2_b_partner_content_from_dict = B2BPartnerContent.from_dict(b2_b_partner_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


