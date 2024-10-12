# ReportTaskPagedCollection

This type defines the fields that paginate the reports tasks returned by the request. The entire <i>result set</i> consists of 0 or more sequenced <i>response pages</i>, where each page consists of 0 or more items from the complete result set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**href** | **str** | The URI of the current page of results from the result set. | [optional] 
**limit** | **int** | The number of items returned on a single page from the result set. This value can be set in the request with the &lt;b&gt;limit&lt;/b&gt; query parameter. | [optional] 
**next** | **str** | The URI for the following page of results. This value is returned only if there is an additional page of results to display from the result set. &lt;br&gt;&lt;br&gt;&lt;b&gt;Max length&lt;/b&gt;: 2048 | [optional] 
**offset** | **int** | The number of results skipped in the result set before listing the first returned result. This value can be set in the request with the &lt;b&gt;offset&lt;/b&gt; query parameter.&lt;br /&gt;&lt;br /&gt;&lt;span class&#x3D;\&quot;tablenote\&quot;&gt;&lt;span style&#x3D;\&quot;color:#004680\&quot;&gt;&lt;strong&gt;Note:&lt;/strong&gt;&lt;/span&gt; The items in a paginated result set use a zero-based list where the first item in the list has an offset of &lt;code&gt;0&lt;/code&gt;.&lt;/span&gt; | [optional] 
**prev** | **str** | The URI for the preceding page of results. This value is returned only if there is a previous page of results to display from the result set. &lt;br&gt;&lt;br&gt;&lt;b&gt;Max length&lt;/b&gt;: 2048 | [optional] 
**report_tasks** | [**List[ReportTask]**](ReportTask.md) | A list of report tasks contained on this page from the paginated response. | [optional] 
**total** | **int** | The total number of items retrieved in the result set.  &lt;br&gt;&lt;br&gt;If no items are found, this field is returned with a value of &lt;code&gt;0&lt;/code&gt;. | [optional] 

## Example

```python
from openapi_client.models.report_task_paged_collection import ReportTaskPagedCollection

# TODO update the JSON string below
json = "{}"
# create an instance of ReportTaskPagedCollection from a JSON string
report_task_paged_collection_instance = ReportTaskPagedCollection.from_json(json)
# print the JSON string representation of the object
print(ReportTaskPagedCollection.to_json())

# convert the object into a dict
report_task_paged_collection_dict = report_task_paged_collection_instance.to_dict()
# create an instance of ReportTaskPagedCollection from a dict
report_task_paged_collection_from_dict = ReportTaskPagedCollection.from_dict(report_task_paged_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


