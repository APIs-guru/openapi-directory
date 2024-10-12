# ShareRecipientsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **List[str]** |  | [optional] 
**response_status** | **int** | Http status code of the response. | [optional] 

## Example

```python
from openapi_client.models.share_recipients_response import ShareRecipientsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ShareRecipientsResponse from a JSON string
share_recipients_response_instance = ShareRecipientsResponse.from_json(json)
# print the JSON string representation of the object
print(ShareRecipientsResponse.to_json())

# convert the object into a dict
share_recipients_response_dict = share_recipients_response_instance.to_dict()
# create an instance of ShareRecipientsResponse from a dict
share_recipients_response_from_dict = ShareRecipientsResponse.from_dict(share_recipients_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


