# Link

Describes a link connected to an analytics enabled bucket.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bigquery_dataset** | [**BigQueryDataset**](BigQueryDataset.md) |  | [optional] 
**create_time** | **str** | Output only. The creation timestamp of the link. | [optional] [readonly] 
**description** | **str** | Optional. Describes this link.The maximum length of the description is 8000 characters. | [optional] 
**lifecycle_state** | **str** | Output only. The resource lifecycle state. | [optional] [readonly] 
**name** | **str** | Output only. The resource name of the link. The name can have up to 100 characters. A valid link id (at the end of the link name) must only have alphanumeric characters and underscores within it. \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]\&quot; \&quot;organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]\&quot; \&quot;billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]\&quot; \&quot;folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]\&quot; For example:&#x60;projects/my-project/locations/global/buckets/my-bucket/links/my_link | [optional] [readonly] 

## Example

```python
from openapi_client.models.link import Link

# TODO update the JSON string below
json = "{}"
# create an instance of Link from a JSON string
link_instance = Link.from_json(json)
# print the JSON string representation of the object
print(Link.to_json())

# convert the object into a dict
link_dict = link_instance.to_dict()
# create an instance of Link from a dict
link_from_dict = Link.from_dict(link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


