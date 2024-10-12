# XCom

Full representations of XCom entry.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dag_id** | **str** |  | [optional] 
**execution_date** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**task_id** | **str** |  | [optional] 
**timestamp** | **str** |  | [optional] 
**value** | **str** | The value | [optional] 

## Example

```python
from openapi_client.models.x_com import XCom

# TODO update the JSON string below
json = "{}"
# create an instance of XCom from a JSON string
x_com_instance = XCom.from_json(json)
# print the JSON string representation of the object
print(XCom.to_json())

# convert the object into a dict
x_com_dict = x_com_instance.to_dict()
# create an instance of XCom from a dict
x_com_from_dict = XCom.from_dict(x_com_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


