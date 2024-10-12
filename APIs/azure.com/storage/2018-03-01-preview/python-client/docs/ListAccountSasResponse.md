# ListAccountSasResponse

The List SAS credentials operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_sas_token** | **str** | List SAS credentials of storage account. | [optional] [readonly] 

## Example

```python
from openapi_client.models.list_account_sas_response import ListAccountSasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAccountSasResponse from a JSON string
list_account_sas_response_instance = ListAccountSasResponse.from_json(json)
# print the JSON string representation of the object
print(ListAccountSasResponse.to_json())

# convert the object into a dict
list_account_sas_response_dict = list_account_sas_response_instance.to_dict()
# create an instance of ListAccountSasResponse from a dict
list_account_sas_response_from_dict = ListAccountSasResponse.from_dict(list_account_sas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


