# BatchDeleteContactsRequest

A request to delete a batch of existing contacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_names** | **List[str]** | Required. The resource names of the contact to delete. It&#39;s repeatable. Allows up to 500 resource names in a single request. | [optional] 

## Example

```python
from openapi_client.models.batch_delete_contacts_request import BatchDeleteContactsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of BatchDeleteContactsRequest from a JSON string
batch_delete_contacts_request_instance = BatchDeleteContactsRequest.from_json(json)
# print the JSON string representation of the object
print(BatchDeleteContactsRequest.to_json())

# convert the object into a dict
batch_delete_contacts_request_dict = batch_delete_contacts_request_instance.to_dict()
# create an instance of BatchDeleteContactsRequest from a dict
batch_delete_contacts_request_from_dict = BatchDeleteContactsRequest.from_dict(batch_delete_contacts_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


