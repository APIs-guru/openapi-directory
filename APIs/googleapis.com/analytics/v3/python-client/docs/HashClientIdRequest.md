# HashClientIdRequest

JSON template for a hash Client Id request resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**client_id** | **str** |  | [optional] 
**kind** | **str** |  | [optional] [default to 'analytics#hashClientIdRequest']
**web_property_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.hash_client_id_request import HashClientIdRequest

# TODO update the JSON string below
json = "{}"
# create an instance of HashClientIdRequest from a JSON string
hash_client_id_request_instance = HashClientIdRequest.from_json(json)
# print the JSON string representation of the object
print(HashClientIdRequest.to_json())

# convert the object into a dict
hash_client_id_request_dict = hash_client_id_request_instance.to_dict()
# create an instance of HashClientIdRequest from a dict
hash_client_id_request_from_dict = HashClientIdRequest.from_dict(hash_client_id_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


