# ApiResourceCoverageCoverageInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**downstream_id** | **str** | ID of the resource in the Connector&#39;s API (downstream) | [optional] 
**downstream_name** | **str** | Name of the resource in the Connector&#39;s API (downstream) | [optional] 
**pagination** | [**PaginationCoverage**](PaginationCoverage.md) |  | [optional] 
**pagination_supported** | **bool** | Indicates if pagination (cursor and limit parameters) is supported on the list endpoint of the resource. | [optional] 
**supported_fields** | [**List[SupportedProperty]**](SupportedProperty.md) | Supported fields on the detail endpoint. | [optional] 
**supported_filters** | **List[str]** | Supported filters on the list endpoint of the resource. | [optional] 
**supported_list_fields** | [**List[SupportedProperty]**](SupportedProperty.md) | Supported fields on the list endpoint. | [optional] 
**supported_operations** | **List[str]** | List of supported operations on the resource. | [optional] 
**supported_sort_by** | **List[str]** | Supported sorting properties on the list endpoint of the resource. | [optional] 

## Example

```python
from openapi_client.models.api_resource_coverage_coverage_inner import ApiResourceCoverageCoverageInner

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourceCoverageCoverageInner from a JSON string
api_resource_coverage_coverage_inner_instance = ApiResourceCoverageCoverageInner.from_json(json)
# print the JSON string representation of the object
print(ApiResourceCoverageCoverageInner.to_json())

# convert the object into a dict
api_resource_coverage_coverage_inner_dict = api_resource_coverage_coverage_inner_instance.to_dict()
# create an instance of ApiResourceCoverageCoverageInner from a dict
api_resource_coverage_coverage_inner_from_dict = ApiResourceCoverageCoverageInner.from_dict(api_resource_coverage_coverage_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


