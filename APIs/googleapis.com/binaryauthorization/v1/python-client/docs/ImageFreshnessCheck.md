# ImageFreshnessCheck

An image freshness check, which rejects images that were uploaded before the set number of days ago to the supported repositories.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_upload_age_days** | **int** | Required. The max number of days that is allowed since the image was uploaded. Must be greater than zero. | [optional] 

## Example

```python
from openapi_client.models.image_freshness_check import ImageFreshnessCheck

# TODO update the JSON string below
json = "{}"
# create an instance of ImageFreshnessCheck from a JSON string
image_freshness_check_instance = ImageFreshnessCheck.from_json(json)
# print the JSON string representation of the object
print(ImageFreshnessCheck.to_json())

# convert the object into a dict
image_freshness_check_dict = image_freshness_check_instance.to_dict()
# create an instance of ImageFreshnessCheck from a dict
image_freshness_check_from_dict = ImageFreshnessCheck.from_dict(image_freshness_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


