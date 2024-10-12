# FluxResponse

Rendered flux that backs the check or notification.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flux** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.flux_response import FluxResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FluxResponse from a JSON string
flux_response_instance = FluxResponse.from_json(json)
# print the JSON string representation of the object
print(FluxResponse.to_json())

# convert the object into a dict
flux_response_dict = flux_response_instance.to_dict()
# create an instance of FluxResponse from a dict
flux_response_from_dict = FluxResponse.from_dict(flux_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


