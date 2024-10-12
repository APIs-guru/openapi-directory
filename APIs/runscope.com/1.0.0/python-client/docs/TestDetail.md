# TestDetail


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
**environments** | [**Environment**](Environment.md) |  | [optional] 
**exported_at** | **int** |  | [optional] 
**schedules** | [**List[Schedule]**](Schedule.md) |  | [optional] 
**steps** | **List[object]** |  | [optional] 
**version** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.test_detail import TestDetail

# TODO update the JSON string below
json = "{}"
# create an instance of TestDetail from a JSON string
test_detail_instance = TestDetail.from_json(json)
# print the JSON string representation of the object
print(TestDetail.to_json())

# convert the object into a dict
test_detail_dict = test_detail_instance.to_dict()
# create an instance of TestDetail from a dict
test_detail_from_dict = TestDetail.from_dict(test_detail_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


