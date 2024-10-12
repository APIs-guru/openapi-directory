# ApplicationOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | 
**id** | **str** |  | 
**metadata** | **Dict[str, str]** |  | [optional] 
**name** | **str** |  | 
**rate_limit** | **int** |  | [optional] 
**uid** | **str** | Optional unique identifier for the application | [optional] 
**updated_at** | **datetime** |  | 

## Example

```python
from openapi_client.models.application_out import ApplicationOut

# TODO update the JSON string below
json = "{}"
# create an instance of ApplicationOut from a JSON string
application_out_instance = ApplicationOut.from_json(json)
# print the JSON string representation of the object
print(ApplicationOut.to_json())

# convert the object into a dict
application_out_dict = application_out_instance.to_dict()
# create an instance of ApplicationOut from a dict
application_out_from_dict = ApplicationOut.from_dict(application_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


