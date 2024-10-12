# CrossRegionRestoreRequestResource


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CrossRegionRestoreRequest**](CrossRegionRestoreRequest.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.cross_region_restore_request_resource import CrossRegionRestoreRequestResource

# TODO update the JSON string below
json = "{}"
# create an instance of CrossRegionRestoreRequestResource from a JSON string
cross_region_restore_request_resource_instance = CrossRegionRestoreRequestResource.from_json(json)
# print the JSON string representation of the object
print(CrossRegionRestoreRequestResource.to_json())

# convert the object into a dict
cross_region_restore_request_resource_dict = cross_region_restore_request_resource_instance.to_dict()
# create an instance of CrossRegionRestoreRequestResource from a dict
cross_region_restore_request_resource_from_dict = CrossRegionRestoreRequestResource.from_dict(cross_region_restore_request_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


