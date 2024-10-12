# GoogleCloudRetailV2ConditionQueryTerm

Query terms that we want to match on.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**full_match** | **bool** | Whether this is supposed to be a full or partial match. | [optional] 
**value** | **str** | The value of the term to match on. Value cannot be empty. Value can have at most 3 terms if specified as a partial match. Each space separated string is considered as one term. For example, \&quot;a b c\&quot; is 3 terms and allowed, but \&quot; a b c d\&quot; is 4 terms and not allowed for a partial match. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_condition_query_term import GoogleCloudRetailV2ConditionQueryTerm

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ConditionQueryTerm from a JSON string
google_cloud_retail_v2_condition_query_term_instance = GoogleCloudRetailV2ConditionQueryTerm.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ConditionQueryTerm.to_json())

# convert the object into a dict
google_cloud_retail_v2_condition_query_term_dict = google_cloud_retail_v2_condition_query_term_instance.to_dict()
# create an instance of GoogleCloudRetailV2ConditionQueryTerm from a dict
google_cloud_retail_v2_condition_query_term_from_dict = GoogleCloudRetailV2ConditionQueryTerm.from_dict(google_cloud_retail_v2_condition_query_term_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


