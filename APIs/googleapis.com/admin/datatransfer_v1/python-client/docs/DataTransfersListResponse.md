# DataTransfersListResponse

Template for a collection of DataTransfer resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_transfers** | [**List[DataTransfer]**](DataTransfer.md) | List of data transfer requests. | [optional] 
**etag** | **str** | ETag of the resource. | [optional] 
**kind** | **str** | Identifies the resource as a collection of data transfer requests. | [optional] [default to 'admin#datatransfer#dataTransfersList']
**next_page_token** | **str** | Token to specify the next page in the list. | [optional] 

## Example

```python
from openapi_client.models.data_transfers_list_response import DataTransfersListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of DataTransfersListResponse from a JSON string
data_transfers_list_response_instance = DataTransfersListResponse.from_json(json)
# print the JSON string representation of the object
print(DataTransfersListResponse.to_json())

# convert the object into a dict
data_transfers_list_response_dict = data_transfers_list_response_instance.to_dict()
# create an instance of DataTransfersListResponse from a dict
data_transfers_list_response_from_dict = DataTransfersListResponse.from_dict(data_transfers_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


