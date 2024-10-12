# OfferingMetadataResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_id** | **str** |  | [optional] 
**cover_image_url** | **str** |  | [optional] 
**currency** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**early_close_off_date** | **datetime** |  | [optional] 
**end** | **datetime** |  | [optional] 
**enrollment_limit** | **float** |  | [optional] 
**has_early_close_off** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**identifier** | **str** |  | [optional] 
**is_readonly** | **bool** |  | [optional] 
**metadata** | [**OfferingMetadata**](OfferingMetadata.md) |  | [optional] 
**name** | **str** |  | [optional] 
**overview** | **str** | content can contain html | [optional] 
**price** | **float** |  | [optional] 
**start** | **datetime** |  | [optional] 
**tasks_enabled** | **bool** |  | [optional] 
**trailer_video_url** | **str** |  | [optional] 
**use_relative_dates** | **bool** |  | [optional] [default to False]

## Example

```python
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingMetadataResponse from a JSON string
offering_metadata_response_instance = OfferingMetadataResponse.from_json(json)
# print the JSON string representation of the object
print(OfferingMetadataResponse.to_json())

# convert the object into a dict
offering_metadata_response_dict = offering_metadata_response_instance.to_dict()
# create an instance of OfferingMetadataResponse from a dict
offering_metadata_response_from_dict = OfferingMetadataResponse.from_dict(offering_metadata_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


