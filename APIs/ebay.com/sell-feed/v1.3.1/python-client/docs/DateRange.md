# DateRange

The type that defines the fields for a date range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | **str** | The beginning date in the range. If the parent type is included, both the &lt;strong&gt;from&lt;/strong&gt; and/or the &lt;strong&gt;to&lt;/strong&gt; fields become conditionally required.&lt;br /&gt;&lt;br /&gt;&lt;b&gt;Format: &lt;/b&gt;UTC &lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ &lt;/code&gt; &lt;br /&gt;&lt;br /&gt; &lt;b&gt; For example: &lt;/b&gt; Tasks within a range  &lt;br /&gt; &lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ &lt;/code&gt; &lt;br /&gt;&lt;br /&gt; Tasks created on March 31, 2021  &lt;br /&gt;&lt;code&gt;2021-03-31T00:00:00.000Z..2021-03-31T00:00:00.000Z&lt;/code&gt;     | [optional] 
**to** | **str** | The end date for the date range, which is inclusive. If the parent type is included, both the &lt;strong&gt;from&lt;/strong&gt; and/or the &lt;strong&gt;to&lt;/strong&gt; fields become conditionally required.  &lt;br /&gt;&lt;br /&gt; &lt;b&gt; For example: &lt;/b&gt; &lt;br /&gt;&lt;br /&gt;Tasks within a range  &lt;br /&gt; &lt;code&gt;yyyy-MM-ddThh:mm:ss.SSSZ..yyyy-MM-ddThh:mm:ss.SSSZ &lt;/code&gt; &lt;br /&gt;&lt;br /&gt; Tasks created on March 31, 2021 &lt;br /&gt; &lt;code&gt;2021-03-31T00:00:00.000Z..2021-03-31T00:00:00.000Z&lt;/code&gt;   | [optional] 

## Example

```python
from openapi_client.models.date_range import DateRange

# TODO update the JSON string below
json = "{}"
# create an instance of DateRange from a JSON string
date_range_instance = DateRange.from_json(json)
# print the JSON string representation of the object
print(DateRange.to_json())

# convert the object into a dict
date_range_dict = date_range_instance.to_dict()
# create an instance of DateRange from a dict
date_range_from_dict = DateRange.from_dict(date_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


