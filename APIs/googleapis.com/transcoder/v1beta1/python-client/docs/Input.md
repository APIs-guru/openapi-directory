# Input

Input asset.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | A unique key for this input. Must be specified when using advanced mapping and edit lists. | [optional] 
**preprocessing_config** | [**PreprocessingConfig**](PreprocessingConfig.md) |  | [optional] 
**uri** | **str** | URI of the media. Input files must be at least 5 seconds in duration and stored in Cloud Storage (for example, &#x60;gs://bucket/inputs/file.mp4&#x60;). If empty, the value will be populated from &#x60;Job.input_uri&#x60;. | [optional] 

## Example

```python
from openapi_client.models.input import Input

# TODO update the JSON string below
json = "{}"
# create an instance of Input from a JSON string
input_instance = Input.from_json(json)
# print the JSON string representation of the object
print(Input.to_json())

# convert the object into a dict
input_dict = input_instance.to_dict()
# create an instance of Input from a dict
input_from_dict = Input.from_dict(input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


