# ManagedApiListResult

The list of managed APIs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] 
**value** | [**List[ManagedApi]**](ManagedApi.md) | The managed APIs. | [optional] 

## Example

```python
from openapi_client.models.managed_api_list_result import ManagedApiListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedApiListResult from a JSON string
managed_api_list_result_instance = ManagedApiListResult.from_json(json)
# print the JSON string representation of the object
print(ManagedApiListResult.to_json())

# convert the object into a dict
managed_api_list_result_dict = managed_api_list_result_instance.to_dict()
# create an instance of ManagedApiListResult from a dict
managed_api_list_result_from_dict = ManagedApiListResult.from_dict(managed_api_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


