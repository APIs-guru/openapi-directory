# SSHKeyCollectionResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[SSHKey]**](SSHKey.md) |  | [optional] 
**included** | [**List[User]**](User.md) |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 
**returned_results** | **int** | Number of returned results. | [optional] 
**total_results** | **int** | Total results found.  | [optional] 

## Example

```python
from openapi_client.models.ssh_key_collection_response import SSHKeyCollectionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SSHKeyCollectionResponse from a JSON string
ssh_key_collection_response_instance = SSHKeyCollectionResponse.from_json(json)
# print the JSON string representation of the object
print(SSHKeyCollectionResponse.to_json())

# convert the object into a dict
ssh_key_collection_response_dict = ssh_key_collection_response_instance.to_dict()
# create an instance of SSHKeyCollectionResponse from a dict
ssh_key_collection_response_from_dict = SSHKeyCollectionResponse.from_dict(ssh_key_collection_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


