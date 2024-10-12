# GetTokenMetadataResponseMetadataOfIssuanceData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Token description | [optional] 
**issuer** | **str** | Name of token issuer | [optional] 
**token_name** | **str** | Token symbol | [optional] 
**user_data** | [**GetTokenMetadataResponseMetadataOfIssuanceDataUserData**](GetTokenMetadataResponseMetadataOfIssuanceDataUserData.md) |  | [optional] 

## Example

```python
from openapi_client.models.get_token_metadata_response_metadata_of_issuance_data import GetTokenMetadataResponseMetadataOfIssuanceData

# TODO update the JSON string below
json = "{}"
# create an instance of GetTokenMetadataResponseMetadataOfIssuanceData from a JSON string
get_token_metadata_response_metadata_of_issuance_data_instance = GetTokenMetadataResponseMetadataOfIssuanceData.from_json(json)
# print the JSON string representation of the object
print(GetTokenMetadataResponseMetadataOfIssuanceData.to_json())

# convert the object into a dict
get_token_metadata_response_metadata_of_issuance_data_dict = get_token_metadata_response_metadata_of_issuance_data_instance.to_dict()
# create an instance of GetTokenMetadataResponseMetadataOfIssuanceData from a dict
get_token_metadata_response_metadata_of_issuance_data_from_dict = GetTokenMetadataResponseMetadataOfIssuanceData.from_dict(get_token_metadata_response_metadata_of_issuance_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


