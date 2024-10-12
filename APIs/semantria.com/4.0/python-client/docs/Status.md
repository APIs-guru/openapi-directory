# Status


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_version** | **str** | Represents current version of the exposed API | 
**service_status** | **str** | Represents the availability of the service | 
**service_version** | **str** | Represents current version of the Semantria service | 
**supported_compression** | **str** | Exposes supported compression algorithms. Currently only gzip and deflate are supported | 
**supported_encoding** | **str** | Exposes supported content encoding. Currently only UTF-8 is supported | 
**supported_languages** | **List[str]** | Exposes list of supported languages | 

## Example

```python
from openapi_client.models.status import Status

# TODO update the JSON string below
json = "{}"
# create an instance of Status from a JSON string
status_instance = Status.from_json(json)
# print the JSON string representation of the object
print(Status.to_json())

# convert the object into a dict
status_dict = status_instance.to_dict()
# create an instance of Status from a dict
status_from_dict = Status.from_dict(status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


