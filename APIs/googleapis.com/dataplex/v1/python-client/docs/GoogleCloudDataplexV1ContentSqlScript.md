# GoogleCloudDataplexV1ContentSqlScript

Configuration for the Sql Script content.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**engine** | **str** | Required. Query Engine to be used for the Sql Query. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_content_sql_script import GoogleCloudDataplexV1ContentSqlScript

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ContentSqlScript from a JSON string
google_cloud_dataplex_v1_content_sql_script_instance = GoogleCloudDataplexV1ContentSqlScript.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ContentSqlScript.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_content_sql_script_dict = google_cloud_dataplex_v1_content_sql_script_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ContentSqlScript from a dict
google_cloud_dataplex_v1_content_sql_script_from_dict = GoogleCloudDataplexV1ContentSqlScript.from_dict(google_cloud_dataplex_v1_content_sql_script_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


