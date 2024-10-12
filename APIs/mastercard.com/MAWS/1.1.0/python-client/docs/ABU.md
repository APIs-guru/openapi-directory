# ABU


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | An identifier established by the Client that MUST contain a String, Number, or NULL value if included. | 
**jsonrpc** | **str** | A String specifying the version of the JSON-RPC protocol. MUST be exactly \&quot;2.0\&quot;. | [optional] 
**method** | **str** | A String containing the name of the method to be invoked. | 
**params** | [**AbuDTO**](AbuDTO.md) |  | 

## Example

```python
from openapi_client.models.abu import ABU

# TODO update the JSON string below
json = "{}"
# create an instance of ABU from a JSON string
abu_instance = ABU.from_json(json)
# print the JSON string representation of the object
print(ABU.to_json())

# convert the object into a dict
abu_dict = abu_instance.to_dict()
# create an instance of ABU from a dict
abu_from_dict = ABU.from_dict(abu_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


