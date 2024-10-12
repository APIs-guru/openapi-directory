# BasicStatusResultObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 
**status_msg** | **str** | Simple message describing the final status of the process. Only to be used in success case responses. Otherwise, use the ErrorObject.  | 

## Example

```python
from openapi_client.models.basic_status_result_object import BasicStatusResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of BasicStatusResultObject from a JSON string
basic_status_result_object_instance = BasicStatusResultObject.from_json(json)
# print the JSON string representation of the object
print(BasicStatusResultObject.to_json())

# convert the object into a dict
basic_status_result_object_dict = basic_status_result_object_instance.to_dict()
# create an instance of BasicStatusResultObject from a dict
basic_status_result_object_from_dict = BasicStatusResultObject.from_dict(basic_status_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


