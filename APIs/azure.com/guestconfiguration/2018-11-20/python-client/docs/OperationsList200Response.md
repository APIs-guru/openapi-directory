# OperationsList200Response

The response model for the list of Automation operations

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[OperationsList200ResponseValueInner]**](OperationsList200ResponseValueInner.md) | List of Automation operations supported by the Automation resource provider. | [optional] 

## Example

```python
from openapi_client.models.operations_list200_response import OperationsList200Response

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsList200Response from a JSON string
operations_list200_response_instance = OperationsList200Response.from_json(json)
# print the JSON string representation of the object
print(OperationsList200Response.to_json())

# convert the object into a dict
operations_list200_response_dict = operations_list200_response_instance.to_dict()
# create an instance of OperationsList200Response from a dict
operations_list200_response_from_dict = OperationsList200Response.from_dict(operations_list200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


