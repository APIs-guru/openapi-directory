# Dimension

[Dimensions](https://support.google.com/analytics/answer/1033861) are attributes of your data. For example, the dimension `ga:city` indicates the city, for example, \"Paris\" or \"New York\", from which a session originates.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**histogram_buckets** | **List[str]** | If non-empty, we place dimension values into buckets after string to int64. Dimension values that are not the string representation of an integral value will be converted to zero. The bucket values have to be in increasing order. Each bucket is closed on the lower end, and open on the upper end. The \&quot;first\&quot; bucket includes all values less than the first boundary, the \&quot;last\&quot; bucket includes all values up to infinity. Dimension values that fall in a bucket get transformed to a new dimension value. For example, if one gives a list of \&quot;0, 1, 3, 4, 7\&quot;, then we return the following buckets: - bucket #1: values &lt; 0, dimension value \&quot;&lt;0\&quot; - bucket #2: values in [0,1), dimension value \&quot;0\&quot; - bucket #3: values in [1,3), dimension value \&quot;1-2\&quot; - bucket #4: values in [3,4), dimension value \&quot;3\&quot; - bucket #5: values in [4,7), dimension value \&quot;4-6\&quot; - bucket #6: values &gt;&#x3D; 7, dimension value \&quot;7+\&quot; NOTE: If you are applying histogram mutation on any dimension, and using that dimension in sort, you will want to use the sort type &#x60;HISTOGRAM_BUCKET&#x60; for that purpose. Without that the dimension values will be sorted according to dictionary (lexicographic) order. For example the ascending dictionary order is: \&quot;&lt;50\&quot;, \&quot;1001+\&quot;, \&quot;121-1000\&quot;, \&quot;50-120\&quot; And the ascending &#x60;HISTOGRAM_BUCKET&#x60; order is: \&quot;&lt;50\&quot;, \&quot;50-120\&quot;, \&quot;121-1000\&quot;, \&quot;1001+\&quot; The client has to explicitly request &#x60;\&quot;orderType\&quot;: \&quot;HISTOGRAM_BUCKET\&quot;&#x60; for a histogram-mutated dimension. | [optional] 
**name** | **str** | Name of the dimension to fetch, for example &#x60;ga:browser&#x60;. | [optional] 

## Example

```python
from openapi_client.models.dimension import Dimension

# TODO update the JSON string below
json = "{}"
# create an instance of Dimension from a JSON string
dimension_instance = Dimension.from_json(json)
# print the JSON string representation of the object
print(Dimension.to_json())

# convert the object into a dict
dimension_dict = dimension_instance.to_dict()
# create an instance of Dimension from a dict
dimension_from_dict = Dimension.from_dict(dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


