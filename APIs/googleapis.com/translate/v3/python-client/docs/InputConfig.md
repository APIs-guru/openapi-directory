# InputConfig

Input configuration for BatchTranslateText request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gcs_source** | [**GcsSource**](GcsSource.md) |  | [optional] 
**mime_type** | **str** | Optional. Can be \&quot;text/plain\&quot; or \&quot;text/html\&quot;. For &#x60;.tsv&#x60;, \&quot;text/html\&quot; is used if mime_type is missing. For &#x60;.html&#x60;, this field must be \&quot;text/html\&quot; or empty. For &#x60;.txt&#x60;, this field must be \&quot;text/plain\&quot; or empty. | [optional] 

## Example

```python
from openapi_client.models.input_config import InputConfig

# TODO update the JSON string below
json = "{}"
# create an instance of InputConfig from a JSON string
input_config_instance = InputConfig.from_json(json)
# print the JSON string representation of the object
print(InputConfig.to_json())

# convert the object into a dict
input_config_dict = input_config_instance.to_dict()
# create an instance of InputConfig from a dict
input_config_from_dict = InputConfig.from_dict(input_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


