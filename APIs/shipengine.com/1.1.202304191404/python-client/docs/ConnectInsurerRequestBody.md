# ConnectInsurerRequestBody

A create shipsurance connection request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | An email address. | 
**policy_id** | **str** |  | 

## Example

```python
from openapi_client.models.connect_insurer_request_body import ConnectInsurerRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectInsurerRequestBody from a JSON string
connect_insurer_request_body_instance = ConnectInsurerRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectInsurerRequestBody.to_json())

# convert the object into a dict
connect_insurer_request_body_dict = connect_insurer_request_body_instance.to_dict()
# create an instance of ConnectInsurerRequestBody from a dict
connect_insurer_request_body_from_dict = ConnectInsurerRequestBody.from_dict(connect_insurer_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


