# SpannerIODetails

Metadata for a Spanner connector used by the job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**database_id** | **str** | DatabaseId accessed in the connection. | [optional] 
**instance_id** | **str** | InstanceId accessed in the connection. | [optional] 
**project_id** | **str** | ProjectId accessed in the connection. | [optional] 

## Example

```python
from openapi_client.models.spanner_io_details import SpannerIODetails

# TODO update the JSON string below
json = "{}"
# create an instance of SpannerIODetails from a JSON string
spanner_io_details_instance = SpannerIODetails.from_json(json)
# print the JSON string representation of the object
print(SpannerIODetails.to_json())

# convert the object into a dict
spanner_io_details_dict = spanner_io_details_instance.to_dict()
# create an instance of SpannerIODetails from a dict
spanner_io_details_from_dict = SpannerIODetails.from_dict(spanner_io_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


