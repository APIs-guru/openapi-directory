# InstancesListServerCasResponse

Instances ListServerCas response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_version** | **str** |  | [optional] 
**certs** | [**List[SslCert]**](SslCert.md) | List of server CA certificates for the instance. | [optional] 
**kind** | **str** | This is always &#x60;sql#instancesListServerCas&#x60;. | [optional] 

## Example

```python
from openapi_client.models.instances_list_server_cas_response import InstancesListServerCasResponse

# TODO update the JSON string below
json = "{}"
# create an instance of InstancesListServerCasResponse from a JSON string
instances_list_server_cas_response_instance = InstancesListServerCasResponse.from_json(json)
# print the JSON string representation of the object
print(InstancesListServerCasResponse.to_json())

# convert the object into a dict
instances_list_server_cas_response_dict = instances_list_server_cas_response_instance.to_dict()
# create an instance of InstancesListServerCasResponse from a dict
instances_list_server_cas_response_from_dict = InstancesListServerCasResponse.from_dict(instances_list_server_cas_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


