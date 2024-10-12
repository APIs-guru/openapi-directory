# EmailListCollectionResponse

Response object for list of email lists

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[EmailList]**](EmailList.md) |  | [optional] 
**included** | [**List[User]**](User.md) |  | [optional] 
**response_status** | **int** | Http status of response | [optional] 
**returned_results** | **int** |  | [optional] 
**total_results** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.email_list_collection_response import EmailListCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of EmailListCollectionResponse from a JSON string
email_list_collection_response_instance = EmailListCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(EmailListCollectionResponse.to_json())

# convert the object into a dict
email_list_collection_response_dict = email_list_collection_response_instance.to_dict()
# create an instance of EmailListCollectionResponse from a dict
email_list_collection_response_from_dict = EmailListCollectionResponse.from_dict(email_list_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


