# SharedConnectionDetails

shared connection details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** | password to connect to shared connection. | [optional] 
**username** | **str** | username to connect to shared connection. | [optional] 

## Example

```python
from openapi_client.models.shared_connection_details import SharedConnectionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of SharedConnectionDetails from a JSON string
shared_connection_details_instance = SharedConnectionDetails.from_json(json)
# print the JSON string representation of the object
print(SharedConnectionDetails.to_json())

# convert the object into a dict
shared_connection_details_dict = shared_connection_details_instance.to_dict()
# create an instance of SharedConnectionDetails from a dict
shared_connection_details_from_dict = SharedConnectionDetails.from_dict(shared_connection_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


