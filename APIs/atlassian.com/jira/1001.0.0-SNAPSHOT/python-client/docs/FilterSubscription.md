# FilterSubscription

Details of a user or group subscribing to a filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**group** | [**GroupName**](GroupName.md) | The group subscribing to filter. | [optional] [readonly] 
**id** | **int** | The ID of the filter subscription. | [optional] [readonly] 
**user** | [**User**](User.md) | The user subscribing to filter. | [optional] [readonly] 

## Example

```python
from openapi_client.models.filter_subscription import FilterSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of FilterSubscription from a JSON string
filter_subscription_instance = FilterSubscription.from_json(json)
# print the JSON string representation of the object
print(FilterSubscription.to_json())

# convert the object into a dict
filter_subscription_dict = filter_subscription_instance.to_dict()
# create an instance of FilterSubscription from a dict
filter_subscription_from_dict = FilterSubscription.from_dict(filter_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


