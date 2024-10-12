# CloudEndpointCreateParameters

The parameters used when creating a cloud endpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CloudEndpointCreateParametersProperties**](CloudEndpointCreateParametersProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} | [optional] [readonly] 
**name** | **str** | The name of the resource | [optional] [readonly] 
**type** | **str** | The type of the resource. Ex- Microsoft.Compute/virtualMachines or Microsoft.Storage/storageAccounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cloud_endpoint_create_parameters import CloudEndpointCreateParameters

# TODO update the JSON string below
json = "{}"
# create an instance of CloudEndpointCreateParameters from a JSON string
cloud_endpoint_create_parameters_instance = CloudEndpointCreateParameters.from_json(json)
# print the JSON string representation of the object
print(CloudEndpointCreateParameters.to_json())

# convert the object into a dict
cloud_endpoint_create_parameters_dict = cloud_endpoint_create_parameters_instance.to_dict()
# create an instance of CloudEndpointCreateParameters from a dict
cloud_endpoint_create_parameters_from_dict = CloudEndpointCreateParameters.from_dict(cloud_endpoint_create_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


