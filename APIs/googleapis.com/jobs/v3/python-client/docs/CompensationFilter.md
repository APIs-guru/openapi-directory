# CompensationFilter

Input only. Filter on job compensation type and amount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**include_jobs_with_unspecified_compensation_range** | **bool** | Optional. If set to true, jobs with unspecified compensation range fields are included. | [optional] 
**range** | [**CompensationRange**](CompensationRange.md) |  | [optional] 
**type** | **str** | Required. Type of filter. | [optional] 
**units** | **List[str]** | Required. Specify desired &#x60;base compensation entry&#39;s&#x60; CompensationInfo.CompensationUnit. | [optional] 

## Example

```python
from openapi_client.models.compensation_filter import CompensationFilter

# TODO update the JSON string below
json = "{}"
# create an instance of CompensationFilter from a JSON string
compensation_filter_instance = CompensationFilter.from_json(json)
# print the JSON string representation of the object
print(CompensationFilter.to_json())

# convert the object into a dict
compensation_filter_dict = compensation_filter_instance.to_dict()
# create an instance of CompensationFilter from a dict
compensation_filter_from_dict = CompensationFilter.from_dict(compensation_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


