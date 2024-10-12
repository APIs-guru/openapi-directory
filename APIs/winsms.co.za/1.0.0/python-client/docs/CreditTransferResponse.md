# CreditTransferResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status_code** | **int** | The http status code returned - reflected in the body for convenience | [optional] 
**time_stamp** | **str** | The date/time the request was processed, in the format YYYYMMDDhhmmssSSS | [optional] 
**transfer_successful** | **bool** | A boolean value indictating whether the credits were successfully transfered from the sending account into the receiving account. | [optional] 
**version** | **str** | The current version of the API of the endpoint that was called | [optional] 

## Example

```python
from openapi_client.models.credit_transfer_response import CreditTransferResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CreditTransferResponse from a JSON string
credit_transfer_response_instance = CreditTransferResponse.from_json(json)
# print the JSON string representation of the object
print(CreditTransferResponse.to_json())

# convert the object into a dict
credit_transfer_response_dict = credit_transfer_response_instance.to_dict()
# create an instance of CreditTransferResponse from a dict
credit_transfer_response_from_dict = CreditTransferResponse.from_dict(credit_transfer_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


