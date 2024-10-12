# ResourceProviderOperationDetailListResult

List of resource provider operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL to get the next set of results. | [optional] 
**value** | [**List[ResourceProviderOperationDefinition]**](ResourceProviderOperationDefinition.md) | Gets or sets the list of resource provider operations. | [optional] 

## Example

```python
from openapi_client.models.resource_provider_operation_detail_list_result import ResourceProviderOperationDetailListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceProviderOperationDetailListResult from a JSON string
resource_provider_operation_detail_list_result_instance = ResourceProviderOperationDetailListResult.from_json(json)
# print the JSON string representation of the object
print(ResourceProviderOperationDetailListResult.to_json())

# convert the object into a dict
resource_provider_operation_detail_list_result_dict = resource_provider_operation_detail_list_result_instance.to_dict()
# create an instance of ResourceProviderOperationDetailListResult from a dict
resource_provider_operation_detail_list_result_from_dict = ResourceProviderOperationDetailListResult.from_dict(resource_provider_operation_detail_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


