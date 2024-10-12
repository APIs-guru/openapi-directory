# GetBounceCounts200ResponseDaysInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_date** | **str** |  | [optional] 
**hard_bounce** | **int** |  | [optional] 
**smtp_api_error** | **int** |  | [optional] 
**soft_bounce** | **int** |  | [optional] 
**transient** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.get_bounce_counts200_response_days_inner import GetBounceCounts200ResponseDaysInner

# TODO update the JSON string below
json = "{}"
# create an instance of GetBounceCounts200ResponseDaysInner from a JSON string
get_bounce_counts200_response_days_inner_instance = GetBounceCounts200ResponseDaysInner.from_json(json)
# print the JSON string representation of the object
print(GetBounceCounts200ResponseDaysInner.to_json())

# convert the object into a dict
get_bounce_counts200_response_days_inner_dict = get_bounce_counts200_response_days_inner_instance.to_dict()
# create an instance of GetBounceCounts200ResponseDaysInner from a dict
get_bounce_counts200_response_days_inner_from_dict = GetBounceCounts200ResponseDaysInner.from_dict(get_bounce_counts200_response_days_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


