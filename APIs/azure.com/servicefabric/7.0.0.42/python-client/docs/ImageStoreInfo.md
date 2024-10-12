# ImageStoreInfo

Information about the ImageStore's resource usage

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk_info** | [**DiskInfo**](DiskInfo.md) |  | [optional] 
**used_by_copy** | [**UsageInfo**](UsageInfo.md) |  | [optional] 
**used_by_metadata** | [**UsageInfo**](UsageInfo.md) |  | [optional] 
**used_by_register** | [**UsageInfo**](UsageInfo.md) |  | [optional] 
**used_by_staging** | [**UsageInfo**](UsageInfo.md) |  | [optional] 

## Example

```python
from openapi_client.models.image_store_info import ImageStoreInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ImageStoreInfo from a JSON string
image_store_info_instance = ImageStoreInfo.from_json(json)
# print the JSON string representation of the object
print(ImageStoreInfo.to_json())

# convert the object into a dict
image_store_info_dict = image_store_info_instance.to_dict()
# create an instance of ImageStoreInfo from a dict
image_store_info_from_dict = ImageStoreInfo.from_dict(image_store_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


