# FilterSubscriptionsList

A paginated list of subscriptions to a filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | The index of the last item returned on the page. | [optional] [readonly] 
**items** | [**List[FilterSubscription]**](FilterSubscription.md) | The list of items. | [optional] [readonly] 
**max_results** | **int** | The maximum number of results that could be on the page. | [optional] [readonly] 
**size** | **int** | The number of items on the page. | [optional] [readonly] 
**start_index** | **int** | The index of the first item returned on the page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.filter_subscriptions_list import FilterSubscriptionsList

# TODO update the JSON string below
json = "{}"
# create an instance of FilterSubscriptionsList from a JSON string
filter_subscriptions_list_instance = FilterSubscriptionsList.from_json(json)
# print the JSON string representation of the object
print(FilterSubscriptionsList.to_json())

# convert the object into a dict
filter_subscriptions_list_dict = filter_subscriptions_list_instance.to_dict()
# create an instance of FilterSubscriptionsList from a dict
filter_subscriptions_list_from_dict = FilterSubscriptionsList.from_dict(filter_subscriptions_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


