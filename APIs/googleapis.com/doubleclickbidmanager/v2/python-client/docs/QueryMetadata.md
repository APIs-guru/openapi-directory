# QueryMetadata

Query metadata.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_range** | [**DataRange**](DataRange.md) |  | [optional] 
**format** | **str** | Format of the generated report. | [optional] 
**send_notification** | **bool** | Whether to send an email notification when a report is ready. Defaults to false. | [optional] 
**share_email_address** | **List[str]** | List of email addresses which are sent email notifications when the report is finished. Separate from send_notification. | [optional] 
**title** | **str** | Query title. It is used to name the reports generated from this query. | [optional] 

## Example

```python
from openapi_client.models.query_metadata import QueryMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of QueryMetadata from a JSON string
query_metadata_instance = QueryMetadata.from_json(json)
# print the JSON string representation of the object
print(QueryMetadata.to_json())

# convert the object into a dict
query_metadata_dict = query_metadata_instance.to_dict()
# create an instance of QueryMetadata from a dict
query_metadata_from_dict = QueryMetadata.from_dict(query_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


