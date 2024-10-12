# CrrAccessTokenResource

Container level access token for CRR

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**CrrAccessToken**](CrrAccessToken.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.crr_access_token_resource import CrrAccessTokenResource

# TODO update the JSON string below
json = "{}"
# create an instance of CrrAccessTokenResource from a JSON string
crr_access_token_resource_instance = CrrAccessTokenResource.from_json(json)
# print the JSON string representation of the object
print(CrrAccessTokenResource.to_json())

# convert the object into a dict
crr_access_token_resource_dict = crr_access_token_resource_instance.to_dict()
# create an instance of CrrAccessTokenResource from a dict
crr_access_token_resource_from_dict = CrrAccessTokenResource.from_dict(crr_access_token_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


