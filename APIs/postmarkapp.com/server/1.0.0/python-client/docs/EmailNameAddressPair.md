# EmailNameAddressPair



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.email_name_address_pair import EmailNameAddressPair

# TODO update the JSON string below
json = "{}"
# create an instance of EmailNameAddressPair from a JSON string
email_name_address_pair_instance = EmailNameAddressPair.from_json(json)
# print the JSON string representation of the object
print(EmailNameAddressPair.to_json())

# convert the object into a dict
email_name_address_pair_dict = email_name_address_pair_instance.to_dict()
# create an instance of EmailNameAddressPair from a dict
email_name_address_pair_from_dict = EmailNameAddressPair.from_dict(email_name_address_pair_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


