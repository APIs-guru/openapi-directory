# ImpactedResourceListResult

The List impactedResourceStatus operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of impactedResourceStatus. | [optional] 
**value** | [**List[ImpactedResourceStatus]**](ImpactedResourceStatus.md) | The list of impactedResourceStatus. | 

## Example

```python
from openapi_client.models.impacted_resource_list_result import ImpactedResourceListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ImpactedResourceListResult from a JSON string
impacted_resource_list_result_instance = ImpactedResourceListResult.from_json(json)
# print the JSON string representation of the object
print(ImpactedResourceListResult.to_json())

# convert the object into a dict
impacted_resource_list_result_dict = impacted_resource_list_result_instance.to_dict()
# create an instance of ImpactedResourceListResult from a dict
impacted_resource_list_result_from_dict = ImpactedResourceListResult.from_dict(impacted_resource_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


