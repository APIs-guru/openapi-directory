# ApplicationIn


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | **Dict[str, str]** |  | [optional] 
**name** | **str** |  | 
**rate_limit** | **int** |  | [optional] 
**uid** | **str** | Optional unique identifier for the application | [optional] 

## Example

```python
from openapi_client.models.application_in import ApplicationIn

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationIn from a JSON string
application_in_instance = ApplicationIn.from_json(json)
# print the JSON string representation of the object
print(ApplicationIn.to_json())

# convert the object into a dict
application_in_dict = application_in_instance.to_dict()
# create an instance of ApplicationIn from a dict
application_in_from_dict = ApplicationIn.from_dict(application_in_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


