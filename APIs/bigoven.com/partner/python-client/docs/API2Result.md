# API2Result


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | **object** |  | [optional] 
**message** | **str** |  | [optional] 
**status_code** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.api2_result import API2Result

# TODO update the JSON string below
json = "{}"
# create an instance of API2Result from a JSON string
api2_result_instance = API2Result.from_json(json)
# print the JSON string representation of the object
print(API2Result.to_json())

# convert the object into a dict
api2_result_dict = api2_result_instance.to_dict()
# create an instance of API2Result from a dict
api2_result_from_dict = API2Result.from_dict(api2_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


