# LogView

Describes a view over log entries in a bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The creation timestamp of the view. | [optional] [readonly] 
**description** | **str** | Optional. Describes this view. | [optional] 
**filter** | **str** | Optional. Filter that restricts which log entries in a bucket are visible in this view.Filters must be logical conjunctions that use the AND operator, and they can use any of the following qualifiers: SOURCE(), which specifies a project, folder, organization, or billing account of origin. resource.type, which specifies the resource type. LOG_ID(), which identifies the log.They can also use the negations of these qualifiers with the NOT operator.For example:SOURCE(\&quot;projects/myproject\&quot;) AND resource.type &#x3D; \&quot;gce_instance\&quot; AND NOT LOG_ID(\&quot;stdout\&quot;) | [optional] 
**name** | **str** | Output only. The resource name of the view.For example:projects/my-project/locations/global/buckets/my-bucket/views/my-view | [optional] [readonly] 
**update_time** | **str** | Output only. The last update timestamp of the view. | [optional] [readonly] 

## Example

```python
from openapi_client.models.log_view import LogView

# TODO update the JSON string below
json = "{}"
# create an instance of LogView from a JSON string
log_view_instance = LogView.from_json(json)
# print the JSON string representation of the object
print(LogView.to_json())

# convert the object into a dict
log_view_dict = log_view_instance.to_dict()
# create an instance of LogView from a dict
log_view_from_dict = LogView.from_dict(log_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


