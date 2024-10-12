# Test


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **int** | The date the test was created in seconds (Unix time stamp format). | [optional] 
**created_by** | [**TestCreatedBy**](TestCreatedBy.md) |  | [optional] 
**default_environment_id** | **str** |  | [optional] 
**description** | **str** | The description for the test. | [optional] 
**id** | **str** |  | [optional] 
**last_run** | **object** |  | [optional] 
**name** | **str** | The name for the test. | 
**trigger_url** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.test import Test

# TODO update the JSON string below
json = "{}"
# create an instance of Test from a JSON string
test_instance = Test.from_json(json)
# print the JSON string representation of the object
print(Test.to_json())

# convert the object into a dict
test_dict = test_instance.to_dict()
# create an instance of Test from a dict
test_from_dict = Test.from_dict(test_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


