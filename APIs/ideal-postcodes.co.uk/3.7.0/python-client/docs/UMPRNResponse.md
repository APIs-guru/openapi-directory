# UMPRNResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**UMPRNResponseResult**](UMPRNResponseResult.md) |  | 

## Example

```python
from openapi_client.models.umprn_response import UMPRNResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UMPRNResponse from a JSON string
umprn_response_instance = UMPRNResponse.from_json(json)
# print the JSON string representation of the object
print(UMPRNResponse.to_json())

# convert the object into a dict
umprn_response_dict = umprn_response_instance.to_dict()
# create an instance of UMPRNResponse from a dict
umprn_response_from_dict = UMPRNResponse.from_dict(umprn_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


