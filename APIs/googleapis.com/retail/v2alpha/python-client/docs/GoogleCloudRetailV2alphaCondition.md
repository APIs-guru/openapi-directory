# GoogleCloudRetailV2alphaCondition

Metadata that is used to define a condition that triggers an action. A valid condition must specify at least one of 'query_terms' or 'products_filter'. If multiple fields are specified, the condition is met if all the fields are satisfied e.g. if a set of query terms and product_filter are set, then only items matching the product_filter for requests with a query matching the query terms wil get boosted.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_time_range** | [**List[GoogleCloudRetailV2alphaConditionTimeRange]**](GoogleCloudRetailV2alphaConditionTimeRange.md) | Range of time(s) specifying when Condition is active. Condition true if any time range matches. | [optional] 
**page_categories** | **List[str]** | Used to support browse uses cases. A list (up to 10 entries) of categories or departments. The format should be the same as UserEvent.page_categories; | [optional] 
**query_terms** | [**List[GoogleCloudRetailV2alphaConditionQueryTerm]**](GoogleCloudRetailV2alphaConditionQueryTerm.md) | A list (up to 10 entries) of terms to match the query on. If not specified, match all queries. If many query terms are specified, the condition is matched if any of the terms is a match (i.e. using the OR operator). | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2alpha_condition import GoogleCloudRetailV2alphaCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2alphaCondition from a JSON string
google_cloud_retail_v2alpha_condition_instance = GoogleCloudRetailV2alphaCondition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2alphaCondition.to_json())

# convert the object into a dict
google_cloud_retail_v2alpha_condition_dict = google_cloud_retail_v2alpha_condition_instance.to_dict()
# create an instance of GoogleCloudRetailV2alphaCondition from a dict
google_cloud_retail_v2alpha_condition_from_dict = GoogleCloudRetailV2alphaCondition.from_dict(google_cloud_retail_v2alpha_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


