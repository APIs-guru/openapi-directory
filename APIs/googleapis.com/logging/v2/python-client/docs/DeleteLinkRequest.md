# DeleteLinkRequest

The parameters to DeleteLink.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The full resource name of the link to delete. \&quot;projects/[PROJECT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]\&quot; \&quot;organizations/[ORGANIZATION_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]\&quot; \&quot;billingAccounts/[BILLING_ACCOUNT_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]\&quot; \&quot;folders/[FOLDER_ID]/locations/[LOCATION_ID]/buckets/[BUCKET_ID]/links/[LINK_ID]\&quot;  | [optional] 

## Example

```python
from openapi_client.models.delete_link_request import DeleteLinkRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteLinkRequest from a JSON string
delete_link_request_instance = DeleteLinkRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteLinkRequest.to_json())

# convert the object into a dict
delete_link_request_dict = delete_link_request_instance.to_dict()
# create an instance of DeleteLinkRequest from a dict
delete_link_request_from_dict = DeleteLinkRequest.from_dict(delete_link_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


