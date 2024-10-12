# ApplicationSummary


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** |  | 
**id** | **str** |  | 
**versions** | **List[str]** |  | 

## Example

```python
from openapi_client.models.application_summary import ApplicationSummary

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationSummary from a JSON string
application_summary_instance = ApplicationSummary.from_json(json)
# print the JSON string representation of the object
print(ApplicationSummary.to_json())

# convert the object into a dict
application_summary_dict = application_summary_instance.to_dict()
# create an instance of ApplicationSummary from a dict
application_summary_from_dict = ApplicationSummary.from_dict(application_summary_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


