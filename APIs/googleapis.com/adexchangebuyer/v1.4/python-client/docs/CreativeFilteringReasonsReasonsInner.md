# CreativeFilteringReasonsReasonsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filtering_count** | **str** | The number of times the creative was filtered for the status. The count is aggregated across all publishers on the exchange. | [optional] 
**filtering_status** | **int** | The filtering status code as defined in  creative-status-codes.txt. | [optional] 

## Example

```python
from openapi_client.models.creative_filtering_reasons_reasons_inner import CreativeFilteringReasonsReasonsInner

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeFilteringReasonsReasonsInner from a JSON string
creative_filtering_reasons_reasons_inner_instance = CreativeFilteringReasonsReasonsInner.from_json(json)
# print the JSON string representation of the object
print(CreativeFilteringReasonsReasonsInner.to_json())

# convert the object into a dict
creative_filtering_reasons_reasons_inner_dict = creative_filtering_reasons_reasons_inner_instance.to_dict()
# create an instance of CreativeFilteringReasonsReasonsInner from a dict
creative_filtering_reasons_reasons_inner_from_dict = CreativeFilteringReasonsReasonsInner.from_dict(creative_filtering_reasons_reasons_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


