# BatchUpdateContactsResponse

If not successful, returns BatchUpdateContactsErrorDetails, a list of errors corresponding to each contact. The response to a request to update a batch of contacts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_result** | [**Dict[str, PersonResponse]**](PersonResponse.md) | A map of resource names to the contacts that were updated, unless the request &#x60;read_mask&#x60; is empty. | [optional] 

## Example

```python
from openapi_client.models.batch_update_contacts_response import BatchUpdateContactsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of BatchUpdateContactsResponse from a JSON string
batch_update_contacts_response_instance = BatchUpdateContactsResponse.from_json(json)
# print the JSON string representation of the object
print(BatchUpdateContactsResponse.to_json())

# convert the object into a dict
batch_update_contacts_response_dict = batch_update_contacts_response_instance.to_dict()
# create an instance of BatchUpdateContactsResponse from a dict
batch_update_contacts_response_from_dict = BatchUpdateContactsResponse.from_dict(batch_update_contacts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


