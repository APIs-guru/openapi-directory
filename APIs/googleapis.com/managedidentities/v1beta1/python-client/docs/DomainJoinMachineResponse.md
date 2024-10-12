# DomainJoinMachineResponse

DomainJoinMachineResponse is the response message for DomainJoinMachine method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_join_blob** | **str** | The response is the offline domain join blob that is returned after running the djoin command. To correctly use the response of the API, please refer to the sample usage. | [optional] 

## Example

```python
from openapi_client.models.domain_join_machine_response import DomainJoinMachineResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DomainJoinMachineResponse from a JSON string
domain_join_machine_response_instance = DomainJoinMachineResponse.from_json(json)
# print the JSON string representation of the object
print(DomainJoinMachineResponse.to_json())

# convert the object into a dict
domain_join_machine_response_dict = domain_join_machine_response_instance.to_dict()
# create an instance of DomainJoinMachineResponse from a dict
domain_join_machine_response_from_dict = DomainJoinMachineResponse.from_dict(domain_join_machine_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


