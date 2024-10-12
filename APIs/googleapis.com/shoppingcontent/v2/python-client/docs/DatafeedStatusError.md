# DatafeedStatusError

An error occurring in the feed, like \"invalid price\".

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The code of the error, e.g., \&quot;validation/invalid_value\&quot;. | [optional] 
**count** | **str** | The number of occurrences of the error in the feed. | [optional] 
**examples** | [**List[DatafeedStatusExample]**](DatafeedStatusExample.md) | A list of example occurrences of the error, grouped by product. | [optional] 
**message** | **str** | The error message, e.g., \&quot;Invalid price\&quot;. | [optional] 

## Example

```python
from openapi_client.models.datafeed_status_error import DatafeedStatusError

# TODO update the JSON string below
json = "{}"
# create an instance of DatafeedStatusError from a JSON string
datafeed_status_error_instance = DatafeedStatusError.from_json(json)
# print the JSON string representation of the object
print(DatafeedStatusError.to_json())

# convert the object into a dict
datafeed_status_error_dict = datafeed_status_error_instance.to_dict()
# create an instance of DatafeedStatusError from a dict
datafeed_status_error_from_dict = DatafeedStatusError.from_dict(datafeed_status_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


