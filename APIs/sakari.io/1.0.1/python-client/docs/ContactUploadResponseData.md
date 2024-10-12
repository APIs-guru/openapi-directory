# ContactUploadResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contacts** | [**List[Contact]**](Contact.md) | Uploaded contacts | [optional] 
**errors** | [**List[Contact]**](Contact.md) | Contacts that failed validation | [optional] 
**inserted** | **int** |  | [optional] 
**submitted** | **int** |  | [optional] 
**success** | **int** |  | [optional] 
**updated** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.contact_upload_response_data import ContactUploadResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ContactUploadResponseData from a JSON string
contact_upload_response_data_instance = ContactUploadResponseData.from_json(json)
# print the JSON string representation of the object
print(ContactUploadResponseData.to_json())

# convert the object into a dict
contact_upload_response_data_dict = contact_upload_response_data_instance.to_dict()
# create an instance of ContactUploadResponseData from a dict
contact_upload_response_data_from_dict = ContactUploadResponseData.from_dict(contact_upload_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


