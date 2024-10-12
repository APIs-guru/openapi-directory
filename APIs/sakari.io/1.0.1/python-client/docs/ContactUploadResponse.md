# ContactUploadResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ContactUploadResponseData**](ContactUploadResponseData.md) |  | [optional] 
**success** | **bool** |  | [optional] [default to True]

## Example

```python
from openapi_client.models.contact_upload_response import ContactUploadResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ContactUploadResponse from a JSON string
contact_upload_response_instance = ContactUploadResponse.from_json(json)
# print the JSON string representation of the object
print(ContactUploadResponse.to_json())

# convert the object into a dict
contact_upload_response_dict = contact_upload_response_instance.to_dict()
# create an instance of ContactUploadResponse from a dict
contact_upload_response_from_dict = ContactUploadResponse.from_dict(contact_upload_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


