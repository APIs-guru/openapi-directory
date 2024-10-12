# V2ApiTarget

A restriction for a specific service and optionally one or multiple specific methods. Both fields are case insensitive.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**methods** | **List[str]** | Optional. List of one or more methods that can be called. If empty, all methods for the service are allowed. A wildcard (*) can be used as the last symbol. Valid examples: &#x60;google.cloud.translate.v2.TranslateService.GetSupportedLanguage&#x60; &#x60;TranslateText&#x60; &#x60;Get*&#x60; &#x60;translate.googleapis.com.Get*&#x60; | [optional] 
**service** | **str** | The service for this restriction. It should be the canonical service name, for example: &#x60;translate.googleapis.com&#x60;. You can use [&#x60;gcloud services list&#x60;](/sdk/gcloud/reference/services/list) to get a list of services that are enabled in the project. | [optional] 

## Example

```python
from openapi_client.models.v2_api_target import V2ApiTarget

# TODO update the JSON string below
json = "{}"
# create an instance of V2ApiTarget from a JSON string
v2_api_target_instance = V2ApiTarget.from_json(json)
# print the JSON string representation of the object
print(V2ApiTarget.to_json())

# convert the object into a dict
v2_api_target_dict = v2_api_target_instance.to_dict()
# create an instance of V2ApiTarget from a dict
v2_api_target_from_dict = V2ApiTarget.from_dict(v2_api_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


