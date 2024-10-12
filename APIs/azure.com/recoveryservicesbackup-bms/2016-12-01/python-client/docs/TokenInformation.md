# TokenInformation

The token information details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiry_time_in_utc_ticks** | **int** | Expiry time of token. | [optional] 
**security_pin** | **str** | Security PIN | [optional] 
**token** | **str** | Token value. | [optional] 

## Example

```python
from openapi_client.models.token_information import TokenInformation

# TODO update the JSON string below
json = "{}"
# create an instance of TokenInformation from a JSON string
token_information_instance = TokenInformation.from_json(json)
# print the JSON string representation of the object
print(TokenInformation.to_json())

# convert the object into a dict
token_information_dict = token_information_instance.to_dict()
# create an instance of TokenInformation from a dict
token_information_from_dict = TokenInformation.from_dict(token_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


