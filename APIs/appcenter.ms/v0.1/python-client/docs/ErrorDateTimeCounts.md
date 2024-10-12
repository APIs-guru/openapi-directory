# ErrorDateTimeCounts


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | count of the object | [optional] 
**datetime** | **str** | the ISO 8601 datetime | [optional] 

## Example

```python
from openapi_client.models.error_date_time_counts import ErrorDateTimeCounts

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorDateTimeCounts from a JSON string
error_date_time_counts_instance = ErrorDateTimeCounts.from_json(json)
# print the JSON string representation of the object
print(ErrorDateTimeCounts.to_json())

# convert the object into a dict
error_date_time_counts_dict = error_date_time_counts_instance.to_dict()
# create an instance of ErrorDateTimeCounts from a dict
error_date_time_counts_from_dict = ErrorDateTimeCounts.from_dict(error_date_time_counts_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


