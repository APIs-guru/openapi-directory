# GoogleCloudApigeeV1Metadata

Encapsulates additional information about query execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | **List[str]** | List of error messages as strings. | [optional] 
**notices** | **List[str]** | List of additional information such as data source, if result was truncated. For example: &#x60;&#x60;&#x60; \&quot;notices\&quot;: [ \&quot;Source:Postgres\&quot;, \&quot;PG Host:uappg0rw.e2e.apigeeks.net\&quot;, \&quot;query served by:4b64601e-40de-4eb1-bfb9-eeee7ac929ed\&quot;, \&quot;Table used: edge.api.uapgroup2.agg_api\&quot; ]&#x60;&#x60;&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_metadata import GoogleCloudApigeeV1Metadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Metadata from a JSON string
google_cloud_apigee_v1_metadata_instance = GoogleCloudApigeeV1Metadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Metadata.to_json())

# convert the object into a dict
google_cloud_apigee_v1_metadata_dict = google_cloud_apigee_v1_metadata_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Metadata from a dict
google_cloud_apigee_v1_metadata_from_dict = GoogleCloudApigeeV1Metadata.from_dict(google_cloud_apigee_v1_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


