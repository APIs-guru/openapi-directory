# Transform

A Transform encapsulates the rules or instructions for generating desired outputs from input media, such as by transcoding or by extracting insights. After the Transform is created, it can be applied to input media by creating Jobs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**TransformProperties**](TransformProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource ID for the resource. | [optional] [readonly] 
**name** | **str** | The name of the resource. | [optional] [readonly] 
**type** | **str** | The type of the resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transform import Transform

# TODO update the JSON string below
json = "{}"
# create an instance of Transform from a JSON string
transform_instance = Transform.from_json(json)
# print the JSON string representation of the object
print(Transform.to_json())

# convert the object into a dict
transform_dict = transform_instance.to_dict()
# create an instance of Transform from a dict
transform_from_dict = Transform.from_dict(transform_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


