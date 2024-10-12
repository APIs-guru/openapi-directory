# AbuResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | An identifier established by the Client that MUST contain a String, Number, or NULL value if included. | [optional] 
**jsonrpc** | **str** | A String specifying the version of the JSON-RPC protocol. MUST be exactly \&quot;2.0\&quot;. | [optional] 
**result** | [**AbuResultDTO**](AbuResultDTO.md) |  | [optional] 
**status** | **bool** | The Service Status, success (true) or failure (false). | [optional] 

## Example

```python
from openapi_client.models.abu_response import AbuResponse

# TODO update the JSON string below
json = "{}"
# create an instance of AbuResponse from a JSON string
abu_response_instance = AbuResponse.from_json(json)
# print the JSON string representation of the object
print(AbuResponse.to_json())

# convert the object into a dict
abu_response_dict = abu_response_instance.to_dict()
# create an instance of AbuResponse from a dict
abu_response_from_dict = AbuResponse.from_dict(abu_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


