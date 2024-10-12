# OptimizelyUserMetaDataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **object** |  | [optional] 
**user_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.optimizely_user_meta_data_response import OptimizelyUserMetaDataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OptimizelyUserMetaDataResponse from a JSON string
optimizely_user_meta_data_response_instance = OptimizelyUserMetaDataResponse.from_json(json)
# print the JSON string representation of the object
print(OptimizelyUserMetaDataResponse.to_json())

# convert the object into a dict
optimizely_user_meta_data_response_dict = optimizely_user_meta_data_response_instance.to_dict()
# create an instance of OptimizelyUserMetaDataResponse from a dict
optimizely_user_meta_data_response_from_dict = OptimizelyUserMetaDataResponse.from_dict(optimizely_user_meta_data_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


