# TimeSeriesDefaultCategory

Represents the default category.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The name of the default category which will be assigned to the values that does not match any of those that are defined in the &#39;categories&#39;. | 

## Example

```python
from openapi_client.models.time_series_default_category import TimeSeriesDefaultCategory

# TODO update the JSON string below
json = "{}"
# create an instance of TimeSeriesDefaultCategory from a JSON string
time_series_default_category_instance = TimeSeriesDefaultCategory.from_json(json)
# print the JSON string representation of the object
print(TimeSeriesDefaultCategory.to_json())

# convert the object into a dict
time_series_default_category_dict = time_series_default_category_instance.to_dict()
# create an instance of TimeSeriesDefaultCategory from a dict
time_series_default_category_from_dict = TimeSeriesDefaultCategory.from_dict(time_series_default_category_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


