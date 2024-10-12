# SasTokenInformation

SAS token information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_token** | **str** | The access token for the associated Azure Storage Container. | [optional] [readonly] 

## Example

```python
from openapi_client.models.sas_token_information import SasTokenInformation

# TODO update the JSON string below
json = "{}"
# create an instance of SasTokenInformation from a JSON string
sas_token_information_instance = SasTokenInformation.from_json(json)
# print the JSON string representation of the object
print(SasTokenInformation.to_json())

# convert the object into a dict
sas_token_information_dict = sas_token_information_instance.to_dict()
# create an instance of SasTokenInformation from a dict
sas_token_information_from_dict = SasTokenInformation.from_dict(sas_token_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


