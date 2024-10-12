# TransformProperties

A Transform.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **datetime** | The UTC date and time when the Transform was created, in &#39;YYYY-MM-DDThh:mm:ssZ&#39; format. | [optional] [readonly] 
**description** | **str** | An optional verbose description of the Transform. | [optional] 
**last_modified** | **datetime** | The UTC date and time when the Transform was last updated, in &#39;YYYY-MM-DDThh:mm:ssZ&#39; format. | [optional] [readonly] 
**outputs** | [**List[TransformOutput]**](TransformOutput.md) | An array of one or more TransformOutputs that the Transform should generate. | 

## Example

```python
from openapi_client.models.transform_properties import TransformProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransformProperties from a JSON string
transform_properties_instance = TransformProperties.from_json(json)
# print the JSON string representation of the object
print(TransformProperties.to_json())

# convert the object into a dict
transform_properties_dict = transform_properties_instance.to_dict()
# create an instance of TransformProperties from a dict
transform_properties_from_dict = TransformProperties.from_dict(transform_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


