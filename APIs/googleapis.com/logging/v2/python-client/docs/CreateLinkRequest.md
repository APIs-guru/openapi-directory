# CreateLinkRequest

The parameters to CreateLink.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**link** | [**Link**](Link.md) |  | [optional] 
**link_id** | **str** | Required. The ID to use for the link. The link_id can have up to 100 characters. A valid link_id must only have alphanumeric characters and underscores within it. | [optional] 
**parent** | **str** | Required. The full resource name of the bucket to create a link for. \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot; \&quot;organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot; \&quot;billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot; \&quot;folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]\&quot;  | [optional] 

## Example

```python
from openapi_client.models.create_link_request import CreateLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CreateLinkRequest from a JSON string
create_link_request_instance = CreateLinkRequest.from_json(json)
# print the JSON string representation of the object
print(CreateLinkRequest.to_json())

# convert the object into a dict
create_link_request_dict = create_link_request_instance.to_dict()
# create an instance of CreateLinkRequest from a dict
create_link_request_from_dict = CreateLinkRequest.from_dict(create_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


