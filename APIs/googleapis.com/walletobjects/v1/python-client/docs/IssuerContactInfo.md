# IssuerContactInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alerts_emails** | **List[str]** | Email addresses which will receive alerts. | [optional] 
**email** | **str** | The primary contact email address. | [optional] 
**name** | **str** | The primary contact name. | [optional] 
**phone** | **str** | The primary contact phone number. | [optional] 

## Example

```python
from openapi_client.models.issuer_contact_info import IssuerContactInfo

# TODO update the JSON string below
json = "{}"
# create an instance of IssuerContactInfo from a JSON string
issuer_contact_info_instance = IssuerContactInfo.from_json(json)
# print the JSON string representation of the object
print(IssuerContactInfo.to_json())

# convert the object into a dict
issuer_contact_info_dict = issuer_contact_info_instance.to_dict()
# create an instance of IssuerContactInfo from a dict
issuer_contact_info_from_dict = IssuerContactInfo.from_dict(issuer_contact_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


