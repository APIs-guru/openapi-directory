# DeleteBandingRequest

Removes the banded range with the given ID from the spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**banded_range_id** | **int** | The ID of the banded range to delete. | [optional] 

## Example

```python
from openapi_client.models.delete_banding_request import DeleteBandingRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteBandingRequest from a JSON string
delete_banding_request_instance = DeleteBandingRequest.from_json(json)
# print the JSON string representation of the object
print(DeleteBandingRequest.to_json())

# convert the object into a dict
delete_banding_request_dict = delete_banding_request_instance.to_dict()
# create an instance of DeleteBandingRequest from a dict
delete_banding_request_from_dict = DeleteBandingRequest.from_dict(delete_banding_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


