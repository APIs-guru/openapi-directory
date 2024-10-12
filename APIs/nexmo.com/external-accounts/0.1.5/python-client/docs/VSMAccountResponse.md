# VSMAccountResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_key** | **str** | The external api key for this account | 
**applications** | **List[str]** | The array of associated application ids | [optional] 
**external_id** | **str** | The external identifier for this account | 
**name** | **str** | The account name | [optional] 
**provider** | **str** | The provider (will be &#x60;viber_service_msg&#x60;). | 

## Example

```python
from openapi_client.models.vsm_account_response import VSMAccountResponse

# TODO update the JSON string below
json = "{}"
# create an instance of VSMAccountResponse from a JSON string
vsm_account_response_instance = VSMAccountResponse.from_json(json)
# print the JSON string representation of the object
print(VSMAccountResponse.to_json())

# convert the object into a dict
vsm_account_response_dict = vsm_account_response_instance.to_dict()
# create an instance of VSMAccountResponse from a dict
vsm_account_response_from_dict = VSMAccountResponse.from_dict(vsm_account_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


