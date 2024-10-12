# ImageVersion

ImageVersion information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_disabled** | **bool** | Whether it is impossible to create an environment with the image version. | [optional] 
**image_version_id** | **str** | The string identifier of the ImageVersion, in the form: \&quot;composer-x.y.z-airflow-a.b.c\&quot; | [optional] 
**is_default** | **bool** | Whether this is the default ImageVersion used by Composer during environment creation if no input ImageVersion is specified. | [optional] 
**release_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**supported_python_versions** | **List[str]** | supported python versions | [optional] 
**upgrade_disabled** | **bool** | Whether it is impossible to upgrade an environment running with the image version. | [optional] 

## Example

```python
from openapi_client.models.image_version import ImageVersion

# TODO update the JSON string below
json = "{}"
# create an instance of ImageVersion from a JSON string
image_version_instance = ImageVersion.from_json(json)
# print the JSON string representation of the object
print(ImageVersion.to_json())

# convert the object into a dict
image_version_dict = image_version_instance.to_dict()
# create an instance of ImageVersion from a dict
image_version_from_dict = ImageVersion.from_dict(image_version_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


