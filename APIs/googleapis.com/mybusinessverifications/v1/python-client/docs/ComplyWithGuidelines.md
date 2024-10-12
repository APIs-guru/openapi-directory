# ComplyWithGuidelines

Indicates that the location fails to comply with our [guidelines](https://support.google.com/business/answer/3038177).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**recommendation_reason** | **str** | The reason why the location is being recommended to comply with guidelines. | [optional] 

## Example

```python
from openapi_client.models.comply_with_guidelines import ComplyWithGuidelines

# TODO update the JSON string below
json = "{}"
# create an instance of ComplyWithGuidelines from a JSON string
comply_with_guidelines_instance = ComplyWithGuidelines.from_json(json)
# print the JSON string representation of the object
print(ComplyWithGuidelines.to_json())

# convert the object into a dict
comply_with_guidelines_dict = comply_with_guidelines_instance.to_dict()
# create an instance of ComplyWithGuidelines from a dict
comply_with_guidelines_from_dict = ComplyWithGuidelines.from_dict(comply_with_guidelines_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


