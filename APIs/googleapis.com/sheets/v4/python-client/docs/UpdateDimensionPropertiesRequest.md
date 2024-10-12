# UpdateDimensionPropertiesRequest

Updates properties of dimensions within the specified range.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_source_sheet_range** | [**DataSourceSheetDimensionRange**](DataSourceSheetDimensionRange.md) |  | [optional] 
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;properties&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**properties** | [**DimensionProperties**](DimensionProperties.md) |  | [optional] 
**range** | [**DimensionRange**](DimensionRange.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_dimension_properties_request import UpdateDimensionPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateDimensionPropertiesRequest from a JSON string
update_dimension_properties_request_instance = UpdateDimensionPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateDimensionPropertiesRequest.to_json())

# convert the object into a dict
update_dimension_properties_request_dict = update_dimension_properties_request_instance.to_dict()
# create an instance of UpdateDimensionPropertiesRequest from a dict
update_dimension_properties_request_from_dict = UpdateDimensionPropertiesRequest.from_dict(update_dimension_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


