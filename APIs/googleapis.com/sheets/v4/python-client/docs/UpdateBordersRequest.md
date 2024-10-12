# UpdateBordersRequest

Updates the borders of a range. If a field is not set in the request, that means the border remains as-is. For example, with two subsequent UpdateBordersRequest: 1. range: A1:A5 `{ top: RED, bottom: WHITE }` 2. range: A1:A5 `{ left: BLUE }` That would result in A1:A5 having a borders of `{ top: RED, bottom: WHITE, left: BLUE }`. If you want to clear a border, explicitly set the style to NONE.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bottom** | [**Border**](Border.md) |  | [optional] 
**inner_horizontal** | [**Border**](Border.md) |  | [optional] 
**inner_vertical** | [**Border**](Border.md) |  | [optional] 
**left** | [**Border**](Border.md) |  | [optional] 
**range** | [**GridRange**](GridRange.md) |  | [optional] 
**right** | [**Border**](Border.md) |  | [optional] 
**top** | [**Border**](Border.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_borders_request import UpdateBordersRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateBordersRequest from a JSON string
update_borders_request_instance = UpdateBordersRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateBordersRequest.to_json())

# convert the object into a dict
update_borders_request_dict = update_borders_request_instance.to_dict()
# create an instance of UpdateBordersRequest from a dict
update_borders_request_from_dict = UpdateBordersRequest.from_dict(update_borders_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


