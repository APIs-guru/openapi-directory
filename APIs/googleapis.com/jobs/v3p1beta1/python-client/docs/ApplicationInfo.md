# ApplicationInfo

Application related details of a job posting.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**emails** | **List[str]** | Optional but at least one of uris, emails or instruction must be specified. Use this field to specify email address(es) to which resumes or applications can be sent. The maximum number of allowed characters for each entry is 255. | [optional] 
**instruction** | **str** | Optional but at least one of uris, emails or instruction must be specified. Use this field to provide instructions, such as \&quot;Mail your application to ...\&quot;, that a candidate can follow to apply for the job. This field accepts and sanitizes HTML input, and also accepts bold, italic, ordered list, and unordered list markup tags. The maximum number of allowed characters is 3,000. | [optional] 
**uris** | **List[str]** | Optional but at least one of uris, emails or instruction must be specified. Use this URI field to direct an applicant to a website, for example to link to an online application form. The maximum number of allowed characters for each entry is 2,000. | [optional] 

## Example

```python
from openapi_client.models.application_info import ApplicationInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationInfo from a JSON string
application_info_instance = ApplicationInfo.from_json(json)
# print the JSON string representation of the object
print(ApplicationInfo.to_json())

# convert the object into a dict
application_info_dict = application_info_instance.to_dict()
# create an instance of ApplicationInfo from a dict
application_info_from_dict = ApplicationInfo.from_dict(application_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


