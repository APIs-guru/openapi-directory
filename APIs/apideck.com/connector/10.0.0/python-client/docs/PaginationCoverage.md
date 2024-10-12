# PaginationCoverage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limit_support** | **bool** | Indicates whether the connector supports changing the page size by using the limit parameter. | [optional] 
**mode** | **str** | How pagination is implemented on this connector. Native mode means Apideck is using the pagination parameters of the connector. With virtual pagination, the connector does not support pagination, but Apideck emulates it. | [optional] 
**paging_support** | **bool** | Indicates whether the connector supports paging through results using the cursor parameter. | [optional] 

## Example

```python
from openapi_client.models.pagination_coverage import PaginationCoverage

# TODO update the JSON string below
json = "{}"
# create an instance of PaginationCoverage from a JSON string
pagination_coverage_instance = PaginationCoverage.from_json(json)
# print the JSON string representation of the object
print(PaginationCoverage.to_json())

# convert the object into a dict
pagination_coverage_dict = pagination_coverage_instance.to_dict()
# create an instance of PaginationCoverage from a dict
pagination_coverage_from_dict = PaginationCoverage.from_dict(pagination_coverage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


