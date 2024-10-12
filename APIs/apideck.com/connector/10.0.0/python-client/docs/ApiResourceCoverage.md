# ApiResourceCoverage


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**coverage** | [**List[ApiResourceCoverageCoverageInner]**](ApiResourceCoverageCoverageInner.md) |  | [optional] 
**id** | **str** | ID of the resource, typically a lowercased version of name. | [optional] 
**name** | **str** | Name of the resource (plural) | [optional] 
**status** | [**ResourceStatus**](ResourceStatus.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_resource_coverage import ApiResourceCoverage

# TODO update the JSON string below
json = "{}"
# create an instance of ApiResourceCoverage from a JSON string
api_resource_coverage_instance = ApiResourceCoverage.from_json(json)
# print the JSON string representation of the object
print(ApiResourceCoverage.to_json())

# convert the object into a dict
api_resource_coverage_dict = api_resource_coverage_instance.to_dict()
# create an instance of ApiResourceCoverage from a dict
api_resource_coverage_from_dict = ApiResourceCoverage.from_dict(api_resource_coverage_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


