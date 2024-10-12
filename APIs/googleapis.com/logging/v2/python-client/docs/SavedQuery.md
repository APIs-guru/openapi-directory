# SavedQuery

Describes a query that has been saved by a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The timestamp when the saved query was created. | [optional] [readonly] 
**description** | **str** | Optional. A human readable description of the saved query. | [optional] 
**display_name** | **str** | Optional. The user specified title for the SavedQuery. | [optional] 
**logging_query** | [**LoggingQuery**](LoggingQuery.md) |  | [optional] 
**name** | **str** | Output only. Resource name of the saved query.In the format: \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]/savedQueries/[QUERY_ID]\&quot; For a list of supported locations, see Supported Regions (https://cloud.google.com/logging/docs/region-support#bucket-regions)After the saved query is created, the location cannot be changed.If the user doesn&#39;t provide a QUERY_ID, the system will generate an alphanumeric ID. | [optional] [readonly] 
**ops_analytics_query** | [**OpsAnalyticsQuery**](OpsAnalyticsQuery.md) |  | [optional] 
**update_time** | **str** | Output only. The timestamp when the saved query was last updated. | [optional] [readonly] 
**visibility** | **str** | Required. The visibility status of this query, which determines its ownership. | [optional] 

## Example

```python
from openapi_client.models.saved_query import SavedQuery

# TODO update the JSON string below
json = "{}"
# create an instance of SavedQuery from a JSON string
saved_query_instance = SavedQuery.from_json(json)
# print the JSON string representation of the object
print(SavedQuery.to_json())

# convert the object into a dict
saved_query_dict = saved_query_instance.to_dict()
# create an instance of SavedQuery from a dict
saved_query_from_dict = SavedQuery.from_dict(saved_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


