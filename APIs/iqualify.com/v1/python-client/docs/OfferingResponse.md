# OfferingResponse


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
**name** | **str** |  | [optional] 
**price** | **float** |  | [optional] 
**start** | **datetime** |  | [optional] 
**tasks_enabled** | **bool** |  | [optional] 
**trailer_video_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.offering_response import OfferingResponse

# TODO update the JSON string below
json = "{}"
# create an instance of OfferingResponse from a JSON string
offering_response_instance = OfferingResponse.from_json(json)
# print the JSON string representation of the object
print(OfferingResponse.to_json())

# convert the object into a dict
offering_response_dict = offering_response_instance.to_dict()
# create an instance of OfferingResponse from a dict
offering_response_from_dict = OfferingResponse.from_dict(offering_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


