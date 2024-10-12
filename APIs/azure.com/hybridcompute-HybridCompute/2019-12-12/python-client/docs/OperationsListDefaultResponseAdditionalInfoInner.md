# OperationsListDefaultResponseAdditionalInfoInner

The resource management error additional info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**info** | **object** | The additional info. | [optional] [readonly] 
**type** | **str** | The additional info type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.operations_list_default_response_additional_info_inner import OperationsListDefaultResponseAdditionalInfoInner

# TODO update the JSON string below
json = "{}"
# create an instance of OperationsListDefaultResponseAdditionalInfoInner from a JSON string
operations_list_default_response_additional_info_inner_instance = OperationsListDefaultResponseAdditionalInfoInner.from_json(json)
# print the JSON string representation of the object
print(OperationsListDefaultResponseAdditionalInfoInner.to_json())

# convert the object into a dict
operations_list_default_response_additional_info_inner_dict = operations_list_default_response_additional_info_inner_instance.to_dict()
# create an instance of OperationsListDefaultResponseAdditionalInfoInner from a dict
operations_list_default_response_additional_info_inner_from_dict = OperationsListDefaultResponseAdditionalInfoInner.from_dict(operations_list_default_response_additional_info_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


