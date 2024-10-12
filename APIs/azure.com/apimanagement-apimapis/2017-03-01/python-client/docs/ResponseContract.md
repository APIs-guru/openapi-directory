# ResponseContract

Operation response details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Operation response description. | [optional] 
**headers** | [**List[ParameterContract]**](ParameterContract.md) | Collection of operation response headers. | [optional] 
**representations** | [**List[RepresentationContract]**](RepresentationContract.md) | Collection of operation response representations. | [optional] 
**status_code** | **int** | Operation response HTTP status code. | 

## Example

```python
from openapi_client.models.response_contract import ResponseContract

# TODO update the JSON string below
json = "{}"
# create an instance of ResponseContract from a JSON string
response_contract_instance = ResponseContract.from_json(json)
# print the JSON string representation of the object
print(ResponseContract.to_json())

# convert the object into a dict
response_contract_dict = response_contract_instance.to_dict()
# create an instance of ResponseContract from a dict
response_contract_from_dict = ResponseContract.from_dict(response_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


