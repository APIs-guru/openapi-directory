# ApplicationListResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**odata_next_link** | **str** |  | [optional] 
**value** | [**List[ApplicationSummary]**](ApplicationSummary.md) |  | [optional] 

## Example

```python
from openapi_client.models.application_list_result import ApplicationListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationListResult from a JSON string
application_list_result_instance = ApplicationListResult.from_json(json)
# print the JSON string representation of the object
print(ApplicationListResult.to_json())

# convert the object into a dict
application_list_result_dict = application_list_result_instance.to_dict()
# create an instance of ApplicationListResult from a dict
application_list_result_from_dict = ApplicationListResult.from_dict(application_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


