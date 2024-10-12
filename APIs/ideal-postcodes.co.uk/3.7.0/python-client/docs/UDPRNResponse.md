# UDPRNResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **int** |  | 
**message** | **str** |  | 
**result** | [**UDPRNResponseResult**](UDPRNResponseResult.md) |  | 

## Example

```python
from openapi_client.models.udprn_response import UDPRNResponse

# TODO update the JSON string below
json = "{}"
# create an instance of UDPRNResponse from a JSON string
udprn_response_instance = UDPRNResponse.from_json(json)
# print the JSON string representation of the object
print(UDPRNResponse.to_json())

# convert the object into a dict
udprn_response_dict = udprn_response_instance.to_dict()
# create an instance of UDPRNResponse from a dict
udprn_response_from_dict = UDPRNResponse.from_dict(udprn_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


