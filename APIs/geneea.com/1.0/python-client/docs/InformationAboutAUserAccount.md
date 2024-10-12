# InformationAboutAUserAccount


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**remaining_quotas** | [**List[Entrystringlong]**](Entrystringlong.md) | Remaining quotas for the user account. | [optional] 
**type** | **str** | Type (plan) of the user account. | [optional] 

## Example

```python
from openapi_client.models.information_about_a_user_account import InformationAboutAUserAccount

# TODO update the JSON string below
json = "{}"
# create an instance of InformationAboutAUserAccount from a JSON string
information_about_a_user_account_instance = InformationAboutAUserAccount.from_json(json)
# print the JSON string representation of the object
print(InformationAboutAUserAccount.to_json())

# convert the object into a dict
information_about_a_user_account_dict = information_about_a_user_account_instance.to_dict()
# create an instance of InformationAboutAUserAccount from a dict
information_about_a_user_account_from_dict = InformationAboutAUserAccount.from_dict(information_about_a_user_account_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


