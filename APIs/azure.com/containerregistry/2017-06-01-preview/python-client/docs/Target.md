# Target

The target of the event.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**digest** | **str** | The digest of the content, as defined by the Registry V2 HTTP API Specification. | [optional] 
**length** | **int** | The number of bytes of the content. Same as Size field. | [optional] 
**media_type** | **str** | The MIME type of the referenced object. | [optional] 
**repository** | **str** | The repository name. | [optional] 
**size** | **int** | The number of bytes of the content. Same as Length field. | [optional] 
**tag** | **str** | The tag name. | [optional] 
**url** | **str** | The direct URL to the content. | [optional] 

## Example

```python
from openapi_client.models.target import Target

# TODO update the JSON string below
json = "{}"
# create an instance of Target from a JSON string
target_instance = Target.from_json(json)
# print the JSON string representation of the object
print(Target.to_json())

# convert the object into a dict
target_dict = target_instance.to_dict()
# create an instance of Target from a dict
target_from_dict = Target.from_dict(target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


