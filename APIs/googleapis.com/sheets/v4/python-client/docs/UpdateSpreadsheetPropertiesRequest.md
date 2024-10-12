# UpdateSpreadsheetPropertiesRequest

Updates properties of a spreadsheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fields** | **str** | The fields that should be updated. At least one field must be specified. The root &#39;properties&#39; is implied and should not be specified. A single &#x60;\&quot;*\&quot;&#x60; can be used as short-hand for listing every field. | [optional] 
**properties** | [**SpreadsheetProperties**](SpreadsheetProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_spreadsheet_properties_request import UpdateSpreadsheetPropertiesRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateSpreadsheetPropertiesRequest from a JSON string
update_spreadsheet_properties_request_instance = UpdateSpreadsheetPropertiesRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateSpreadsheetPropertiesRequest.to_json())

# convert the object into a dict
update_spreadsheet_properties_request_dict = update_spreadsheet_properties_request_instance.to_dict()
# create an instance of UpdateSpreadsheetPropertiesRequest from a dict
update_spreadsheet_properties_request_from_dict = UpdateSpreadsheetPropertiesRequest.from_dict(update_spreadsheet_properties_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


