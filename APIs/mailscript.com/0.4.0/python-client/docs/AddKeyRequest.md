# AddKeyRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**read** | **bool** |  | 
**write** | **bool** |  | 

## Example

```python
from openapi_client.models.add_key_request import AddKeyRequest

# TODO update the JSON string below
json = "{}"
# create an instance of AddKeyRequest from a JSON string
add_key_request_instance = AddKeyRequest.from_json(json)
# print the JSON string representation of the object
print(AddKeyRequest.to_json())

# convert the object into a dict
add_key_request_dict = add_key_request_instance.to_dict()
# create an instance of AddKeyRequest from a dict
add_key_request_from_dict = AddKeyRequest.from_dict(add_key_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


