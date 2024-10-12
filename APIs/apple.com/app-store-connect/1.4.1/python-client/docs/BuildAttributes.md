# BuildAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expiration_date** | **datetime** |  | [optional] 
**expired** | **bool** |  | [optional] 
**icon_asset_token** | [**ImageAsset**](ImageAsset.md) |  | [optional] 
**min_os_version** | **str** |  | [optional] 
**processing_state** | **str** |  | [optional] 
**uploaded_date** | **datetime** |  | [optional] 
**uses_non_exempt_encryption** | **bool** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.build_attributes import BuildAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of BuildAttributes from a JSON string
build_attributes_instance = BuildAttributes.from_json(json)
# print the JSON string representation of the object
print(BuildAttributes.to_json())

# convert the object into a dict
build_attributes_dict = build_attributes_instance.to_dict()
# create an instance of BuildAttributes from a dict
build_attributes_from_dict = BuildAttributes.from_dict(build_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


