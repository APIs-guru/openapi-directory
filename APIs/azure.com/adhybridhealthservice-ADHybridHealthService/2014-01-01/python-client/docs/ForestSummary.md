# ForestSummary

The forest summary for an ADDS domain.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain_count** | **int** | The domain count. | [optional] 
**domains** | **List[str]** | The list of domain controller names. | [optional] 
**forest_name** | **str** | The forest name. | [optional] 
**monitored_dc_count** | **int** | The number of domain controllers that are monitored by Azure Active Directory Connect Health. | [optional] 
**site_count** | **int** | The site count. | [optional] 
**sites** | **List[str]** | The list of site names. | [optional] 
**total_dc_count** | **int** | The total domain controllers. | [optional] 

## Example

```python
from openapi_client.models.forest_summary import ForestSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ForestSummary from a JSON string
forest_summary_instance = ForestSummary.from_json(json)
# print the JSON string representation of the object
print(ForestSummary.to_json())

# convert the object into a dict
forest_summary_dict = forest_summary_instance.to_dict()
# create an instance of ForestSummary from a dict
forest_summary_from_dict = ForestSummary.from_dict(forest_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


