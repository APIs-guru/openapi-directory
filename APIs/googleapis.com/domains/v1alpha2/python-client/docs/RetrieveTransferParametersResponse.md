# RetrieveTransferParametersResponse

Deprecated: For more information, see [Cloud Domains feature deprecation](https://cloud.google.com/domains/docs/deprecations/feature-deprecations). Response for the `RetrieveTransferParameters` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transfer_parameters** | [**TransferParameters**](TransferParameters.md) |  | [optional] 

## Example

```python
from openapi_client.models.retrieve_transfer_parameters_response import RetrieveTransferParametersResponse

# TODO update the JSON string below
json = "{}"
# create an instance of RetrieveTransferParametersResponse from a JSON string
retrieve_transfer_parameters_response_instance = RetrieveTransferParametersResponse.from_json(json)
# print the JSON string representation of the object
print(RetrieveTransferParametersResponse.to_json())

# convert the object into a dict
retrieve_transfer_parameters_response_dict = retrieve_transfer_parameters_response_instance.to_dict()
# create an instance of RetrieveTransferParametersResponse from a dict
retrieve_transfer_parameters_response_from_dict = RetrieveTransferParametersResponse.from_dict(retrieve_transfer_parameters_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


