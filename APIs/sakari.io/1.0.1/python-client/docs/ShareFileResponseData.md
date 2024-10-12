# ShareFileResponseData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expires** | **datetime** |  | [optional] 
**link** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.share_file_response_data import ShareFileResponseData

# TODO update the JSON string below
json = "{}"
# create an instance of ShareFileResponseData from a JSON string
share_file_response_data_instance = ShareFileResponseData.from_json(json)
# print the JSON string representation of the object
print(ShareFileResponseData.to_json())

# convert the object into a dict
share_file_response_data_dict = share_file_response_data_instance.to_dict()
# create an instance of ShareFileResponseData from a dict
share_file_response_data_from_dict = ShareFileResponseData.from_dict(share_file_response_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


