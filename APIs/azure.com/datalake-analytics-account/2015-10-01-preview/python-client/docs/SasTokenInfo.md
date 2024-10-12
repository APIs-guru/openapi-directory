# SasTokenInfo

SAS token information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | the access token for the associated Azure Storage Container. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sas_token_info import SasTokenInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SasTokenInfo from a JSON string
sas_token_info_instance = SasTokenInfo.from_json(json)
# print the JSON string representation of the object
print(SasTokenInfo.to_json())

# convert the object into a dict
sas_token_info_dict = sas_token_info_instance.to_dict()
# create an instance of SasTokenInfo from a dict
sas_token_info_from_dict = SasTokenInfo.from_dict(sas_token_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


