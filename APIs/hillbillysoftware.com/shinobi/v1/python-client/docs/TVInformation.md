# TVInformation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**episode_count** | **str** |  | [optional] 
**episode_runtime** | **str** |  | [optional] 
**externals** | [**List[ExternalIDs]**](ExternalIDs.md) |  | [optional] 
**id** | **str** |  | [optional] 
**release_year** | **str** |  | [optional] 
**seasons** | **str** |  | [optional] 
**show_image** | **str** |  | [optional] 
**show_status** | **str** |  | [optional] 
**synopsis** | **str** |  | [optional] 
**title** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.tv_information import TVInformation

# TODO update the JSON string below
json = "{}"
# create an instance of TVInformation from a JSON string
tv_information_instance = TVInformation.from_json(json)
# print the JSON string representation of the object
print(TVInformation.to_json())

# convert the object into a dict
tv_information_dict = tv_information_instance.to_dict()
# create an instance of TVInformation from a dict
tv_information_from_dict = TVInformation.from_dict(tv_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


