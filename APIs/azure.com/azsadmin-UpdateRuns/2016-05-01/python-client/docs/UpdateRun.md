# UpdateRun

Representation of a update run resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateRunModel**](UpdateRunModel.md) |  | [optional] 
**id** | **str** | URI of the resource. | [optional] [readonly] 
**location** | **str** | Region location of resource. | [optional] 
**name** | **str** | Name of the resource. | [optional] [readonly] 
**tags** | **Dict[str, str]** | List of key-value pairs. | [optional] 
**type** | **str** | Type of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.update_run import UpdateRun

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateRun from a JSON string
update_run_instance = UpdateRun.from_json(json)
# print the JSON string representation of the object
print(UpdateRun.to_json())

# convert the object into a dict
update_run_dict = update_run_instance.to_dict()
# create an instance of UpdateRun from a dict
update_run_from_dict = UpdateRun.from_dict(update_run_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


