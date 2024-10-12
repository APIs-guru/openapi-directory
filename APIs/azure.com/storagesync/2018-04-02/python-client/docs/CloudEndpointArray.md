# CloudEndpointArray

Array of CloudEndpoint

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | [**List[CloudEndpoint]**](CloudEndpoint.md) | Collection of CloudEndpoint. | [optional] 

## Example

```python
from openapi_client.models.cloud_endpoint_array import CloudEndpointArray

# TODO update the JSON string below
json = "{}"
# create an instance of CloudEndpointArray from a JSON string
cloud_endpoint_array_instance = CloudEndpointArray.from_json(json)
# print the JSON string representation of the object
print(CloudEndpointArray.to_json())

# convert the object into a dict
cloud_endpoint_array_dict = cloud_endpoint_array_instance.to_dict()
# create an instance of CloudEndpointArray from a dict
cloud_endpoint_array_from_dict = CloudEndpointArray.from_dict(cloud_endpoint_array_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


