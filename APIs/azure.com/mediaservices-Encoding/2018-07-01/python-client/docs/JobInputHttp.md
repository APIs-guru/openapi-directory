# JobInputHttp

Represents HTTPS job input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**base_uri** | **str** | Base URI for HTTPS job input. It will be concatenated with provided file names. If no base uri is given, then the provided file list is assumed to be fully qualified uris. Maximum length of 4000 characters. | [optional] 

## Example

```python
from openapi_client.models.job_input_http import JobInputHttp

# TODO update the JSON string below
json = "{}"
# create an instance of JobInputHttp from a JSON string
job_input_http_instance = JobInputHttp.from_json(json)
# print the JSON string representation of the object
print(JobInputHttp.to_json())

# convert the object into a dict
job_input_http_dict = job_input_http_instance.to_dict()
# create an instance of JobInputHttp from a dict
job_input_http_from_dict = JobInputHttp.from_dict(job_input_http_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


