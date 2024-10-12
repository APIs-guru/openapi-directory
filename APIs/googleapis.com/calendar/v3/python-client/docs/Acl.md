# Acl


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of the collection. | [optional] 
**items** | [**List[AclRule]**](AclRule.md) | List of rules on the access control list. | [optional] 
**kind** | **str** | Type of the collection (\&quot;calendar#acl\&quot;). | [optional] [default to 'calendar#acl']
**next_page_token** | **str** | Token used to access the next page of this result. Omitted if no further results are available, in which case nextSyncToken is provided. | [optional] 
**next_sync_token** | **str** | Token used at a later point in time to retrieve only the entries that have changed since this result was returned. Omitted if further results are available, in which case nextPageToken is provided. | [optional] 

## Example

```python
from openapi_client.models.acl import Acl

# TODO update the JSON string below
json = "{}"
# create an instance of Acl from a JSON string
acl_instance = Acl.from_json(json)
# print the JSON string representation of the object
print(Acl.to_json())

# convert the object into a dict
acl_dict = acl_instance.to_dict()
# create an instance of Acl from a dict
acl_from_dict = Acl.from_dict(acl_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


