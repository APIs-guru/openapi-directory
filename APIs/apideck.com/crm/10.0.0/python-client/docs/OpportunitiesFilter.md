# OpportunitiesFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_id** | **str** | Company ID to filter on | [optional] 
**monetary_amount** | **float** | Monetary amount to filter on | [optional] 
**status** | **str** | Status to filter on | [optional] 
**title** | **str** | Title of the opportunity to filter on | [optional] 
**win_probability** | **float** | Win probability to filter on | [optional] 

## Example

```python
from openapi_client.models.opportunities_filter import OpportunitiesFilter

# TODO update the JSON string below
json = "{}"
# create an instance of OpportunitiesFilter from a JSON string
opportunities_filter_instance = OpportunitiesFilter.from_json(json)
# print the JSON string representation of the object
print(OpportunitiesFilter.to_json())

# convert the object into a dict
opportunities_filter_dict = opportunities_filter_instance.to_dict()
# create an instance of OpportunitiesFilter from a dict
opportunities_filter_from_dict = OpportunitiesFilter.from_dict(opportunities_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


