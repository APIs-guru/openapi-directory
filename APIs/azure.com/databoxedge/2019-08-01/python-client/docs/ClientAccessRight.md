# ClientAccessRight

The mapping between a particular client IP and the type of access client has on the NFS share.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_permission** | **str** | Type of access to be allowed for the client. | 
**client** | **str** | IP of the client. | 

## Example

```python
from openapi_client.models.client_access_right import ClientAccessRight

# TODO update the JSON string below
json = "{}"
# create an instance of ClientAccessRight from a JSON string
client_access_right_instance = ClientAccessRight.from_json(json)
# print the JSON string representation of the object
print(ClientAccessRight.to_json())

# convert the object into a dict
client_access_right_dict = client_access_right_instance.to_dict()
# create an instance of ClientAccessRight from a dict
client_access_right_from_dict = ClientAccessRight.from_dict(client_access_right_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


