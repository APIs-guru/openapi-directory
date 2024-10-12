# ProfileAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_date** | **datetime** |  | [optional] 
**expiration_date** | **datetime** |  | [optional] 
**name** | **str** |  | [optional] 
**platform** | [**BundleIdPlatform**](BundleIdPlatform.md) |  | [optional] 
**profile_content** | **str** |  | [optional] 
**profile_state** | **str** |  | [optional] 
**profile_type** | **str** |  | [optional] 
**uuid** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.profile_attributes import ProfileAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileAttributes from a JSON string
profile_attributes_instance = ProfileAttributes.from_json(json)
# print the JSON string representation of the object
print(ProfileAttributes.to_json())

# convert the object into a dict
profile_attributes_dict = profile_attributes_instance.to_dict()
# create an instance of ProfileAttributes from a dict
profile_attributes_from_dict = ProfileAttributes.from_dict(profile_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


