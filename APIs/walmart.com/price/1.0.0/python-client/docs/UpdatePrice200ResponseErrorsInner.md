# UpdatePrice200ResponseErrorsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** |  | [optional] 
**causes** | [**List[UpdatePrice200ResponseErrorsInnerCausesInner]**](UpdatePrice200ResponseErrorsInnerCausesInner.md) |  | [optional] 
**code** | **str** |  | 
**component** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**error_identifiers** | **Dict[str, object]** |  | [optional] 
**var_field** | **str** |  | [optional] 
**gateway_error_category** | **str** |  | [optional] 
**info** | **str** |  | [optional] 
**service_name** | **str** |  | [optional] 
**severity** | **str** |  | [optional] 
**type** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.update_price200_response_errors_inner import UpdatePrice200ResponseErrorsInner

# TODO update the JSON string below
json = "{}"
# create an instance of UpdatePrice200ResponseErrorsInner from a JSON string
update_price200_response_errors_inner_instance = UpdatePrice200ResponseErrorsInner.from_json(json)
# print the JSON string representation of the object
print(UpdatePrice200ResponseErrorsInner.to_json())

# convert the object into a dict
update_price200_response_errors_inner_dict = update_price200_response_errors_inner_instance.to_dict()
# create an instance of UpdatePrice200ResponseErrorsInner from a dict
update_price200_response_errors_inner_from_dict = UpdatePrice200ResponseErrorsInner.from_dict(update_price200_response_errors_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


