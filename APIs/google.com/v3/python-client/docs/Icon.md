# Icon

Information about a partner's icon.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disapproval_reasons** | **List[str]** | Output only. The icon&#39;s disapproval reason(s). Only applies to icons with &#x60;REJECTED&#x60; state. | [optional] [readonly] 
**icon_uri** | **str** | Output only. The approved icon&#39;s Google-hosted URI. Only applies to icons with &#x60;APPROVED&#x60; state. | [optional] [readonly] 
**image_data** | **bytearray** | Required. Input only. The icon contents, which must be in PNG format, or convertible to PNG. | [optional] 
**name** | **str** | Required. Output only. The resource name for the icon in the format &#x60;accounts/{account_id}/icons/{icon_id}&#x60;. Google generates the &#x60;icon_id&#x60; during the &#x60;create&#x60; operation. Use the &#x60;icon_id&#x60; to associate the icon with a brand using the [accounts.brands](/hotels/hotel-prices/api-reference/rest/v3/accounts.brands#resource:-brand) API. | [optional] [readonly] 
**reference** | **str** | Optional. Value for tracking the icon. It could be the primary key to your icon in your system, or the icon&#39;s filename. Google does not use this value. | [optional] 
**state** | **str** | Output only. The icon&#39;s current state. | [optional] [readonly] 

## Example

```python
from openapi_client.models.icon import Icon

# TODO update the JSON string below
json = "{}"
# create an instance of Icon from a JSON string
icon_instance = Icon.from_json(json)
# print the JSON string representation of the object
print(Icon.to_json())

# convert the object into a dict
icon_dict = icon_instance.to_dict()
# create an instance of Icon from a dict
icon_from_dict = Icon.from_dict(icon_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


