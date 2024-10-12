# ImageResponseBase


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_delete** | **bool** | Whether the image will be automatically deleted with the last service using it. | [optional] 
**created_time** | **datetime** | The time the image was created. | [optional] 
**creation_state** | **str** | The state of the operation. | [optional] 
**description** | **str** | The image description. | [optional] 
**error** | [**ModelErrorResponse**](ModelErrorResponse.md) |  | [optional] 
**id** | **str** | The image Id. | [optional] 
**image_build_log_uri** | **str** | The Uri to the image build logs. | [optional] 
**image_flavor** | **str** | The flavor of the image. | 
**image_location** | **str** | The Image location string. | [optional] 
**image_type** | **str** | The type of the image. | [optional] 
**kv_tags** | **Dict[str, str]** | The image tag dictionary. Tags are mutable. | [optional] 
**model_details** | [**List[Model]**](Model.md) | The list of models. | [optional] 
**model_ids** | **List[str]** | The list of model Ids. | [optional] 
**modified_time** | **datetime** | The time the image was last modified. | [optional] 
**name** | **str** | The image name. | [optional] 
**operation_id** | **str** | The ID of the asynchronous operation for this image. | [optional] 
**properties** | **Dict[str, str]** | The image properties dictionary. Properties are immutable. | [optional] 
**version** | **int** | The image version. | [optional] 

## Example

```python
from openapi_client.models.image_response_base import ImageResponseBase

# TODO update the JSON string below
json = "{}"
# create an instance of ImageResponseBase from a JSON string
image_response_base_instance = ImageResponseBase.from_json(json)
# print the JSON string representation of the object
print(ImageResponseBase.to_json())

# convert the object into a dict
image_response_base_dict = image_response_base_instance.to_dict()
# create an instance of ImageResponseBase from a dict
image_response_base_from_dict = ImageResponseBase.from_dict(image_response_base_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


