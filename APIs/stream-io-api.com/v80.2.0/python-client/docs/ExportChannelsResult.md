# ExportChannelsResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | S3 path of result | [optional] 
**s3_bucket_name** | **str** | S3 bucket name result | [optional] 
**url** | **str** | URL of result | 

## Example

```python
from openapi_client.models.export_channels_result import ExportChannelsResult

# TODO update the JSON string below
json = "{}"
# create an instance of ExportChannelsResult from a JSON string
export_channels_result_instance = ExportChannelsResult.from_json(json)
# print the JSON string representation of the object
print(ExportChannelsResult.to_json())

# convert the object into a dict
export_channels_result_dict = export_channels_result_instance.to_dict()
# create an instance of ExportChannelsResult from a dict
export_channels_result_from_dict = ExportChannelsResult.from_dict(export_channels_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


