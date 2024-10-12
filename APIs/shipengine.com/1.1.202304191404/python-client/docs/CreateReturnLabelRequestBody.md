# CreateReturnLabelRequestBody

A create return label request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**charge_event** | [**LabelChargeEvent**](LabelChargeEvent.md) | The label charge event.  | [optional] 
**display_scheme** | [**DisplayScheme**](DisplayScheme.md) | The display format that the label should be shown in. | [optional] 
**label_download_type** | [**LabelDownloadType**](LabelDownloadType.md) |  | [optional] 
**label_format** | [**LabelFormat**](LabelFormat.md) | The file format that you want the label to be in.  We recommend &#x60;pdf&#x60; format because it is supported by all carriers, whereas some carriers do not support the &#x60;png&#x60; or &#x60;zpl&#x60; formats.  | [optional] 
**label_image_id** | **str** | The label image resource that was used to create a custom label image. | [optional] 
**label_layout** | [**LabelLayout**](LabelLayout.md) | The layout (size) that you want the label to be in.  The &#x60;label_format&#x60; determines which sizes are allowed.  &#x60;4x6&#x60; is supported for all label formats, whereas &#x60;letter&#x60; (8.5\&quot; x 11\&quot;) is only supported for &#x60;pdf&#x60; format.  | [optional] 

## Example

```python
from openapi_client.models.create_return_label_request_body import CreateReturnLabelRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateReturnLabelRequestBody from a JSON string
create_return_label_request_body_instance = CreateReturnLabelRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreateReturnLabelRequestBody.to_json())

# convert the object into a dict
create_return_label_request_body_dict = create_return_label_request_body_instance.to_dict()
# create an instance of CreateReturnLabelRequestBody from a dict
create_return_label_request_body_from_dict = CreateReturnLabelRequestBody.from_dict(create_return_label_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


