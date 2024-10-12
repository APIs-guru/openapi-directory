# ConnectOntracRequestBody

An Ontrac account information request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_number** | **str** | Account number | 
**nickname** | **str** | Nickname | 
**password** | **str** | Password | 

## Example

```python
from openapi_client.models.connect_ontrac_request_body import ConnectOntracRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of ConnectOntracRequestBody from a JSON string
connect_ontrac_request_body_instance = ConnectOntracRequestBody.from_json(json)
# print the JSON string representation of the object
print(ConnectOntracRequestBody.to_json())

# convert the object into a dict
connect_ontrac_request_body_dict = connect_ontrac_request_body_instance.to_dict()
# create an instance of ConnectOntracRequestBody from a dict
connect_ontrac_request_body_from_dict = ConnectOntracRequestBody.from_dict(connect_ontrac_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


