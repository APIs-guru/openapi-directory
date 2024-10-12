# UpdateSheetPropertiesRequest

Updates properties of the sheet with the specified sheetId.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#x60;properties&#x60; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**properties** | [**SheetProperties**](SheetProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_sheet_properties_request import UpdateSheetPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSheetPropertiesRequest from a JSON string
update_sheet_properties_request_instance = UpdateSheetPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSheetPropertiesRequest.to_json())

# convert the object into a dict
update_sheet_properties_request_dict = update_sheet_properties_request_instance.to_dict()
# create an instance of UpdateSheetPropertiesRequest from a dict
update_sheet_properties_request_from_dict = UpdateSheetPropertiesRequest.from_dict(update_sheet_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


