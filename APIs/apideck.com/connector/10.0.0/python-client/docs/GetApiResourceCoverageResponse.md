# GetApiResourceCoverageResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ApiResourceCoverage**](ApiResourceCoverage.md) |  | 
**links** | [**Links**](Links.md) |  | [optional] 
**meta** | [**Meta**](Meta.md) |  | [optional] 
**status** | **str** | HTTP Response Status | 
**status_code** | **int** | HTTP Response Status Code | 

## Example

```python
from openapi_client.models.get_api_resource_coverage_response import GetApiResourceCoverageResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GetApiResourceCoverageResponse from a JSON string
get_api_resource_coverage_response_instance = GetApiResourceCoverageResponse.from_json(json)
# print the JSON string representation of the object
print(GetApiResourceCoverageResponse.to_json())

# convert the object into a dict
get_api_resource_coverage_response_dict = get_api_resource_coverage_response_instance.to_dict()
# create an instance of GetApiResourceCoverageResponse from a dict
get_api_resource_coverage_response_from_dict = GetApiResourceCoverageResponse.from_dict(get_api_resource_coverage_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


