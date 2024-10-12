# Pivot

The Pivot describes the pivot section in the request. The Pivot helps rearrange the information in the table for certain reports by pivoting your data on a second dimension.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_filter_clauses** | [**List[DimensionFilterClause]**](DimensionFilterClause.md) | DimensionFilterClauses are logically combined with an &#x60;AND&#x60; operator: only data that is included by all these DimensionFilterClauses contributes to the values in this pivot region. Dimension filters can be used to restrict the columns shown in the pivot region. For example if you have &#x60;ga:browser&#x60; as the requested dimension in the pivot region, and you specify key filters to restrict &#x60;ga:browser&#x60; to only \&quot;IE\&quot; or \&quot;Firefox\&quot;, then only those two browsers would show up as columns. | [optional] 
**dimensions** | [**List[Dimension]**](Dimension.md) | A list of dimensions to show as pivot columns. A Pivot can have a maximum of 4 dimensions. Pivot dimensions are part of the restriction on the total number of dimensions allowed in the request. | [optional] 
**max_group_count** | **int** | Specifies the maximum number of groups to return. The default value is 10, also the maximum value is 1,000. | [optional] 
**metrics** | [**List[Metric]**](Metric.md) | The pivot metrics. Pivot metrics are part of the restriction on total number of metrics allowed in the request. | [optional] 
**start_group** | **int** | If k metrics were requested, then the response will contain some data-dependent multiple of k columns in the report. E.g., if you pivoted on the dimension &#x60;ga:browser&#x60; then you&#39;d get k columns for \&quot;Firefox\&quot;, k columns for \&quot;IE\&quot;, k columns for \&quot;Chrome\&quot;, etc. The ordering of the groups of columns is determined by descending order of \&quot;total\&quot; for the first of the k values. Ties are broken by lexicographic ordering of the first pivot dimension, then lexicographic ordering of the second pivot dimension, and so on. E.g., if the totals for the first value for Firefox, IE, and Chrome were 8, 2, 8, respectively, the order of columns would be Chrome, Firefox, IE. The following let you choose which of the groups of k columns are included in the response. | [optional] 

## Example

```python
from openapi_client.models.pivot import Pivot

# TODO update the JSON string below
json = "{}"
# create an instance of Pivot from a JSON string
pivot_instance = Pivot.from_json(json)
# print the JSON string representation of the object
print(Pivot.to_json())

# convert the object into a dict
pivot_dict = pivot_instance.to_dict()
# create an instance of Pivot from a dict
pivot_from_dict = Pivot.from_dict(pivot_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


