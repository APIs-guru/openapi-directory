# HandledErrorReasonFrame


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_code** | **bool** | this line isn&#39;t from any framework | [optional] 
**class_method** | **bool** | is a class method | [optional] 
**class_name** | **str** | name of the class | [optional] 
**code_formatted** | **str** | Formatted frame string | [optional] 
**code_raw** | **str** | Unformatted Frame string | [optional] 
**exception_type** | **str** | Exception type. | [optional] 
**file** | **str** | name of the file | [optional] 
**framework_name** | **str** | Name of the framework | [optional] 
**language** | **str** | programming language of the frame | [optional] 
**line** | **int** | line number | [optional] 
**method** | **str** | name of the method | [optional] 
**method_params** | **str** | parameters of the frames method | [optional] 
**os_exception_type** | **str** | OS exception type. (aka. SIGNAL) | [optional] 

## Example

```python
from openapi_client.models.handled_error_reason_frame import HandledErrorReasonFrame

# TODO update the JSON string below
json = "{}"
# create an instance of HandledErrorReasonFrame from a JSON string
handled_error_reason_frame_instance = HandledErrorReasonFrame.from_json(json)
# print the JSON string representation of the object
print(HandledErrorReasonFrame.to_json())

# convert the object into a dict
handled_error_reason_frame_dict = handled_error_reason_frame_instance.to_dict()
# create an instance of HandledErrorReasonFrame from a dict
handled_error_reason_frame_from_dict = HandledErrorReasonFrame.from_dict(handled_error_reason_frame_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


