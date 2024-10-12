# ShareFileResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ShareFileResponseData**](ShareFileResponseData.md) |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.share_file_response import ShareFileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShareFileResponse from a JSON string
share_file_response_instance = ShareFileResponse.from_json(json)
# print the JSON string representation of the object
print(ShareFileResponse.to_json())

# convert the object into a dict
share_file_response_dict = share_file_response_instance.to_dict()
# create an instance of ShareFileResponse from a dict
share_file_response_from_dict = ShareFileResponse.from_dict(share_file_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


