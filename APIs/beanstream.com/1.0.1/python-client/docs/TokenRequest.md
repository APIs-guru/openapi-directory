# TokenRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cvd** | **str** | a 3 to 4 digit representation of CVD/CDD. This is the number usually found on the back of the credit card. | 
**expiry_month** | **str** | a 2 digit representation of the expiry month. For example March is 03. | 
**expiry_year** | **str** | a 2 digit representation of the expiry year. For example 2016 is 16. | 
**number** | **str** | The credit card number | 

## Example

```python
from openapi_client.models.token_request import TokenRequest

# TODO update the JSON string below
json = "{}"
# create an instance of TokenRequest from a JSON string
token_request_instance = TokenRequest.from_json(json)
# print the JSON string representation of the object
print(TokenRequest.to_json())

# convert the object into a dict
token_request_dict = token_request_instance.to_dict()
# create an instance of TokenRequest from a dict
token_request_from_dict = TokenRequest.from_dict(token_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


