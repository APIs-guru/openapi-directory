# ErrorsAvailableVersions200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**total_count** | **int** | The full number of versions across all pages. | [optional] 
**versions** | **List[str]** | List of available versions. | [optional] 

## Example

```python
from openapi_client.models.errors_available_versions200_response import ErrorsAvailableVersions200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsAvailableVersions200Response from a JSON string
errors_available_versions200_response_instance = ErrorsAvailableVersions200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsAvailableVersions200Response.to_json())

# convert the object into a dict
errors_available_versions200_response_dict = errors_available_versions200_response_instance.to_dict()
# create an instance of ErrorsAvailableVersions200Response from a dict
errors_available_versions200_response_from_dict = ErrorsAvailableVersions200Response.from_dict(errors_available_versions200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


