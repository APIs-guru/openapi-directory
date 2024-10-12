# CancellationReasonsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reasons** | [**List[CancellationReason]**](CancellationReason.md) | Array of cancellation reason codes and their asssociated texts for display to the user | [optional] 

## Example

```python
from openapi_client.models.cancellation_reasons_response import CancellationReasonsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of CancellationReasonsResponse from a JSON string
cancellation_reasons_response_instance = CancellationReasonsResponse.from_json(json)
# print the JSON string representation of the object
print(CancellationReasonsResponse.to_json())

# convert the object into a dict
cancellation_reasons_response_dict = cancellation_reasons_response_instance.to_dict()
# create an instance of CancellationReasonsResponse from a dict
cancellation_reasons_response_from_dict = CancellationReasonsResponse.from_dict(cancellation_reasons_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


