# DimensionValueRequest

Represents a DimensionValuesRequest.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dimension_name** | **str** | The name of the dimension for which values should be requested. | [optional] 
**end_date** | **date** |  | [optional] 
**filters** | [**List[DimensionFilter]**](DimensionFilter.md) | The list of filters by which to filter values. The filters are ANDed. | [optional] 
**kind** | **str** | The kind of request this is, in this case dfareporting#dimensionValueRequest . | [optional] 
**start_date** | **date** |  | [optional] 

## Example

```python
from openapi_client.models.dimension_value_request import DimensionValueRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DimensionValueRequest from a JSON string
dimension_value_request_instance = DimensionValueRequest.from_json(json)
# print the JSON string representation of the object
print(DimensionValueRequest.to_json())

# convert the object into a dict
dimension_value_request_dict = dimension_value_request_instance.to_dict()
# create an instance of DimensionValueRequest from a dict
dimension_value_request_from_dict = DimensionValueRequest.from_dict(dimension_value_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


