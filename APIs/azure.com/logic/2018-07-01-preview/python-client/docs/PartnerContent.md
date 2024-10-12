# PartnerContent

The integration account partner content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**b2b** | [**B2BPartnerContent**](B2BPartnerContent.md) |  | [optional] 

## Example

```python
from openapi_client.models.partner_content import PartnerContent

# TODO update the JSON string below
json = "{}"
# create an instance of PartnerContent from a JSON string
partner_content_instance = PartnerContent.from_json(json)
# print the JSON string representation of the object
print(PartnerContent.to_json())

# convert the object into a dict
partner_content_dict = partner_content_instance.to_dict()
# create an instance of PartnerContent from a dict
partner_content_from_dict = PartnerContent.from_dict(partner_content_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


