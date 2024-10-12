# SasTokenInformationListResult

The SAS response that contains the storage account, container and associated SAS token for connection use.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[SasTokenInformation]**](SasTokenInformation.md) | The results of the list operation. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sas_token_information_list_result import SasTokenInformationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of SasTokenInformationListResult from a JSON string
sas_token_information_list_result_instance = SasTokenInformationListResult.from_json(json)
# print the JSON string representation of the object
print(SasTokenInformationListResult.to_json())

# convert the object into a dict
sas_token_information_list_result_dict = sas_token_information_list_result_instance.to_dict()
# create an instance of SasTokenInformationListResult from a dict
sas_token_information_list_result_from_dict = SasTokenInformationListResult.from_dict(sas_token_information_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


