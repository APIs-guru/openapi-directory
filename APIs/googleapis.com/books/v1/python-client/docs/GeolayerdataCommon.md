# GeolayerdataCommon


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lang** | **str** | The language of the information url and description. | [optional] 
**preview_image_url** | **str** | The URL for the preview image information. | [optional] 
**snippet** | **str** | The description for this location. | [optional] 
**snippet_url** | **str** | The URL for information for this location. Ex: wikipedia link. | [optional] 
**title** | **str** | The display title and localized canonical name to use when searching for this entity on Google search. | [optional] 

## Example

```python
from openapi_client.models.geolayerdata_common import GeolayerdataCommon

# TODO update the JSON string below
json = "{}"
# create an instance of GeolayerdataCommon from a JSON string
geolayerdata_common_instance = GeolayerdataCommon.from_json(json)
# print the JSON string representation of the object
print(GeolayerdataCommon.to_json())

# convert the object into a dict
geolayerdata_common_dict = geolayerdata_common_instance.to_dict()
# create an instance of GeolayerdataCommon from a dict
geolayerdata_common_from_dict = GeolayerdataCommon.from_dict(geolayerdata_common_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


