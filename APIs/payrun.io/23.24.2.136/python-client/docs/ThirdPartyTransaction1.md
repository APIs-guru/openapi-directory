# ThirdPartyTransaction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**employer_core** | [**EmployerCore2**](EmployerCore2.md) |  | [optional] 
**job_type** | **str** | The third party transactions&#39; job type | [optional] 
**request** | **str** | The third party transactions&#39; request | [optional] 
**response** | **str** | The third party transactions&#39; response | [optional] 
**transaction_status** | **str** | The third party transactions&#39; transaction status | [optional] 
**transmission_date** | **datetime** | The third party transactions&#39; transmission date | [optional] 

## Example

```python
from openapi_client.models.third_party_transaction1 import ThirdPartyTransaction1

# TODO update the JSON string below
json = "{}"
# create an instance of ThirdPartyTransaction1 from a JSON string
third_party_transaction1_instance = ThirdPartyTransaction1.from_json(json)
# print the JSON string representation of the object
print(ThirdPartyTransaction1.to_json())

# convert the object into a dict
third_party_transaction1_dict = third_party_transaction1_instance.to_dict()
# create an instance of ThirdPartyTransaction1 from a dict
third_party_transaction1_from_dict = ThirdPartyTransaction1.from_dict(third_party_transaction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


