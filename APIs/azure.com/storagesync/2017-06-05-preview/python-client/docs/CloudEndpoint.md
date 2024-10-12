# CloudEndpoint

Cloud Endpoint object.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The id of the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource | [optional] [readonly] 
**properties** | [**CloudEndpointProperties**](CloudEndpointProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.cloud_endpoint import CloudEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of CloudEndpoint from a JSON string
cloud_endpoint_instance = CloudEndpoint.from_json(json)
# print the JSON string representation of the object
print(CloudEndpoint.to_json())

# convert the object into a dict
cloud_endpoint_dict = cloud_endpoint_instance.to_dict()
# create an instance of CloudEndpoint from a dict
cloud_endpoint_from_dict = CloudEndpoint.from_dict(cloud_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


