# RequestContract

Operation request details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Operation request description. | [optional] 
**headers** | [**List[ParameterContract]**](ParameterContract.md) | Collection of operation request headers. | [optional] 
**query_parameters** | [**List[ParameterContract]**](ParameterContract.md) | Collection of operation request query parameters. | [optional] 
**representations** | [**List[RepresentationContract]**](RepresentationContract.md) | Collection of operation request representations. | [optional] 

## Example

```python
from openapi_client.models.request_contract import RequestContract

# TODO update the JSON string below
json = "{}"
# create an instance of RequestContract from a JSON string
request_contract_instance = RequestContract.from_json(json)
# print the JSON string representation of the object
print(RequestContract.to_json())

# convert the object into a dict
request_contract_dict = request_contract_instance.to_dict()
# create an instance of RequestContract from a dict
request_contract_from_dict = RequestContract.from_dict(request_contract_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


