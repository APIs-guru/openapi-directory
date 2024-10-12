# ListDiagnosticsResponse

Response that contains the requested diagnostics.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**diagnostics** | [**List[Diagnostics]**](Diagnostics.md) | The diagnostics matching the given request. | [optional] 
**next_page_token** | **str** | Token that can be used for pagination. Returned only if the request matches more beacons than can be returned in this response. | [optional] 

## Example

```python
from openapi_client.models.list_diagnostics_response import ListDiagnosticsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListDiagnosticsResponse from a JSON string
list_diagnostics_response_instance = ListDiagnosticsResponse.from_json(json)
# print the JSON string representation of the object
print(ListDiagnosticsResponse.to_json())

# convert the object into a dict
list_diagnostics_response_dict = list_diagnostics_response_instance.to_dict()
# create an instance of ListDiagnosticsResponse from a dict
list_diagnostics_response_from_dict = ListDiagnosticsResponse.from_dict(list_diagnostics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


