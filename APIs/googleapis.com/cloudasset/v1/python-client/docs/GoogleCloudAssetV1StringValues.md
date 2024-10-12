# GoogleCloudAssetV1StringValues

The string values for the list constraints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_values** | **List[str]** | List of values allowed at this resource. | [optional] 
**denied_values** | **List[str]** | List of values denied at this resource. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_asset_v1_string_values import GoogleCloudAssetV1StringValues

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAssetV1StringValues from a JSON string
google_cloud_asset_v1_string_values_instance = GoogleCloudAssetV1StringValues.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAssetV1StringValues.to_json())

# convert the object into a dict
google_cloud_asset_v1_string_values_dict = google_cloud_asset_v1_string_values_instance.to_dict()
# create an instance of GoogleCloudAssetV1StringValues from a dict
google_cloud_asset_v1_string_values_from_dict = GoogleCloudAssetV1StringValues.from_dict(google_cloud_asset_v1_string_values_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


