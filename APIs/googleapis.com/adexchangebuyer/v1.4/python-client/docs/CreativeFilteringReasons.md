# CreativeFilteringReasons

The filtering reasons for the creative. Read-only. This field should not be set in requests.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** | The date in ISO 8601 format for the data. The data is collected from 00:00:00 to 23:59:59 in PST. | [optional] 
**reasons** | [**List[CreativeFilteringReasonsReasonsInner]**](CreativeFilteringReasonsReasonsInner.md) | The filtering reasons. | [optional] 

## Example

```python
from openapi_client.models.creative_filtering_reasons import CreativeFilteringReasons

# TODO update the JSON string below
json = "{}"
# create an instance of CreativeFilteringReasons from a JSON string
creative_filtering_reasons_instance = CreativeFilteringReasons.from_json(json)
# print the JSON string representation of the object
print(CreativeFilteringReasons.to_json())

# convert the object into a dict
creative_filtering_reasons_dict = creative_filtering_reasons_instance.to_dict()
# create an instance of CreativeFilteringReasons from a dict
creative_filtering_reasons_from_dict = CreativeFilteringReasons.from_dict(creative_filtering_reasons_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


