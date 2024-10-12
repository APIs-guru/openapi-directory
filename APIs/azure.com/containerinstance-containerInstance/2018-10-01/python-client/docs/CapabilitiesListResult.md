# CapabilitiesListResult

The response containing list of capabilities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of capabilities. | [optional] 
**value** | [**List[Capabilities]**](Capabilities.md) | The list of capabilities. | [optional] 

## Example

```python
from openapi_client.models.capabilities_list_result import CapabilitiesListResult

# TODO update the JSON string below
json = "{}"
# create an instance of CapabilitiesListResult from a JSON string
capabilities_list_result_instance = CapabilitiesListResult.from_json(json)
# print the JSON string representation of the object
print(CapabilitiesListResult.to_json())

# convert the object into a dict
capabilities_list_result_dict = capabilities_list_result_instance.to_dict()
# create an instance of CapabilitiesListResult from a dict
capabilities_list_result_from_dict = CapabilitiesListResult.from_dict(capabilities_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


