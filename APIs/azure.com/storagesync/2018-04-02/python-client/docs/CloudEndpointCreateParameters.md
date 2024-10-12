# CloudEndpointCreateParameters

The parameters used when creating a storage sync service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location** | **str** | Required. Gets or sets the location of the resource. This will be one of the supported and registered Azure Geo Regions (e.g. West US, East US, Southeast Asia, etc.). The geo region of a resource cannot be changed once it is created, but if an identical geo region is specified on update, the request will succeed. | [optional] 
**properties** | [**CloudEndpointCreateParametersProperties**](CloudEndpointCreateParametersProperties.md) |  | [optional] 
**tags** | **Dict[str, str]** | Gets or sets a list of key value pairs that describe the resource. These tags can be used for viewing and grouping this resource (across resource groups). A maximum of 15 tags can be provided for a resource. Each tag must have a key with a length no greater than 128 characters and a value with a length no greater than 256 characters. | [optional] 

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


